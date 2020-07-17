import Layout from '@components/Layout';
import { NextPage } from 'next';
import React from 'react';

const IndexPage: NextPage = () => (
  <Layout>
    <h1>Hello Luis <span role="img" aria-label="hand wave">👋</span></h1>
  </Layout>
);

export default IndexPage;
