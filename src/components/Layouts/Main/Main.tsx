import { Layout, Breadcrumb } from 'antd';
import Head from 'next/head';
import React, { useState } from 'react';
import MainLayoutFooter from './Footer';
import MainLayoutHeader from './Header';
import MainLayoutSider from './Side';

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

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

  const [collapsed, setCollapsed] = useState(true);
  const [collapsedInitialState, setCollapsedInitialState] = useState(true)

  const toggle = () => {
    setCollapsedInitialState(false);
    setCollapsed(!collapsed);
  };

  const ShowOrNotSider = () => {
    return collapsed ? (collapsedInitialState ? 'sider-collapsed' : 'sider-collapsing') : 'sider-showing';
  };

  return (
    <Layout style={{ minHeight: '100vh' }} className={`tally-layout  ${ShowOrNotSider()}`}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <MainLayoutSider />
      <div className="squareAboveEverything" onClick={toggle} onKeyDown={toggle} role="button" tabIndex={0}>
        <span>Square</span>
      </div>

      <Content className="tally-content">
        <MainLayoutHeader>
          <div className="tally-icon-button">
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </div>

        </MainLayoutHeader>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="layout-min-height">
          <div className="site-layout-content">{children}</div>
        </div>
        <MainLayoutFooter />
      </Content>

    </Layout>
  );
};

export default MainLayout;