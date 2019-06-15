import React from 'react';
import './HeaderComponent.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import logo from './seedling-sprout-svgimage.svg';

export class HeaderComponent extends React.Component {
    render(){
        return(
            <header className="App-header">
            <div className="NavigationBar">
              <Navbar className="BootstrapNav" bg="dark" variant="dark" expand="lg">
                <Navbar.Brand className="WebsiteTitleLogo" href="#home">
                  <img
                    alt=""
                    src={logo}
                    width="50"
                    height="50"
                    className="pictureLogo"
                  />
                  {' Mandela Effect'}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="Map">Resource Locator</Nav.Link>
                    <NavDropdown title="Legal Resources" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#LegalAdvice">Advice</NavDropdown.Item>
                      <NavDropdown.Item href="#LegalRepresentation">Representation</NavDropdown.Item>
                      <NavDropdown.Item href="#LegalRights">Know Your Rights</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#LegalQuickTips">Quick Tips</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#About">About Us</Nav.Link>
                  </Nav>
                  <Form className="searchForm" inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </header> 
        )
    }
}

export default HeaderComponent