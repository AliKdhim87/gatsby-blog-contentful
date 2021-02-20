import {GatsbyImageFluidProps} from 'gatsby-image'

export interface AllContentfulBlogPostTypes {
  allContentfulBlogPost: {
    edges: [
      {
        node: {
          title: string
          slug: string
          publishedDate: string
          contentful_id: string
          image: GatsbyImageFluidProps
          bodyContent?: {
            bodyContent?: string
            childMarkdownRemark?: {
              excerpt?: string
            }
          }
        }
      },
    ]
  }
}
