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
  shadow
} from "styled-system"

const Box = styled("div")(
  compose(space, layout, flexbox, color, grid, background, position, typography, shadow)
)

export default Box
