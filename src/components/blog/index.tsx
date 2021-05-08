import React from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'
import {GatsbyImage, getImage, IGatsbyImageData} from 'gatsby-plugin-image'
import {useTheme} from 'styled-components'

import {Divider, Grid, Segment, Header} from 'semantic-ui-react'

import MainTitle from 'components/generic/MainTitle'

const BlogPage: React.FC = () => {
  const {isDark, secondary} = useTheme()
  const {allContentfulBlogPost} = useStaticQuery<GatsbyTypes.getAllBlogsQuery>(graphql`
    query getAllBlogs {
      allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            contentful_id
            image {
              title
              gatsbyImageData(width: 300, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `)

  return (
    <Segment size="massive" inverted={isDark} basic>
      <MainTitle border="80px" text="Recently blogs" />
      <Grid doubling stretched style={{paddingBottom: '2rem'}}>
        <Grid.Row>
          {allContentfulBlogPost.edges.map(({node}) => (
            <Grid.Column
              key={node.slug}
              mobile={16}
              computer={5}
              tablet={8}
              textAlign="center"
              as={Link}
              to={node.slug}
            >
              <Segment
                inverted={isDark}
                style={{
                  boxShadow: `${secondary} 0px 0px 7px 0px`,
                }}
              >
                <Header as="h2" size="medium" inverted={isDark}>
                  {node.title}
                </Header>
                <Divider />
                <p>{node.publishedDate}</p>

                <GatsbyImage
                  loading="lazy"
                  image={getImage(node.image?.gatsbyImageData as any) as IGatsbyImageData}
                  alt={node.image?.title as string}
                />
              </Segment>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default BlogPage
