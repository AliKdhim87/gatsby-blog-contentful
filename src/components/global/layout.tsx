import React from 'react'
import styled, {createGlobalStyle, ThemeProvider, useTheme} from 'styled-components'
import 'semantic-ui-less/semantic.less'

import {Container} from 'semantic-ui-react'

import Footer from './footer'
import Header from './header'
import ParticlesBackground from './ParticlesBackground'
interface Props {
  children: React.ReactNode
}

const GlobalStyle = createGlobalStyle`
html{
  overflow-x: hidden;
}

  main {
    flex:1;
    color: ${({theme}) => theme.textColor};
    position: relative;
  }

  p {
    line-height: 2;
    color:  ${({theme}) => theme.textColor};
     font-size: 1.1rem;
  }

  h1, h2, h3, h4, li, p{
    color:  ${({theme}) => theme.textColor};
  }

  img {
    width:100%;
  }

  .ui.segment{
    background: ${({theme}) => theme.mainBg} !important;
}

.ui.header{
  color: ${({theme}) => theme.textColor}
}

.ui.attached.segment{
  border: 1px solid ${({theme}) => theme.borderColor} !important;
}
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({theme}) => theme.mainBgDark};
`

const Layout: React.FC<Props> = ({children}: Props) => {
  const theme = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <ParticlesBackground />
        <Header />
        <Container as="main">{children}</Container>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )
}

export default Layout
