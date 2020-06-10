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

const NavbarContext = React.createContext()
const useNavbar = () => useContext(NavbarContext)
const NavbarProvider = ({ children }) => {
  const [page, setPage] = useState("story")

  return (
    <NavbarContext.Provider value={{ page, setPage }}>
      {children}
    </NavbarContext.Provider>
  )
}

const NavbarItem = styled.li`
  ${css({ mx: 2 })}
`
const NavbarButton = styled.button`
    ${css({ px: 2, py: 1 })}
    color: ${props =>
      props.active
        ? props.theme.colors.navbarActiveText
        : props.theme.colors.text};

  `

const Navbar = () => {
  const { page, setPage } = useNavbar()

  const pages = [
    { name: "story", title: "Story" },
    { name: "notes", title: "Flavour Notes" },
    { name: "buy", title: "Buy" },
  ]

  return (
    <Box
      position={["fixed", "fixed", "fixed", "relative"]}
      bottom="0"
      left="0"
      width="100%"
      p="2"
      py="3"
      bg="background"
      color="text"
    >
      <ul
        css={`
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        {pages.map(_page => (
          <NavbarItem key={_page.name}>
            <NavbarButton
              active={_page.name === page}
              onClick={() => setPage(_page.name)}
            >
              {_page.title}
            </NavbarButton>
          </NavbarItem>
        ))}
      </ul>
    </Box>
  )
}

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
