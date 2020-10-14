import { Layout } from 'antd';
import React from 'react';

const { Header } = Layout;
const MainLayoutHeader = (): JSX.Element => {

  return (
    <Header>
      <div
        className="logo"
        dangerouslySetInnerHTML={{ __html: require('@images/logo.svg?include') }}
      />
    </Header>
  );
};

export default MainLayoutHeader;