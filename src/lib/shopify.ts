import { GraphQLClient } from 'graphql-request';

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

if (!domain || !storefrontAccessToken) {
  throw new Error(
    'Shopify credentials are not set. Please ensure SHOPIFY_STORE_DOMAIN and SHOPIFY_STOREFRONT_ACCESS_TOKEN are set in your .env file.'
  );
}

const shopifyClient = new GraphQLClient(`https://${domain}/api/${process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION}/graphql.json`, {
  headers: {
    'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
    "Content-Type" : 'application/json',
  },
});

export default shopifyClient;
