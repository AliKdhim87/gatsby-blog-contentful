import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

import { Container, Divider, Grid, Header, Segment } from "semantic-ui-react"

const BlogPage: React.FC = () => {
  const { allContentfulBlogPost } = useStaticQuery(graphql`
    query getAllBlogs {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            contentful_id
            image {
              title
              fluid(maxHeight: 700) {
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
        <Segment basic size="massive">
          <Header as="h1" size="large" textAlign="center" inverted>
            Recently blogs
          </Header>
        </Segment>

        <Grid doubling stretched style={{ paddingBottom: "2rem" }}>
          <Grid.Row centered>
            {allContentfulBlogPost.edges.map((post: any) => (
              <Grid.Column
                key={post.node.slug}
                mobile={16}
                computer={4}
                tablet={8}
                textAlign="center"
                as={Link}
                to={post.node.slug}
              >
                <Segment inverted>
                  <Header as="h2" size="medium" inverted>
                    {post.node.title}
                  </Header>
                  <Divider />
                  <Header as="p" size="tiny" color="grey">
                    {post.node.publishedDate}
                  </Header>
                  <Img
                    fluid={post.node.image.fluid}
                    alt={post.node.image.title}
                  />
                </Segment>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </Container>
    </>
  )
}

export default BlogPage
