import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { node } from 'prop-types';

const BlogOverviewPage: React.FC = (props: any) => {
    console.log(props);
    return (
        <Layout>
            <SEO title="Blogs" />
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="text-3xl text-headline font-headline mb-2">
                    Markdown Blogs
                </h1>
                <p className="text-text">
                    These Blogs are all created using Markdown.
                </p>
                {props.data.allMarkdownRemark.edges.map(e => {
                    return (
                        <div
                            className="p-2 bg-bg rounded-md my-2"
                            key={e.node.id}
                        >
                            <h2 className="text-headline font-headline text-xl">
                                {e.node.frontmatter.title}
                            </h2>
                            <p>{e.node.frontmatter.date}</p>
                            <Link
                                className="text-primary"
                                to={`/${e.node.frontmatter.slug}`}
                            >
                                Go to Blog
                            </Link>
                        </div>
                    );
                })}
            </div>
        </Layout>
    );
};

export default BlogOverviewPage;

export const query = graphql`
    query MyQuery {
        allMarkdownRemark {
            edges {
                node {
                    html
                    id
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        slug
                    }
                }
            }
        }
    }
`;
