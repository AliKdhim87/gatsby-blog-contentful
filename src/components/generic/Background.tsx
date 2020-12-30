import React from "react"
import BackgroundImage, { IFluidObject } from "gatsby-background-image"
import styled from "styled-components"
interface Props {
  fluid: IFluidObject | IFluidObject[]
}

const StyledBackgroundSection = styled(BackgroundImage)`
  width: 100%;
  background-position: center;
  background-repeat: repeat-y;
  background-size: cover;
  width: 100%;
  min-height: calc(100vh - 68.26px - 50px);
`

const Background: React.FC<Props> = ({ children, fluid }) => {
  if (!fluid) {
    return <>Picture not found</>
  }

  return (
    <StyledBackgroundSection fluid={fluid} backgroundColor={`#040e18`}>
      {children}
    </StyledBackgroundSection>
  )
}

export default Background
