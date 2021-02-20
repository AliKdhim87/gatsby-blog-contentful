import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  @media (max-width: ${({theme}) => theme.breakpoint.mobile}) {
    margin-top: 1rem;
  }
`
