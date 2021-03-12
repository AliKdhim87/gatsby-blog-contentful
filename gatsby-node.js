// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions

  const blogTemplate = path.resolve('./src/templates/blog.tsx')

  const {data, errors} = await graphql(`
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

  data.allContentfulBlogPost.edges.forEach(({node}) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${node.slug}`,
      context: {
        slug: node.slug,
      },
    })
  })
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
exports.onCreateWebpackConfig = ({stage, actions}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '../../theme.config$': path.join(__dirname, 'src/semantic-ui/theme.config'),
      },
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}
