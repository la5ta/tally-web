import { Layout, Breadcrumb } from 'antd';
import Head from 'next/head';
import React, { useState } from 'react';
import MainLayoutFooter from './Footer';
import MainLayoutHeader from './Header';
import MainLayoutSider from './Sider';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import useMinScreen from '@hooks/minScreen';

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
  const [collapsed, useCollapsed] = useState(true)

  const toggle = () => {
    useCollapsed(!collapsed);
  };

  const toggleIfShowingSider = () => {
    if (!collapsed) {
      useCollapsed(!collapsed);
    }
  }

  const isPcScreen = useMinScreen(992);
  return (
    <Layout style={{ minHeight: '100vh', overflow: 'hidden' }}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {!isPcScreen && <MainLayoutSider collapsed={collapsed} useCollapsed={useCollapsed} className="show-mobile" breakpoint="lg" width={300} collapsedWidth={0} />}

      <Content className={`min-width-100 ${collapsed ? '' : 'blocked'}`} onClick={toggleIfShowingSider}>
        <MainLayoutHeader>
          <div id='button' className='sider-trigger show-mobile' onClick={toggle} role="button" tabIndex={0} aria-hidden="true">
            <MenuUnfoldOutlined />
          </div>
        </MainLayoutHeader>
        <Layout>
          {isPcScreen && <MainLayoutSider collapsed={false} useCollapsed={useCollapsed} className="show-pc" breakpoint="sm" width={300} collapsedWidth={0} />}
          <Layout>
            <Content>
              <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-content">
                <div className="content">
                  {children}
                </div>
              </div>
            </Content>
          </Layout>
        </Layout>
        <MainLayoutFooter />
      </Content>

    </Layout>
  );
};

export default MainLayout;
