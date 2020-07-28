/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createOpenGraphImage } = require("gatsby-plugin-open-graph-images")
const path = require("path")

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  const ogImageTemplate = path.resolve(`src/templates/index.og-image.js`)
  const size = { width: 1200, height: 630 }
  const openGraphImage = createOpenGraphImage(createPage, {
    path: "/og-image/index.png",
    component: ogImageTemplate,
    size,
    context: {
      description: "a image created with gatsby-plugin-open-graph-images",
    },
  })

  if (process.env.NODE_ENV === `development`) {
    createPage({
      path: `/og-image/index`,
      component: ogImageTemplate,
      context: {
        size,
      },
    })
  }
}
