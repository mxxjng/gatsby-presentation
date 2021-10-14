const path = require('path');

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        graphql(`
            {
                allMarkdownRemark {
                    edges {
                        node {
                            frontmatter {
                                slug
                            }
                        }
                    }
                }
            }
        `)
            .then(result => {
                const { edges } = result.data.allMarkdownRemark;

                edges.forEach(({ node }) => {
                    createPage({
                        path: node.frontmatter.slug,
                        component: path.resolve('./src/templates/BlogPage.tsx'),
                        context: {
                            slug: node.frontmatter.slug,
                        },
                    });
                });
                resolve();
            })
            .catch(error => reject(error));
    });
};
