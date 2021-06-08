import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

function Menue() {
  return (
    
    <div className="side">
        <h4>Menü</h4>


        <Navbar className="menue" expand="sm">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#">Startseite</Nav.Link>
                    <Nav.Link href="#">Projekte</Nav.Link>
                    <Nav.Link href="#">Preise</Nav.Link>
                    <Nav.Link href="#">Weitere Infos</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    </div>
  );
}

export default Menue;
