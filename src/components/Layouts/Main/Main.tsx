import Head from 'next/head';
import React, { useState } from 'react';
import MainLayoutHeader from './Header';
import Sidebar from './SideBar';
import { Container, Row, Col } from "react-bootstrap";
import MainLayoutFooter from './Footer';

const MainLayout = (
  {
    children,
    title = 'Tally'
  }: {
    children: React.ReactNode;
    title?: string;
  }
): JSX.Element => {

  const [collapseMenu, setCollapseMenu] = useState(true);

  const toggleMenu = () => {
    if (!collapseMenu) {
      setCollapseMenu(!collapseMenu);
    }
  }
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://kit.fontawesome.com/f0371d79a1.js" crossOrigin="anonymous"></script>
      </Head>
      {/* role="button" tabIndex={0} aria-hidden="true" */}
      <div className={`h-100 w-100 ${collapseMenu ? '' : 'showing'}`} onClick={toggleMenu} aria-hidden="true">
        <MainLayoutHeader collapseMenu={collapseMenu} setCollapseMenu={setCollapseMenu} />
        <Container fluid>
          <Row>
            <Col xs={6} md={2} className={`pl-0 d-md-block siderbar ${collapseMenu ? 'collapsed' : ''}`}>
              <Sidebar />
            </Col>
            <Col xs={12} md={10}>
              <div className="site-layout-content">{children}</div>
            </Col>
          </Row>

        </Container>
        <MainLayoutFooter />
      </div>
    </>
  );
};

export default MainLayout;