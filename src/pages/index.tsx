import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage: React.FC = props => {
    console.log(props);
    return (
        <Layout>
            <SEO title="Home" />
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="text-3xl text-headline font-headline mb-2">
                    Welcome to <span className="text-primary">Gatsby</span>
                </h1>
                <p className="text-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores nihil modi illo velit? Nemo, ab ratione totam
                    magni quo omnis numquam. Alias dolorum adipisci nam.
                    Repellendus doloremque obcaecati voluptatem dolorem!
                </p>
            </div>
        </Layout>
    );
};

export default IndexPage;

export const query = graphql`
    query MyQuery {
        allMarkdownRemark {
            edges {
                node {
                    html
                }
            }
        }
    }
`;
