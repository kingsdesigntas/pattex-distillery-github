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

const ProductTemplate = () => {
  return (
    <NavbarProvider>
      <Layout>
        <SEO title="Home" />
        <ProductLayout />
      </Layout>
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

export const query = graphql`
  query ShopifyProduct($id: String) {
    product: shopifyProduct(id: { eq: $id }) {
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

export default ProductTemplate
