import shopifyClient from './shopify';
import { gql } from 'graphql-request';
import { Product } from './types'; // Assuming Product type is defined here

const PRODUCTS_QUERY = gql`
  query getProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          description
          handle
          vendor
          tags
          collections(first: 10) {
            edges {
              node {
                title
              }
            }
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 5) { # Fetch more images
            edges {
              node {
                url
              }
            }
          }
          variants(first: 10) { # Fetch more variants
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
          options {
            name
            values
          }
        }
      }
    }
  }
`;

export async function getShopifyProducts(first = 3): Promise<Product[]> {
  try {
    const data: any = await shopifyClient.request(PRODUCTS_QUERY, { first });

    return data.products.edges.map((edge: any) => {
      const productNode = edge.node;
      const imageUrl = productNode.images.edges[0]?.node.url || '/placeholder.png';
      const price = productNode.priceRange.minVariantPrice.amount;
      const currencyCode = productNode.priceRange.minVariantPrice.currencyCode;

      const colors: { name: string; hex: string }[] = [];
      const sizes: string[] = [];

      // Extract colors and sizes from product options
      productNode.options.forEach((option: any) => {
        if (option.name.toLowerCase() === 'color') {
          option.values.forEach((value: string) => {
            // You might need a mapping for color names to hex codes if not provided by Shopify
            colors.push({ name: value, hex: `#${Math.floor(Math.random()*16777215).toString(16)}` }); // Placeholder hex
          });
        } else if (option.name.toLowerCase() === 'size') {
          option.values.forEach((value: string) => {
            sizes.push(value);
          });
        }
      });

      return {
        id: productNode.id,
        name: productNode.title,
        description: productNode.description,
        imageUrl: imageUrl,
        price: `${currencyCode} ${parseFloat(price).toFixed(2)}`,
        collections: productNode.collections.edges.map((colEdge: any) => colEdge.node.title),
        tags: productNode.tags,
        vendor: productNode.vendor,
        mrpText: '', // Still not directly available, might need metafields
        images: productNode.images.edges.map((imgEdge: any) => imgEdge.node.url),
        colors: colors,
        sizes: sizes,
        deliveryInfo: 'Usually ships in 2-3 business days', // Placeholder
        details: [], // Populate from product description or metafields
        handle: productNode.handle,
      };
    });
  } catch (error) {
    console.error('Error fetching products from Shopify:', error);
    return [];
  }
}

const COLLECTIONS_QUERY = gql`
  query getCollections($first: Int!) {
    collections(first: $first) {
      edges {
        node {
          id
          title
          handle
          image {
            url
          }
        }
      }
    }
  }
`;

export async function getShopifyCollections(first = 10): Promise<any[]> {
  try {
    const data: any = await shopifyClient.request(COLLECTIONS_QUERY, { first });
    return data.collections.edges.map((edge: any) => edge.node);
  } catch (error) {
    console.error('Error fetching collections from Shopify:', error);
    return [];
  }
}

export async function getShopifyVendors(): Promise<string[]> {
  try {
    // Fetch a larger number of products to get a good sample of vendors
    const data: any = await shopifyClient.request(PRODUCTS_QUERY, { first: 250 }); // Fetch up to 250 products

    const vendors = new Set<string>();
    data.products.edges.forEach((edge: any) => {
      if (edge.node.vendor) {
        vendors.add(edge.node.vendor);
      }
    });
    return Array.from(vendors);
  } catch (error) {
    console.error('Error fetching vendors from Shopify:', error);
    return [];
  }
}

const PRODUCT_BY_HANDLE_QUERY = gql`
  query getProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      descriptionHtml # Use descriptionHtml for rich text
      handle
      vendor
      tags
      collections(first: 10) {
        edges {
          node {
            title
          }
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 10) { # Fetch more images for product details
        edges {
          node {
            url
          }
        }
      }
      variants(first: 20) { # Fetch more variants
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            selectedOptions {
              name
              value
            }
          }
        }
      }
      options {
        name
        values
      }
    }
  }
`;

export async function getShopifyProductByHandle(handle: string): Promise<Product | null> {
  try {
    const data: any = await shopifyClient.request(PRODUCT_BY_HANDLE_QUERY, { handle });

    const productNode = data.productByHandle;

    if (!productNode) {
      return null;
    }

    const imageUrl = productNode.images.edges[0]?.node.url || '/placeholder.png';
    const price = productNode.priceRange.minVariantPrice.amount;
    const currencyCode = productNode.priceRange.minVariantPrice.currencyCode;

    const colors: { name: string; hex: string }[] = [];
    const sizes: string[] = [];

    productNode.options.forEach((option: any) => {
      if (option.name.toLowerCase() === 'color') {
        option.values.forEach((value: string) => {
          colors.push({ name: value, hex: `#${Math.floor(Math.random()*16777215).toString(16)}` }); // Placeholder hex
        });
      } else if (option.name.toLowerCase() === 'size') {
        option.values.forEach((value: string) => {
          sizes.push(value);
        });
      }
    });

    return {
      id: productNode.id,
      name: productNode.title,
      description: productNode.descriptionHtml, // Use descriptionHtml
      imageUrl: imageUrl,
      price: `${currencyCode} ${parseFloat(price).toFixed(2)}`,
      collections: productNode.collections.edges.map((colEdge: any) => colEdge.node.title),
      tags: productNode.tags,
      vendor: productNode.vendor,
      mrpText: '', // Still not directly available, might need metafields
      images: productNode.images.edges.map((imgEdge: any) => imgEdge.node.url),
      colors: colors,
      sizes: sizes,
      deliveryInfo: 'Usually ships in 2-3 business days', // Placeholder
      details: [], // Populate from product description or metafields
      handle: productNode.handle,
    };
  } catch (error) {
    console.error(`Error fetching product by handle (${handle}) from Shopify:`, error);
    return null;
  }
}
