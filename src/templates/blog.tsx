import React from 'react'
import {graphql} from 'gatsby'
import {GatsbyImage, getImage, IGatsbyImageData} from 'gatsby-plugin-image'
import {useTheme} from 'styled-components'

import {Container, Divider, Header, Segment} from 'semantic-ui-react'

import SEO from 'components/global/SEO'
import MainTitle from 'components/generic/MainTitle'
import GraphComments from 'components/comments/GraphComments'

import {Markdown} from './blog.styled'

export const query = graphql`
  query getPostPerPage($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      slug
      image {
        localFile {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        title
        gatsbyImageData(width: 700, layout: FULL_WIDTH)
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
    contentfulBlogPost: GatsbyTypes.ContentfulBlogPost
  }
}

const Blog: React.FC<Props> = ({data}: Props) => {
  const {isDark} = useTheme()
  const {title, publishedDate, image, bodyContent} = data.contentfulBlogPost

  const imageData = getImage(image?.gatsbyImageData as any)

  return (
    <>
      <SEO
        title={title as string}
        description={bodyContent?.childMarkdownRemark?.excerpt}
        metaTagImage={image?.localFile?.childImageSharp?.fluid?.src}
      />
      <Container text>
        <Segment inverted={isDark} basic>
          <MainTitle text={title} border="80px" />
          {image && (
            <GatsbyImage
              loading="lazy"
              image={imageData as IGatsbyImageData}
              alt={image.title as string}
            />
          )}
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
        <GraphComments />
      </Container>
    </>
  )
}

export default Blog
