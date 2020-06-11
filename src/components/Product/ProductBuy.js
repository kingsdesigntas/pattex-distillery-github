import React, { useState, useContext } from "react"
import Logo from "../Logo"
import Box from "../Box"
import Text from "../Text"
import styled from "styled-components"
import css from "@styled-system/css"
import { motion, AnimatePresence } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import QuantityInput from "./QuantityInput"
import { useColorMode } from "../layout"

const Pricing = ({ price, suffix = null, ...props }) => {
  return (
    <Box
      display="flex"
      alignItems="flex-end"
      justifyContent="center"
      {...props}
    >
      <Text color="textAlt" mb="1" mr="1">
        $
      </Text>
      <Text fontSize="4">{price}</Text>
      <Text color="textAlt" mb="1" ml="1">
        {suffix}
      </Text>
    </Box>
  )
}

const BuyButton = styled.button`
  border: 1px solid transparent;
  ${css({
    py: 3,
    px: 4,
    fontSize: 3,
    bg: "buyButtonBackground",
    color: "buyButtonColor",
    borderColor: "buyButtonBorder",
  })}
`

const AddToCart = () => {
  const [qty, setQty] = useState(1)
  return (
    <Box my="4">
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box px="2">
          <QuantityInput value={qty} onChange={setQty} />
        </Box>
        <Box px="2">
          <BuyButton>Buy now</BuyButton>
        </Box>
      </Box>
    </Box>
  )
}

const ProductBuy = () => {
  const data = useStaticQuery(graphql`
    query ProductBuyQuery {
      bottleBack: file(relativePath: { eq: "bottle-back.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bottleBackDark: file(relativePath: { eq: "bottle-back-dark.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      section44Black: file(relativePath: { eq: "section-44-black.png" }) {
        childImageSharp {
          fixed(width: 168) {
            # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
            ...GatsbyImageSharpFixed
          }
        }
      }
      section44White: file(relativePath: { eq: "section-44-white.png" }) {
        childImageSharp {
          fixed(width: 168) {
            # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const { mode } = useColorMode()

  return (
    <Box px="3">
      <Box position="absolute" top="0" width="100%" left="0" pt="5">
        <Logo variant="secondary" animate={false} />
      </Box>
      <Box
        maxWidth="1600px"
        display={["block", "block", "grid"]}
        gridTemplateColumns={"50% 50%"}
        mx="auto"
      >
        <Box>
          <Box
            layoutId="content-box-copy"
            as={motion.div}
            p="4"
            mt="7"
            maxWidth="36rem"
            mx="auto"
            css={`
              border: 1px solid ${props => props.theme.colors.background};
            `}
          >
            <motion.div animate>
              <Box mx="auto" maxWidth="168px">
                <Img
                  fixed={
                    mode === "dark"
                      ? data.section44White.childImageSharp.fixed
                      : data.section44Black.childImageSharp.fixed
                  }
                />
              </Box>
              <Text textAlign="center" fontStyle="italic" fontSize="3">
                Limited Release
              </Text>
              <Text my="4" textAlign="center" fontSize="4">
                Handcrafted Tasmanian Gin
              </Text>
              <Box my="4">
                <Pricing price="88" suffix="/ bottle" />
                <Pricing price="568" suffix="/ box of 6" />
              </Box>
              <Text color="textAlt" fontSize="3" textAlign="center">
                Free shipping Australia wide
              </Text>
              <Box>
                <AddToCart quantity={1} />
              </Box>
            </motion.div>
          </Box>
        </Box>
        <Box
          css={`
            overflow: hidden;
          `}
        >
          <Box maxWidth="400px" mx="auto">
            <AnimatePresence>
              <Box
                as={motion.div}
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                transition={{ ease: "easeOut", duration: 0.5 }}
              >
                <Img
                  fluid={
                    mode === "dark"
                      ? data.bottleBackDark.childImageSharp.fluid
                      : data.bottleBack.childImageSharp.fluid
                  }
                />
              </Box>
            </AnimatePresence>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ProductBuy
