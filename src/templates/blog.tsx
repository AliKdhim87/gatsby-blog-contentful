import React from 'react'
import {graphql} from 'gatsby'
import Img, {FluidObject} from 'gatsby-image'
import styled, {useTheme} from 'styled-components'

import {Container, Divider, Header, Segment} from 'semantic-ui-react'

import SEO from 'components/global/SEO'
import MainTitle from 'components/generic/MainTitle'

import {QueryContentfulBlogPostArgs} from 'generated/graphql-types'

export const query = graphql`
  query getPostPerPage($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      slug
      image {
        title
        fluid(maxWidth: 600) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      bodyContent {
        bodyContent
        childMarkdownRemark {
          excerpt
          html
        }
      }
    }
  }
`
interface Props {
  data: {
    contentfulBlogPost: QueryContentfulBlogPostArgs
  }
}

const Markdown = styled.div`
  & > .gatsby-highlight pre[class*='language-'] {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left; /* 1 */
    min-width: 100%; /* 2 */
  }

  & > .gatsby-highlight pre[class*='language-'].line-numbers {
    padding-left: 2.8em;
  }

  & > .gatsby-highlight {
    background-color: #000;
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

  & > * a {
    color: ${({theme}) => theme.secondary} !important;
    &:hover {
      opacity: 0.7 !important;
    }
  }

  & > * a.anchor {
    fill: ${({theme}) => theme.secondary};
  }
`

const Blog: React.FC<Props> = ({data}: Props) => {
  const {isDark} = useTheme()
  const {title, publishedDate, image, bodyContent} = data.contentfulBlogPost

  return (
    <>
      <SEO
        title={title as string}
        description={bodyContent?.childMarkdownRemark?.excerpt as string}
      />
      <Container text>
        <Segment padded inverted={isDark}>
          <MainTitle text={title as string} border="80px" />
          <Img
            fluid={data.contentfulBlogPost.image?.fluid as FluidObject}
            alt={image?.title as string}
          />
          <Segment size="large" basic textAlign="center">
            <Header as="p" size="tiny">
              {publishedDate}
            </Header>
          </Segment>
          <Divider />
          <Markdown
            dangerouslySetInnerHTML={{__html: bodyContent?.childMarkdownRemark?.html as string}}
          />
        </Segment>
      </Container>
    </>
  )
}

export default Blog
