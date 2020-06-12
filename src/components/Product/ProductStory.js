import React, { useState, useContext } from "react"
import Logo from "../Logo"
import Box from "../Box"
import Text from "../Text"
import styled from "styled-components"
import css from "@styled-system/css"
import { motion } from "framer-motion"
import { graphql } from "gatsby"
import NextButton from "./NextButton"
import Navbar, { useNavbar } from "../Navbar"
import { useProduct } from "../../templates/product"

const ProductStory = () => {
  const { nextPage } = useNavbar()
  const product = useProduct()

  return (
    <Box px="3">
      <Box position="absolute" top="0" width="100%" left="0" pt="5">
        <Logo />
      </Box>
      <Box
        width={["100%", "50%"]}
        mx="auto"
        p="4"
        pt={[5, , , 6]}
        mt={7}
        mb={[5]}
        maxWidth="32rem"
      >
        <Text
          color="textAlt"
          fontStyle="italic"
          lineHeight="1.5"
          textAlign="center"
        >
          A WORD FROM OWNERS AND DISTILLERS MR ANDREW PATTEN, MR RAJ CHARAN
          SINGH AND THE HON STEPHEN PARRY.
        </Text>
      </Box>
      <Box
        layoutId="content-box-copy"
        as={motion.div}
        css={`
          border: 1px solid ${props => props.theme.colors.text};
        `}
        width={["100%", "50%"]}
        mx="auto"
        p="4"
        mt="2"
        mb="3"
        maxWidth="36rem"
      >
        <motion.div animate>
          <Text
            lineHeight="1.5"
            textAlign="center"
            as="div"
            dangerouslySetInnerHTML={{ __html: product.getMetafield("story") }}
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
  )
}

export default ProductStory
