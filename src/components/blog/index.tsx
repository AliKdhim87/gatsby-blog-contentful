import React from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'
import Img, {FluidObject} from 'gatsby-image'
import {useTheme} from 'styled-components'

import {Container, Divider, Grid, Segment, Header} from 'semantic-ui-react'

import MainTitle from 'components/generic/MainTitle'

import type {Query} from 'generated/graphql-types'

const BlogPage: React.FC = () => {
  const {isDark, secondary} = useTheme()
  const {allContentfulBlogPost} = useStaticQuery<Query>(graphql`
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
              fluid(maxHeight: 300) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Container>
        <Segment size="massive" inverted={isDark}>
          <MainTitle border="80px" text="Recently blogs" />
          <Grid doubling stretched style={{paddingBottom: '2rem'}}>
            <Grid.Row centered>
              {allContentfulBlogPost.edges.map(post => (
                <Grid.Column
                  key={post.node.slug}
                  mobile={16}
                  computer={5}
                  tablet={8}
                  textAlign="center"
                  as={Link}
                  to={post.node.slug}
                >
                  <Segment
                    inverted={isDark}
                    style={{
                      boxShadow: `${secondary} 0px 0px 7px 0px`,
                    }}
                  >
                    <Header as="h2" size="medium" inverted={isDark}>
                      {post.node.title}
                    </Header>
                    <Divider />
                    <p>{post.node.publishedDate}</p>
                    {post.node.image?.fluid && (
                      <Img
                        fluid={post.node.image.fluid as FluidObject}
                        alt={post.node.image.title as string}
                      />
                    )}
                  </Segment>
                </Grid.Column>
              ))}
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    </>
  )
}

export default BlogPage
