import { Layout } from 'antd';
import React, { Dispatch, SetStateAction } from 'react';
import MainMenu from './Menu';

const { Sider } = Layout;

interface Props {
    collapsed: boolean,
    useCollapsed: Dispatch<SetStateAction<boolean>>,
    className: string,
    breakpoint: "xs" | "sm" | "md" | "lg" | "xl" | "xxl",
    collapsedWidth: number,
    width: number
}
const MainLayoutSider = ({ collapsed, useCollapsed, className, breakpoint, collapsedWidth, width }: Props): JSX.Element => {

    return (
        <Sider breakpoint={breakpoint}
            collapsedWidth={collapsedWidth}
            collapsed={collapsed}
            onCollapse={(collapsed) => {
                useCollapsed(collapsed);
            }}
            trigger={null}
            width={width}
            className={className}>
            <MainMenu />
        </Sider>
    );
};

export default MainLayoutSider;