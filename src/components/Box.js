import styled from "styled-components"
import {
  compose,
  space,
  layout,
  flexbox,
  color,
  grid,
  background,
  position,
  typography,
} from "styled-system"

const Box = styled("div")(
  compose(space, layout, flexbox, color, grid, background, position, typography)
)

export default Box
