import React from 'react'
import styled from 'styled-components'

interface SVGWarperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  color?: string
  size?: string
  marginRight?: string
}

interface StyledDivTypes {
  size?: string
  color?: string
  marginRight?: string
}

const StyledDiv = styled.div<StyledDivTypes>`
  color: ${({theme, color}) => (color ? color : theme.secondary)};
  width: ${({size}) => size};
  margin-right: ${({marginRight}) => marginRight};
`

const SVGWrapper: React.FC<SVGWarperProps> = ({
  children,

  ...props
}: SVGWarperProps) => {
  return <StyledDiv {...props}>{children}</StyledDiv>
}

export default SVGWrapper
