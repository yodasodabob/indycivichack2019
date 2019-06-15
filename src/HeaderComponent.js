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
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Item as={Link} to="/">Home</Nav.Item>
                        <Nav.Item as={Link} to="/Map">Resource Locator</Nav.Item>
                        <Nav.Item as={Link} to="LegalResources">Legal Resources</Nav.Item>
                        <Nav.Item as={Link} to="OrganizationResources">Organizations</Nav.Item>
                        <Nav.Item as={Link} to="About">About Us</Nav.Item>  
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