import React from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'
import Img, {FluidObject} from 'gatsby-image'
import {useTheme} from 'styled-components'

import {Container, Divider, Grid, Header, Segment} from 'semantic-ui-react'

import MainTitle from 'components/generic/MainTitle'

import {darkMode} from 'utils/darkMode'
import type {Query} from 'generated/graphql-types'

const BlogPage: React.FC = () => {
  const {colors, mode} = useTheme()
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
        <Segment size="massive" color={darkMode(mode) ? 'black' : 'grey'} inverted>
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
                    inverted
                    color={darkMode(mode) ? 'black' : 'grey'}
                    style={{
                      boxShadow: ` 0px 0px 7px 0px ${
                        darkMode(mode) ? colors.red : 'rgba(0,0,0,0.5)'
                      }`,
                    }}
                  >
                    <Header as="h2" size="medium" inverted>
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
