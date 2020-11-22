import React from 'react';
import { Col, Row } from 'react-bootstrap';

const MainLayoutFooter = (): JSX.Element => {

  return (
    <footer className="footer">
      <div className="container">
        <Row>
          <Col xs={12} md={6} className="section">
            <Row>
              <Col xs={12}>
                About Us
                </Col>
            </Row>
            <Row>
              <Col xs={12}>
                Lois Etutam
                </Col>
            </Row>
            <Row>
              <Col xs={12}>
                Josh David
                </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} className="section">
            <Row>
              <Col xs={12}>
                Site Map
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                DashBoard
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                Products
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default MainLayoutFooter;