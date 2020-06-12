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
import { useNavbar } from "../Navbar"
import NextButton from "./NextButton"

const ProductNotes = () => {
  const data = useStaticQuery(graphql`
    query BottleFrontImageQuery {
      bottleFront: file(relativePath: { eq: "bottle-front.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bottleFrontDark: file(relativePath: { eq: "bottle-front-dark.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { mode } = useColorMode()

  const { nextPage } = useNavbar()

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
        pt={[5, , , 6]}
      >
        <Box mt={4}>
          <Box
            layoutId="content-box-copy"
            as={motion.div}
            css={`
              border: 1px solid ${props => props.theme.colors.text};
            `}
            p="4"
            mt={7}
            maxWidth="36rem"
            mx="auto"
          >
            <motion.div animate>
              <Text lineHeight="1.5" textAlign="center">
                "THE BEAUTIFUL LEMON MYRTLE TONE INFUSED IN THIS GIN AFFORDS THE
                FORTUNATE CONSUMER THE CHANCE TO WAIVE THE EFFORT OF ADDING
                FRUIT. ENJOY WITH OR WITHOUT!"
              </Text>
              <Box display="flex" justifyContent="center" mt="3">
                <NextButton onClick={nextPage} />
              </Box>
            </motion.div>
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
