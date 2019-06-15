import React from 'react';
import HeaderComponent from './HeaderComponent';
import './App.css';
import {Launcher} from 'react-chat-window';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// import GoogleApiWrapper from './MapsContainer';
import Map from './Map'
import { Route, Switch } from 'react-router-dom';
import AboutPage from './AboutPage';
import TutorialPage from './TutorialPage';
import GoogleApiWrapper from './MapsContainer';
import HomePage from './HomePage';
import LegalResourcePage from './LegalResourcePage';
import OrganizationsPage from './OrganizationsPage';
import ServicesPage from './ServicesPage';

function App() {
  return (
 
    <div className="App">
      <div><HeaderComponent></HeaderComponent></div>
      <div className="SwitchDiv" style={{ marginTop: "10px"}}>
        <Switch >
          <Route path="/Tutorial" render={() => <div className="TutorialSwitchWrapper"><TutorialPage /></div>} />
          <Route path="/About" render={() => <div className="AboutSwitchWrapper"><AboutPage /></div>} />
          <Route path="/Services/ResourceMap" render={() => <div className="MapSwitchWrapper"><Map /></div>} />
          <Route path="/Services/LegalResources" render={() => <div className="LegalSwitchWrapper"><LegalResourcePage /></div>} />
          <Route path="/Services/Organizations" render={() => <div className="OrganizationSwitchWrapper"><OrganizationsPage /></div>} />
          <Route path="/Services" render={() => <div className="ServicesSwitchWrapper"><ServicesPage /></div>} />
          <Route path='/' render={() =><div className="HomeSwitchWrapper">
            <HomePage></HomePage>
          </div>} />
        </Switch>
      </div>
     
      {/* <div>
        <Map />
      </div> */}
      {/* <body className="App-body">

      <Launcher
        agentProfile={{
          teamName: 'react-chat-window',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        // onMessageWasSent={this._onMessageWasSent.bind(this)} Add messages
        // messageList={this.state.messageList}
        showEmoji
      />

      </body> */}
    </div>
  );
}

export default App;
