import React from 'react'
import styled from 'styled-components'
import {HeaderProps} from 'semantic-ui-react'
interface TitleTypes extends HeaderProps {
  border?: string
  text?: string
}

const StyledTitle = styled.h1<TitleTypes>`
  position: relative;
  text-align: center;
  margin: 3rem 0 !important;
  color: ${({theme}) => theme.textColor};
  &::before {
    content: '';
    position: absolute;
    background: ${({theme}) => theme.secondary};
    height: 5px;
    width: ${({border}) => border};
    bottom: -10px;
  }
`

const MainTitle: React.FC<TitleTypes> = ({text, border, ...rest}: TitleTypes) => {
  return (
    <StyledTitle border={border} {...rest}>
      {text}
    </StyledTitle>
  )
}

export default MainTitle
