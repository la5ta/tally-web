import { Layout, Breadcrumb } from 'antd';
import Head from 'next/head';
import React from 'react';
import MainLayoutFooter from './Footer';
import MainLayoutHeader from './Header';

const { Content } = Layout;
const MainLayout = (
  {
    children,
    title = 'Tally'
  }: {
    children: React.ReactNode;
    title?: string;
  }
): JSX.Element => {

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <MainLayoutHeader />

      <Content>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">{children}</div>
      </Content>

      <MainLayoutFooter />
    </Layout>
  );
};

export default MainLayout;