import React, {useState} from 'react'
import styled, {createGlobalStyle, ThemeProvider, useTheme} from 'styled-components'
import 'semantic-ui-less/semantic.less'

import {Container, Sidebar, Segment} from 'semantic-ui-react'

import NavLinks from './NavLinks'
import Footer from './footer'
import Header from './header'
import ParticlesBackground from './ParticlesBackground'
import {LayoutContext} from './LayoutContext'
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
  const [mobileMode, setMobileMode] = useState<boolean>(false)
  const theme = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <LayoutContext.Provider value={{setMobileMode, mobileMode}}>
        <GlobalStyle />
        <Sidebar.Pushable as={Segment} attached>
          <Sidebar
            as={Segment}
            inverted
            animation="overlay"
            onHide={() => setMobileMode(false)}
            visible={mobileMode}
            width="thin"
            padded
          >
            <NavLinks />
          </Sidebar>
          <Sidebar.Pusher>
            <Wrapper>
              <ParticlesBackground />
              <Header />
              <Container as="main">{children}</Container>
              <Footer />
            </Wrapper>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </LayoutContext.Provider>
    </ThemeProvider>
  )
}

export default Layout
