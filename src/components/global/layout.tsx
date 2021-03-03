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
  pre {
    border: 1px solid ${({theme}) => theme.mainBgDark}
  }
  pre > code {
    background: #1e1e1e
  }
  code {
    background-color: ${({theme}) =>
      theme.isDark ? theme.palette.darkBlack : 'rgb(250, 248, 245)'};
    border-radius: 3px;
    position: relative;
    display: inline-block;
    font-size: 0.9em;
    letter-spacing: -0.5px;
    padding: 2px 6px;
    margin: 1px 0px;
    color: ${({theme}) => theme.secondary};
  }
  p {
    line-height: 2;
    color:  ${({theme}) => theme.textColor};
     font-size: 1.1rem;
  }
  h1, h2, h3, h4, li {
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
