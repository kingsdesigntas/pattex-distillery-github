import React from "react"
import Box from "./Box"

import theme from "../../theme"

const Container = ({ children, ...props }) => {
  return (
    <Box
      mx="auto"
      maxWidth={[
        "100%",
        theme.breakpoints.sm,
        theme.breakpoints.md,
        theme.breakpoints.lg,
        theme.breakpoints.xl,
      ]}
      {...props}
    >
      {children}
    </Box>
  )
}
export default Container
