import React, { Dispatch, SetStateAction } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import LogoSvg from '@images/logo.svg';

const MainLayoutHeader = ({ collapseMenu, setCollapseMenu }: { collapseMenu: boolean, setCollapseMenu: Dispatch<SetStateAction<boolean>> }): JSX.Element => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <div className="menu" role="button" tabIndex={0} aria-hidden="true" onClick={() => setCollapseMenu(!collapseMenu)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <Navbar.Brand href="#home">
          {/* <div className="logo">
            <img src="/public/images/logo.svg" alt="logo" />
          </div> */}
          <h3 className="brand">Tally Web</h3>
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default MainLayoutHeader;