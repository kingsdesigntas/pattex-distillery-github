import React, { useState, useContext } from "react"
import Logo from "../Logo"
import Box from "../Box"
import Text from "../Text"
import styled from "styled-components"
import css from "@styled-system/css"
import { motion } from "framer-motion"
import { graphql } from "gatsby"

const ProductStory = () => {
  return (
    <Box px="3">
      <Box position="absolute" top="0" width="100%" left="0" pt="5">
        <Logo />
      </Box>
      <Box
        width={["100%", "50%"]}
        mx="auto"
        p="4"
        mt="8"
        mb="6"
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
        mb="6"
        maxWidth="36rem"
      >
        <motion.div animate>
          <Text lineHeight="1.5" textAlign="center">
            "IF IT WAS NOT FOR THE HIGH COURT OF AUSTRALIA RULING IN RELATION TO
            SECTION 44 OF THE CONSTITUTION, THIS UNIQUE TASMANIAN GIN MAY NEVER
            HAVE BEEN CRAFTED."
          </Text>
        </motion.div>
      </Box>
    </Box>
  )
}

export default ProductStory
