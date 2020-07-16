import React, { useState, useContext } from "react"
import Logo from "../Logo"
import Box from "../Box"
import Text from "../Text"
import styled from "styled-components"
import css from "@styled-system/css"
import { motion, AnimatePresence } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useColorMode } from "../layout"
import Navbar, { useNavbar } from "../Navbar"
import NextButton from "./NextButton"
import { useProduct } from "../../templates/product"

const ProductNotes = () => {
  const data = useStaticQuery(graphql`
    query BottleFrontImageQuery {
      bottleFront: file(relativePath: { eq: "bottle-front-photo.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      bottleFrontDark: file(relativePath: { eq: "bottle-front-dark.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  const { mode } = useColorMode()

  const { nextPage } = useNavbar()

  const product = useProduct()

  return (
    <Box px="3">
      <Box position="absolute" top="0" width="100%" left="0" pt="5">
        <Logo animate={false} />
      </Box>
      <Box
        maxWidth="1600px"
        display={["block", "block", "grid"]}
        gridTemplateColumns={"50% 50%"}
        mx="auto"
        pt={[5, , , 0]}
      >
        <Box mt={4} pt={[0, 0, 5]}>
          <Box
            layoutId="content-box-copy"
            as={motion.div}
            /*css={`
              box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
                0px 1px 1px 0px rgba(0, 0, 0, 0.14),
                0px 1px 3px 0px rgba(0, 0, 0, 0.12);
            `}*/
            css={`
              box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
                0 1px 2px 0 rgba(0, 0, 0, 0.06) !important;
            `}
            p="4"
            mt={7}
            maxWidth="36rem"
            mx="auto"
            mb="3"
          >
            <motion.div animate>
              <Text
                lineHeight="1.5"
                textAlign="center"
                dangerouslySetInnerHTML={{
                  __html: product.getMetafield("flavour_notes"),
                }}
              />

              <Box display="flex" justifyContent="center" mt="3">
                <NextButton onClick={nextPage} />
              </Box>
            </motion.div>
          </Box>
          <Box mb="6">
            <Navbar />
          </Box>
        </Box>
        <Box
          css={`
            overflow: hidden;
          `}
          py={[5, , , 0]}
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
                  loading="eager"
                  fluid={
                    mode === "dark"
                      ? data.bottleFrontDark.childImageSharp.fluid
                      : data.bottleFront.childImageSharp.fluid
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

export default ProductNotes
