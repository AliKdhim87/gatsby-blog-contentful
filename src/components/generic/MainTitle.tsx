import React from "react"
import styled from "styled-components"

interface TitleTypes {
  borderBottomWidth?: string
  text?: string
  color?: string
}

const StyledTitle = styled.h1<TitleTypes>`
  position: relative;
  text-align: center;
  margin: 3rem 0 !important;
  color: ${({ color, theme }) => (color ? color : theme.colors.white)};
  &::before {
    content: "";
    position: absolute;
    background: ${({ theme }) => theme.colors.red};
    height: 5px;
    width: ${({ borderBottomWidth }) => borderBottomWidth};
    bottom: -10px;
  }
`

const MainTitle: React.FC<TitleTypes> = ({
  text,
  borderBottomWidth,
  color,
}) => {
  return (
    <StyledTitle color={color} borderBottomWidth={borderBottomWidth}>
      {text}
    </StyledTitle>
  )
}

export default MainTitle
