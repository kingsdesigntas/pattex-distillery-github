import React from "react"
import ProductTemplate, { query as _query } from "../templates/product"
import { graphql } from "gatsby"

const IndexPage = props => <ProductTemplate {...props} />

export default IndexPage

//export { query }

export const query = graphql`
  #query ShopifyProduct($id: String) {
  query ShopifyProduct {
    #product: shopifyProduct(id: { eq: $id }) {
    product: shopifyProduct(handle: { eq: "section-44-gin" }) {
      images {
        localFile {
          size
        }
      }
      availableForSale
      createdAt
      description
      descriptionHtml
      handle
      id
      priceRange {
        maxVariantPrice {
          amount
        }
        minVariantPrice {
          amount
        }
      }
      productType
      shopifyId
      title
      variants {
        shopifyId
        availableForSale
        price
        priceV2 {
          amount
        }
        requiresShipping
        selectedOptions {
          name
          value
        }
        title
      }
    }
  }
`
