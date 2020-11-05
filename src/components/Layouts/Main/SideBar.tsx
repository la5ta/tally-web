import React from "react";
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const SideBar = (): JSX.Element => {

    // d-none d-md-block
    return (
        <>
            <Nav className="col-12 d-block bg-light h-100">
                <Nav.Item>
                    <Nav.Link href="/home">
                        <h3><FontAwesomeIcon icon={faUser} />  Bienvenido Jose!</h3>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                </Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    );
};

export default SideBar;