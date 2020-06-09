import React from "react"
import { Link } from "gatsby"
import Box from "./Box"
import css from "@styled-system/css"
import Container from "./Container"

const Footer = () => {
  return (
    <Box as="footer" bg={"footerBg"} py="5">
      <Container>
        <Box
          justifyContent="center"
          display="flex"
          alignItems="center"
          css={`
            color: ${props => props.theme.colors.footerHeading};
          `}
        >
          <Box
            as="span"
            pr="2"
            css={`
              font-family: "Libre Franklin";
              font-weight: bold;
              letter-spacing: 0.075rem;
              font-size: 0.75rem;
            `}
          >
            EST 2019
          </Box>
          <span
            css={`
              font-family: "EB Garamond";
              text-transform: uppercase;
              font-weight: bold;
              letter-spacing: 0.075rem;
              ${css({ fontSize: 3 })}
            `}
          >
            Pattex Distillery
          </span>
          <Box
            as="span"
            pl="2"
            css={`
              font-family: "Libre Franklin";
              font-weight: bold;
              letter-spacing: 0.075rem;
              font-size: 0.75rem;
            `}
          >
            PTY. LTD.
          </Box>
        </Box>
        <Box pt="5" textAlign="center" fontSize="1">
          <Box as="span" display="block" mb="2" fontWeight="bold">
            Liquor Licence - xxyyzz
          </Box>
          <Box as="span" display="block">
            Under the Liquor Licensing Act 1990 it is an offence: For liquor to
            be delivered to a person under the age of 18 years. Penalty: fine
            not exceeding 20 penalty units. For a person under the age of 18
            years to purchase liquor. Penalty: fine not exceeding 10 penalty
            units.
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
