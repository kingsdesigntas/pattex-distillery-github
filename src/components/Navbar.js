import React, { useState, useContext } from "react"
import Box from "../components/Box"
import styled from "styled-components"
import css from "@styled-system/css"

export const NavbarContext = React.createContext()
export const useNavbar = () => useContext(NavbarContext)
export const NavbarProvider = ({ children }) => {
  const [page, setPage] = useState("story")

  const pages = [
    { name: "story", title: "Story" },
    { name: "notes", title: "Flavour Notes" },
    { name: "buy", title: "Buy" },
  ]

  const paginate = dir => {
    const currentIndex = pages.findIndex(p => p.name === page)
    if (currentIndex == -1) return
    if (dir === -1 && currentIndex > 0) {
      setPage(pages[currentIndex - 1].name)
    } else if (dir === 1 && currentIndex < pages.length - 1) {
      setPage(pages[currentIndex + 1].name)
    }
  }

  const nextPage = () => paginate(1)
  const prevPage = () => paginate(-1)

  return (
    <NavbarContext.Provider
      value={{ page, setPage, pages, nextPage, prevPage, paginate }}
    >
      {children}
    </NavbarContext.Provider>
  )
}

const NavbarItem = styled.li`
  ${css({ mx: 2 })}
`
const NavbarButton = styled.button`
    ${css({ px: 2, py: 1 })}
    color: ${props =>
      props.active
        ? props.theme.colors.navbarActiveText
        : props.theme.colors.text};

  `

const Navbar = () => {
  const { page, setPage, pages } = useNavbar()

  return (
    <Box
      position={["fixed", "fixed", "fixed", "relative"]}
      bottom="0"
      left="0"
      width="100%"
      p="2"
      py="3"
      bg="background"
      color="text"
    >
      <ul
        css={`
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        {pages.map(_page => (
          <NavbarItem key={_page.name}>
            <NavbarButton
              active={_page.name === page}
              onClick={() => setPage(_page.name)}
            >
              {_page.title}
            </NavbarButton>
          </NavbarItem>
        ))}
      </ul>
    </Box>
  )
}

export default Navbar
