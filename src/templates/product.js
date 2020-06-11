import React, { useState, useContext } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/Logo"
import Box from "../components/Box"
import Text from "../components/Text"
import styled from "styled-components"
import css from "@styled-system/css"
import { motion, AnimateSharedLayout } from "framer-motion"
import { graphql } from "gatsby"
import ProductNotes from "../components/Product/ProductNotes"
import ProductStory from "../components/Product/ProductStory"
import ProductBuy from "../components/Product/ProductBuy"
import Navbar, { NavbarProvider, useNavbar } from "../components/Navbar"

export const ProductContext = React.createContext()
export const useProduct = () => useContext(ProductContext)
export const ProductProvider = ({ children, product }) => {
  return (
    <ProductContext.Provider value={{ ...product }}>
      {children}
    </ProductContext.Provider>
  )
}

const ProductTemplate = ({ data, ...props }) => {
  const { product } = data
  return (
    <NavbarProvider>
      <ProductProvider product={product}>
        <Layout>
          <SEO title="Pattex Distillery" />
          <ProductLayout />
        </Layout>
      </ProductProvider>
    </NavbarProvider>
  )
}

const ProductLayout = () => {
  const { page } = useNavbar()
  return (
    <AnimateSharedLayout>
      {page === "story" && <ProductStory />}
      {page === "notes" && <ProductNotes />}
      {page === "buy" && <ProductBuy />}
      <Navbar />
    </AnimateSharedLayout>
  )
}

/*export const query = graphql`
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
`*/

export default ProductTemplate
