import React from 'react';
import logo from './seedling-sprout-svgimage.svg';
import './App.css';
import {Launcher} from 'react-chat-window';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import GoogleApiWrapper from './MapsContainer';

function App() {
  return (
    <div className="App">
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
      <div>
        <GoogleApiWrapper></GoogleApiWrapper>
      </div>
      <body className="App-body">

      <Launcher
        agentProfile={{
          teamName: 'react-chat-window',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        // onMessageWasSent={this._onMessageWasSent.bind(this)} Add messages
        // messageList={this.state.messageList}
        showEmoji
      />

      </body>
    </div>
  );
}

export default App;
