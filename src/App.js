import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Launcher} from 'react-chat-window';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import GoogleApiWrapper from './MapsContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <div className="WebsiteTitle">
          <h1>Mandela Effect</h1>
          
        </div> */}
        <div className="NavigationBar">
          {/* <div className="tab">
            <button className="tablinks" onclick="openCity(event, 'Whatever')">Whatever</button>
            <button className="tablinks" onclick="openCity(event, 'About)"> About</button>
            <button className="tablinks" onclick="openCity(event, 'Whatadoop')"> Potato</button>
          </div> */}
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
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
