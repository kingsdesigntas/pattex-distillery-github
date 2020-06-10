import React, { useState, useContext } from "react"
import Logo from "../Logo"
import Box from "../Box"
import Text from "../Text"
import styled from "styled-components"
import css from "@styled-system/css"
import { motion, AnimatePresence } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProductBuy = () => {
  const data = useStaticQuery(graphql`
    query BottleBackImageQuery {
      bottleBack: file(relativePath: { eq: "bottle-back.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

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
          >
            <motion.div animate>Buy me</motion.div>
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
                <Img fluid={data.bottleBack.childImageSharp.fluid} />
              </Box>
            </AnimatePresence>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ProductBuy
