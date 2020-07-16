/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import styled, { ThemeProvider, createGlobalStyle } from "styled-components"

import React, { useState, useEffect, useContext } from "react"
// the full theme object
import baseTheme from "../../theme"
import { Reset } from "styled-reset"
import { color } from "styled-system"
import css from "@styled-system/css"
import Box from "./Box"

import Footer from "../components/footer"

// options for different color modes
const modes = [
  "light",
  "dark",
  // more than two modes can follow...
]

const get = (obj, path, _default = null) =>
  typeof obj[path] !== "undefined" ? obj[path] : _default

// merge the color mode with the base theme
// to create a new theme object
const getTheme = mode => ({
  ...baseTheme,
  colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
})

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-family: "Libre Franklin", sans-serif;
  line-height: 1.2;
}

button {
  border: none;
  border-color: transparent;
  background: transparent;
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  cursor: pointer;
}


button,a,input {
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }
}

`

const ModeToggleBox = styled(Box)`
  position: absolute;
  right: 2rem;
  top: 2rem;
  z-index: 100;
`

const ModeToggle = styled.button`
  border-radius: 0;
  background: ${props => props.theme.colors.modeButtonColor};
  color: ${props => props.theme.colors.background};
  border: 1px solid transparent;
  border-color: ${props => props.theme.colors.modeButtonColor};
  cursor: pointer;
  ${css({
    p: 2,
    fontSize: 1,
  })}
  ${props =>
    props.variant === "dark"
      ? `background: ${props.theme.colors.offDarkGrey}; color: ${props.theme.colors.white};`
      : ""}
      ${props => (props.disabled ? `opacity:0.5; cursor: auto;` : null)}
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }
`

const useStateWithLocalstorage = (storageKey, initialState = null) => {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    const storedValue = window.localStorage.getItem(storageKey)
    if (storedValue !== null) {
      setState(storedValue)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(storageKey, state)
  }, [state])

  return [state, setState]
}

export const ColorModeContext = React.createContext()
export const useColorMode = () => useContext(ColorModeContext)

const Layout = ({ children }) => {
  // state for changing modes dynamically
  const [mode, setMode] = useStateWithLocalstorage("color-mode", modes[0])
  const theme = getTheme(mode)

  return (
    <ThemeProvider theme={theme}>
      <ColorModeContext.Provider value={{ mode, setMode }}>
        <Reset />
        <GlobalStyle />
        <ModeToggleBox>
          <ModeToggle
            onClick={() => setMode("light")}
            disabled={mode === "light"}
            variant="light"
          >
            Light mode
          </ModeToggle>
          <ModeToggle
            onClick={() => setMode("dark")}
            disabled={mode === "dark"}
            variant="dark"
          >
            Dark mode
          </ModeToggle>
        </ModeToggleBox>
        <main>{children}</main>
        <Footer />
      </ColorModeContext.Provider>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
