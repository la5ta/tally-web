import { Layout, Breadcrumb, Menu } from 'antd';
import Head from 'next/head';
import React, { useState } from 'react';
import MainLayoutFooter from './Footer';
import MainLayoutHeader from './Header';
import MainLayoutSider from './Side';

import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;
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
  const [current, setCurrent] = useState('mail');
  const [collapsed, setCollapsed] = useState(true);

  const handleClick = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const toggle = e => {
    setCollapsed(!collapsed);
  }

  return (
    <Layout style={{ minHeight: '100vh', overflow: 'hidden' }}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* <MainLayoutSider /> */}
      <Sider breakpoint="lg"
        collapsedWidth="0"
        collapsed={collapsed}
        onCollapse={(collapsed) => {
          setCollapsed(collapsed);
        }}
        trigger={null}
        width="300">
        <Menu onClick={handleClick} selectedKeys={[current]} mode="inline">
          <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
        </Menu>
        {/* <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="mail" icon={<MailOutlined />}>
                    Primer Menu
                </Menu.Item>
            </Menu> */}
      </Sider>
      <Content className={`min-width-100 ${collapsed ? '' : 'blocked'}`}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'sider-trigger',
          onClick: toggle,
        })}
        <MainLayoutHeader />
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
        <MainLayoutFooter />
      </Content>

    </Layout>
  );
};

export default MainLayout;