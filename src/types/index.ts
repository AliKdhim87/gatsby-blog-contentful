import {IGatsbyImageData} from 'gatsby-plugin-image'

export interface Image {
  title: string
  gatsbyImageData: IGatsbyImageData
  localFile?: {
    childImageSharp: {
      fluid: {
        src: string
      }
    }
  }
}

export interface BlogPostNode {
  node: BlogPost
}

export interface BlogPost {
  title: string
  slug: string
  publishedDate?: string
  contentful_id?: string
  image: Image
}

export interface AllBlogs {
  allContentfulBlogPost: {
    edges: BlogPostNode[]
  }
}

export interface BlogPost {
  contentfulBlogPost: BlogPostNode
  bodyContent?: BodyContent
}

export interface BodyContent {
  bodyContent: string
  childMarkdownRemark: {
    excerpt: string
    html: string
  }
}
