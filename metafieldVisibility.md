# Metafield API Visibility

To make metafields visible in the API, submit a post request to the ADMIN API

The authenticated (basic auth) URL can be found in the dashboard https://pattex-distillery.myshopify.com/admin/apps/private/253754114200

https://[API_KEY]:[PASSWORD]@pattex-distillery.myshopify.com/admin/api/2020-04/orders.json

query:

```graphql
mutation($input: MetafieldStorefrontVisibilityInput!) {
  metafieldStorefrontVisibilityCreate(input: $input) {
    metafieldStorefrontVisibility {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```

variables:

```graphqls
{
  "input": {
    "namespace": "product",
    "key": <KEYNAME>,
    "ownerType": "PRODUCT"
  }
}
```
