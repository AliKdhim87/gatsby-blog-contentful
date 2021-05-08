import styled from 'styled-components'

export const Markdown = styled.div`
  & > .gatsby-highlight pre[class*='language-'] {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left;
    min-width: 100%;
  }

  & > .gatsby-highlight pre[class*='language-'].line-numbers {
    padding-left: 2.8em;
  }

  & > .gatsby-highlight {
    background-color: ${({theme}) =>
      theme.isDark ? theme.palette.darkBlack : theme.palette.black};
    border-radius: 0.3em;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }

  & > .gatsby-highlight pre[class*='language-'].line-numbers {
    padding: 0;
    padding-left: 2.8em;
    overflow: initial;
  }
  & * code,
  a {
    word-break: break-word;
  }
  & > * a {
    color: ${({theme}) => theme.secondary} !important;
    &:hover {
      opacity: 0.7 !important;
    }
  }

  & > * a.anchor {
    fill: ${({theme}) => theme.secondary};
  }
  & > blockquote {
    border-left: 10px solid #ccc;
    margin: 1.5em 10px;
    padding: 0.5em 10px;
  }
  & > blockquote p {
    display: inline;
  }
`
