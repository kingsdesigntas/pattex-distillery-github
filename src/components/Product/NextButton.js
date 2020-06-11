import React from "react"
import { FaLongArrowAltRight } from "react-icons/fa"
import styled from "styled-components"
import css from "@styled-system/css"

const NextButtonStyled = styled.button`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  ${css({ color: "red", px: 2, py: 2 })}

  svg {
    ${css({ color: "textAlt", ml: 2 })}
  }
`

const NextButton = props => {
  return (
    <NextButtonStyled {...props}>
      Next <FaLongArrowAltRight />
    </NextButtonStyled>
  )
}
export default NextButton
