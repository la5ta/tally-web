import { Layout, Menu } from 'antd';
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

const { Sider } = Layout;
const { SubMenu } = Menu;

const MainLayoutSider = (): JSX.Element => {

    const [current, setCurrent] = useState('mail');
    const [collapsed, setCollapsed] = useState(true);

    const handleClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <Sider breakpoint="lg"
            collapsedWidth="0"
            collapsed={collapsed}
            onCollapse={(collapsed) => {
                setCollapsed(collapsed);
            }}>
            <Menu onClick={handleClick} selectedKeys={[current]} mode="inline">
                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                    <Menu.Item key="1">option1</Menu.Item>
                    <Menu.Item key="2">option2</Menu.Item>
                    <Menu.Item key="3">option3</Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
            </Menu>
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="mail" icon={<MailOutlined />}>
                    Primer Menu
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default MainLayoutSider;