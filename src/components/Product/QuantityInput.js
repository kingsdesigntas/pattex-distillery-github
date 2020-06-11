import React, { useEffect, useState } from "react"
import { GoPlus, GoDash } from "react-icons/go"
import styled from "styled-components"
import css from "@styled-system/css"
import Box from "../Box"

const QuantityInput = styled.input`
  border: none;
  text-align: center;
  border: 1px solid transparent;
  display: block;
  width: 100%;
  max-width: 8rem;
  position: relative;
  z-index: 1;
  ${css({
    px: 4,
    py: 2,
    fontSize: 2,
    bg: "inputBackground",
    borderColor: "inputBorder",
    color: "inputColor",
  })}

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  -moz-appearance: textfield;
`
const QuantityButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 2;
  ${css({ color: "red", p: 2 })}
`

const QuantityComponent = ({
  value: _value = 1,
  onChange = null,
  ...props
} = {}) => {
  const minValue = 1
  const maxValue = null

  const [value, setValue] = useState(_value)

  //Make sure the value is numeric and also an integer
  const parseValue = v => {
    if (v === "") return v
    v = Math.round(+v)
    if (v < minValue && minValue !== null) {
      v = minValue
    }
    if (v > maxValue && maxValue !== null) {
      v = maxValue
    }
    return v
  }

  useEffect(() => {
    if (value !== _value) setValue(_value)
  }, [_value])

  useEffect(() => {
    if (typeof onChange === `function`) {
      onChange.call(null, value)
    }
  }, [value])

  const adjustQuantity = dir => {
    if (dir !== "-" && dir !== "+") return null

    return e => {
      if (dir === "-") {
        setValue(parseValue(value - 1))
      } else if (dir === "+") {
        setValue(parseValue(value + 1)) //parse value isnt really necessary here
      }
    }
  }

  const onChangeHandler = e => {
    setValue(parseValue(e.target.value))
  }

  return (
    <Box position="relative" display="inline-block" {...props}>
      <QuantityInput type="number" value={value} onChange={onChangeHandler} />
      <QuantityButton
        css={`
          left: 0;
        `}
        onClick={adjustQuantity("-")}
      >
        <GoDash />
      </QuantityButton>
      <QuantityButton
        css={`
          right: 0;
        `}
        onClick={adjustQuantity("+")}
      >
        <GoPlus />
      </QuantityButton>
    </Box>
  )
}

export default QuantityComponent
