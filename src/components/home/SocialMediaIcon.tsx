import React from 'react'
import styled from 'styled-components'

import {Icon, IconProps} from 'semantic-ui-react'

const StyledA = styled.a`
  font-size: 3.5rem !important;
  width: 3.5rem;
  color: ${({theme}) => theme.secondary && theme.secondary};
  margin-right: 15px;
  &:hover {
    color: ${({theme}) => theme.secondary} !important;
    opacity: 0.7 !important;
  }
`
interface Props extends IconProps {
  href: string
  target?: string
  rel?: string
}

const SocialMediaIcon: React.FC<Props> = ({
  href,
  rel = 'noreferrer',
  target = '_blank',
  'aria-label': ariaLabel,
  name,
}: Props) => {
  return (
    <StyledA href={href} target={target} rel={rel}>
      <Icon name={name} ariaLabel={ariaLabel} />
    </StyledA>
  )
}

export default SocialMediaIcon
