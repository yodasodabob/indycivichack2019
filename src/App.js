import React from 'react';
import HeaderComponent from './HeaderComponent';
import './App.css';
import {Launcher} from 'react-chat-window';
import { Route, Switch } from 'react-router-dom';

import GoogleApiWrapper from './MapsContainer';
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <div><HeaderComponent></HeaderComponent></div>
      <div className="SwitchDiv">
        <Switch>
          <Route path="/map" render={() => <div>This is a thing!</div>} />
          <Route path='/' render={() =><div>
            <HomePage></HomePage>
          </div>} />
        </Switch>
      </div>
      <div>
        <GoogleApiWrapper></GoogleApiWrapper>
      </div>
      <body className="App-body">

      {/* <Launcher
        agentProfile={{
          teamName: 'react-chat-window',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        // onMessageWasSent={this._onMessageWasSent.bind(this)} Add messages
        // messageList={this.state.messageList}
        showEmoji
      /> */}

      </body>
    </div>
  );
}

export default App;
