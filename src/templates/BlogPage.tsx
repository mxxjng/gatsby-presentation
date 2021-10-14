import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPage = ({ data: { markdownRemark } }) => {
    const { frontmatter, html } = markdownRemark;
    return (
        <Layout>
            <SEO title={frontmatter.title} />
            <div className="max-w-4xl mx-auto px-3 my-8">
                <Link className="text-primary" to="/blog">
                    Back to overview
                </Link>
                <h1 className="text-headline font-headline text-4xl">
                    {frontmatter.title}
                </h1>
                <h2>{frontmatter.date}</h2>
                <hr className="my-4" />
                <div
                    className="post-body"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </Layout>
    );
};
export default BlogPage;

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                slug
            }
        }
    }
`;
