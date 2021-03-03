import React from 'react'
import {graphql} from 'gatsby'
import Img, {FluidObject} from 'gatsby-image'
import ReactMarkdown from 'react-markdown/with-html'
import {useTheme} from 'styled-components'

import {Container, Divider, Header, Segment} from 'semantic-ui-react'

import SEO from 'components/global/SEO'
import MainTitle from 'components/generic/MainTitle'
import CodeBlock from 'components/generic/CodeBlock'

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
        <Segment basic padded inverted={isDark}>
          <MainTitle text={title as string} border="80px" />
          <Img
            fluid={data.contentfulBlogPost.image?.fluid as FluidObject}
            alt={image?.title as string}
          />
          <Segment size="large" basic textAlign="center">
            <Header as="p" size="tiny" inverted>
              {publishedDate}
            </Header>
          </Segment>
          <Divider />
          <ReactMarkdown
            source={bodyContent?.bodyContent as string}
            renderers={{code: CodeBlock}}
            allowDangerousHtml
            linkTarget={url => url}
          />
        </Segment>
      </Container>
    </>
  )
}

export default Blog
