import { Layout } from 'antd';
import React from 'react';

const { Header } = Layout;
const MainLayoutHeader = ({ children }: { children: React.ReactNode; }): JSX.Element => {

  return (
    <Header>
      {children}
      <div
        className="logo"
        dangerouslySetInnerHTML={{ __html: require('@images/logo.svg?include') }}
      />
    </Header>
  );
};

export default MainLayoutHeader;