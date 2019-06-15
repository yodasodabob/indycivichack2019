import React from 'react';
import './HeaderComponent.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import logo from './seedling-sprout-svgimage.svg';
import { Link } from 'react-router-dom';

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
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Item className="NavLink" as={Link} to="/">Home</Nav.Item>
                        <Nav.Item className="NavLink" as={Link} to="/Tutorial">Tutorial</Nav.Item>
                        <Nav.Item className="NavLink" as={Link} to="/About">About Us</Nav.Item>
                        <NavDropdown title="Services" className="NavLink" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/Services/LegalResources">Legal Resources</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/Services/ResourceMap">Resource Map</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/Services/Organizations">Organizations</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/Services">Overview</NavDropdown.Item>
                        </NavDropdown>  
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
                </div>
            </header> 
        )
    }
}

export default HeaderComponent