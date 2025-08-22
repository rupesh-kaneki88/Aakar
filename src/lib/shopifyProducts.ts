import shopifyClient from './shopify';
import { gql } from 'graphql-request';
import { Product } from './types'; // Assuming Product type is defined here

interface ShopifyProductNode {
  id: string;
  title: string;
  description: string;
  descriptionHtml: string;
  handle: string;
  vendor: string;
  tags: string[];
  collections: {
    edges: {
      node: {
        title: string;
      };
    }[];
  };
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    maxVariantPrice: {
        amount: string;
        currencyCode: string;
    };
  };
  images: {
    edges: {
      node: {
        url: string;
      };
    }[];
  };
  variants: {
    edges: {
      node: {
        id: string;
        title: string;
        price: {
          amount: string;
          currencyCode: string;
        };
        selectedOptions: {
          name: string;
          value: string;
        }[];
      };
    }[];
  };
  options: {
    name: string;
    values: string[];
  }[];
}

interface ShopifyCollectionNode {
    id: string;
    title: string;
    handle: string;
    image: {
        url: string;
    };
}

interface ShopifyProductsData {
    products: {
        edges: {
            node: ShopifyProductNode;
        }[];
    };
}

interface ShopifyCollectionsData {
    collections: {
        edges: {
            node: ShopifyCollectionNode;
        }[];
    };
}

interface ShopifyProductByHandleData {
    productByHandle: ShopifyProductNode;
}

interface ShopifyProductsByCategoryData {
    collectionByHandle: {
        products: {
            pageInfo: {
                hasNextPage: boolean;
                endCursor: string | null;
            };
            edges: {
                node: ShopifyProductNode;
            }[];
        };
    };
}

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
    const data = await shopifyClient.request<ShopifyProductsData>(PRODUCTS_QUERY, { first });

    return data.products.edges.map((edge: { node: ShopifyProductNode }) => {
      const productNode = edge.node;
      const imageUrl = productNode.images.edges[0]?.node.url || '/placeholder.png';
      const price = productNode.priceRange.minVariantPrice.amount;
      const currencyCode = productNode.priceRange.minVariantPrice.currencyCode;

      const colors: { name: string; hex: string }[] = [];
      const sizes: string[] = [];

      // Extract colors and sizes from product options
      productNode.options.forEach((option: { name: string; values: string[] }) => {
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
        collections: productNode.collections.edges.map((colEdge: { node: { title: string } }) => colEdge.node.title),
        tags: productNode.tags,
        vendor: productNode.vendor,
        mrpText: '', // Still not directly available, might need metafields
        images: productNode.images.edges.map((imgEdge: { node: { url: string } }) => imgEdge.node.url),
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

export async function getShopifyCollections(first = 10): Promise<ShopifyCollectionNode[]> {
  try {
    const data = await shopifyClient.request<ShopifyCollectionsData>(COLLECTIONS_QUERY, { first });
    return data.collections.edges.map((edge: { node: ShopifyCollectionNode }) => edge.node);
  } catch (error) {
    console.error('Error fetching collections from Shopify:', error);
    return [];
  }
}

export async function getShopifyVendors(): Promise<string[]> {
  try {
    // Fetch a larger number of products to get a good sample of vendors
    const data = await shopifyClient.request<ShopifyProductsData>(PRODUCTS_QUERY, { first: 250 }); // Fetch up to 250 products

    const vendors = new Set<string>();
    data.products.edges.forEach((edge: { node: ShopifyProductNode }) => {
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
    const data = await shopifyClient.request<ShopifyProductByHandleData>(PRODUCT_BY_HANDLE_QUERY, { handle });

    const productNode = data.productByHandle;

    if (!productNode) {
      return null;
    }

    const imageUrl = productNode.images.edges[0]?.node.url || '/placeholder.png';
    const price = productNode.priceRange.minVariantPrice.amount;
    const currencyCode = productNode.priceRange.minVariantPrice.currencyCode;

    const colors: { name: string; hex: string }[] = [];
    const sizes: string[] = [];

    productNode.options.forEach((option: { name: string; values: string[] }) => {
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
      collections: productNode.collections.edges.map((colEdge: { node: { title: string } }) => colEdge.node.title),
      tags: productNode.tags,
      vendor: productNode.vendor,
      mrpText: '', // Still not directly available, might need metafields
      images: productNode.images.edges.map((imgEdge: { node: { url: string } }) => imgEdge.node.url),
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

const PRODUCTS_BY_COLLECTION_QUERY = gql`
  query getProductsByCollection($handle: String!, $first: Int!, $after: String) {
    collectionByHandle(handle: $handle) {
      products(first: $first, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
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
            images(first: 5) {
              edges {
                node {
                  url
                }
              }
            }
            variants(first: 10) {
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
  }
`;

export async function getShopifyProductsByCategory(
  handle: string,
  first = 9,
  after: string | null = null
): Promise<{ products: Product[]; hasNextPage: boolean; endCursor: string | null }> {
  try {
      const data = await shopifyClient.request<ShopifyProductsByCategoryData>(PRODUCTS_BY_COLLECTION_QUERY, {
      handle,
      first,
      after,
    });

    if (!data.collectionByHandle) {
      return {
        products: [],
        hasNextPage: false,
        endCursor: null,
      };
    }

    const products = data.collectionByHandle.products.edges.map((edge: { node: ShopifyProductNode }) => {
      const productNode = edge.node;
      const imageUrl = productNode.images.edges[0]?.node.url || '/placeholder.png';
      const price = productNode.priceRange.minVariantPrice.amount;
      const currencyCode = productNode.priceRange.minVariantPrice.currencyCode;

      const colors: { name: string; hex: string }[] = [];
      const sizes: string[] = [];

      productNode.options.forEach((option: { name: string; values: string[] }) => {
        if (option.name.toLowerCase() === 'color') {
          option.values.forEach((value: string) => {
            colors.push({ name: value, hex: `#${Math.floor(Math.random() * 16777215).toString(16)}` });
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
        collections: productNode.collections.edges.map((colEdge: { node: { title: string } }) => colEdge.node.title),
        tags: productNode.tags,
        vendor: productNode.vendor,
        mrpText: '',
        images: productNode.images.edges.map((imgEdge: { node: { url: string } }) => imgEdge.node.url),
        colors: colors,
        sizes: sizes,
        deliveryInfo: 'Usually ships in 2-3 business days',
        details: [],
        handle: productNode.handle,
      };
    });

    const pageInfo = data.collectionByHandle.products.pageInfo;

    return {
      products,
      hasNextPage: pageInfo.hasNextPage,
      endCursor: pageInfo.endCursor,
    };
  } catch (error) {
    console.error(`Error fetching products for category ${handle} from Shopify:`, error);
    return {
      products: [],
      hasNextPage: false,
      endCursor: null,
    };
  }
}
