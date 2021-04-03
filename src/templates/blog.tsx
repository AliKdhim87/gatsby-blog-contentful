import React from 'react'
import {graphql} from 'gatsby'
import Img, {FluidObject} from 'gatsby-image'
import styled, {useTheme} from 'styled-components'

import {Container, Divider, Header, Segment} from 'semantic-ui-react'

import SEO from 'components/global/SEO'
import MainTitle from 'components/generic/MainTitle'
import Comment from 'components/comments/ Comment'

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
    contentfulBlogPost: GatsbyTypes.ContentfulBlogPost
  }
}

const Markdown = styled.div`
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

const Blog: React.FC<Props> = ({data}: Props) => {
  const {isDark} = useTheme()
  const {title, publishedDate, image, bodyContent} = data.contentfulBlogPost
  const commentBox = React.createRef<HTMLDivElement>()

  React.useEffect(() => {
    const color = isDark ? 'dark' : 'light'
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://utteranc.es/client.js'
    script.setAttribute('repo', 'AliKdhim87/ali-dev-comments')
    script.setAttribute('issue-term', 'pathname')
    script.setAttribute('id', 'utterances')
    script.setAttribute('theme', `github-${color}`)
    script.setAttribute('crossorigin', 'anonymous')
    const node = commentBox.current

    if (commentBox && node) {
      while (node.firstChild) node.removeChild(node.lastChild as HTMLDivElement)
      node.appendChild(script)
    } else console.log(`Error adding utterances comments.`)
  }, [isDark])

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
          <Img fluid={data.contentfulBlogPost.image?.fluid as FluidObject} alt={image?.title} />
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
        <Comment commentBox={commentBox} />
      </Container>
    </>
  )
}

export default Blog
