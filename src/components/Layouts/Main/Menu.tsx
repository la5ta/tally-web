import { Menu } from 'antd';
import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const MainMenu = (): JSX.Element => {
    const [current, setCurrent] = useState('mail');

    const handleClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="inline">
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
        </Menu>
    )
};

export default MainMenu;