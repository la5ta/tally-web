import { Layout, Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

const { Sider } = Layout;

const MainLayoutSider = (): JSX.Element => {

    const [current, setCurrent] = useState('mail');

    const handleClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <Sider className="tally-sider">
            <div className="logoSpace">
                <span>Logo Space</span>
            </div>
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="mail" icon={<MailOutlined />}>
                    Primer Menu
            </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default MainLayoutSider;