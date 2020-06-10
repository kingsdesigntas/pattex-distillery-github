import styled from "styled-components"
import { compose, space, typography, color } from "styled-system"

const Text = styled("div")(compose(typography, space, color))

export default Text
