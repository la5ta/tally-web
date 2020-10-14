import { Layout, Breadcrumb } from 'antd';
import Head from 'next/head';
import React, { useState } from 'react';
import MainLayoutFooter from './Footer';
import MainLayoutHeader from './Header';
import MainLayoutSider from './Side';

// import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

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
    <Layout style={{ minHeight: '100vh', overflow: 'hidden' }}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <MainLayoutSider />
      <Content className="content">
        <MainLayoutHeader />
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">{children}</div>
        <MainLayoutFooter />
      </Content>

    </Layout>
  );
};

export default MainLayout;