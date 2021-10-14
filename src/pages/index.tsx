import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage: React.FC = () => (
    <Layout>
        <SEO title="Home" />
        <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-2xl text-headline font-headline">
                Welcome
            </h1>
        </div>
    </Layout>
);

export default IndexPage;
