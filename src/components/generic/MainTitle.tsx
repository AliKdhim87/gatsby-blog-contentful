import React from "react"
import styled from "styled-components"

interface TitleTypes {
  borderBottomWidth?: string
  text?: string
}

const StyledTitle = styled.h1<TitleTypes>`
  position: relative;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  &::before {
    content: "";
    position: absolute;
    background: ${({ theme }) => theme.colors.glaucous};
    height: 5px;
    width: ${({ borderBottomWidth }) => borderBottomWidth};
    bottom: -10px;
  }
`

const MainTitle: React.FC<TitleTypes> = ({ text, borderBottomWidth }) => {
  return <StyledTitle borderBottomWidth={borderBottomWidth}>{text}</StyledTitle>
}

export default MainTitle
