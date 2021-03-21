import React, {useContext} from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import {useStyledDarkMode} from 'gatsby-styled-components-dark-mode'

import {Icon} from 'semantic-ui-react'

import {activeLink} from 'utils/activeLink'

import {LayoutContext} from './LayoutContext'

const NavLink = styled(Link)`
  color: ${({theme}) => theme.textColor};
  padding: 2px;
  position: relative;
  transition: 250ms ease-in;
  font-size: 18px;
  &:hover {
    color: ${({theme}) => theme.secondary} !important;
  }
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    right: 0;
    bottom: -4px;
    height: 4px;
    background: ${({theme}) => theme.secondary};
    transition: transform 250ms ease-in;
    transform: scaleX(0);
    transform-origin: left;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
  &.active {
    position: relative;
    color: ${({theme}) => theme.secondary};
  }
  @media (max-width: ${({theme}) => theme.breakpoint?.mobile}) {
    margin-bottom: 2.5rem;
  }
`
export const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  @media (max-width: ${({theme}) => theme.breakpoint?.mobile}) {
    margin-top: 3rem;
    flex-direction: column;
    align-items: center;
  }
`

export const links = [
  {name: 'Home', slug: '/'},
  {name: 'Blog', slug: '/blog/'},
  {name: 'Contact', slug: '/contact/'},
  {name: 'About', slug: '/about/'},
]

const PureNavLinks: React.FC = () => {
  const {mobileMode, setMobileMode} = useContext(LayoutContext)
  const {isDark, toggleDark} = useStyledDarkMode()
  return (
    <NavLinksContainer>
      {links.map(({slug, name}) => (
        <NavLink
          key={slug}
          to={slug}
          onClick={mobileMode ? () => setMobileMode(false) : undefined}
          className={activeLink(slug) ? 'active' : ''}
        >
          {name}
        </NavLink>
      ))}
      <Icon
        style={{display: 'inline-block'}}
        link
        name={isDark ? 'moon' : 'sun'}
        size="large"
        color={isDark ? 'grey' : 'red'}
        onClick={() => toggleDark(!isDark)}
        aria-label="change theme button"
      />
    </NavLinksContainer>
  )
}

export default PureNavLinks
