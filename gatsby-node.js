const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve("./src/templates/blog.tsx")

  const { data, errors } = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (errors) throw errors

  data.allContentfulBlogPost.edges.forEach(({ node }) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${node.slug}`,
      context: {
        slug: node.slug,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
    // this line of code because of sendGrid email package
    // https://github.com/gatsbyjs/gatsby/issues/564
    node: {
      fs: "empty",
    },
  })
}