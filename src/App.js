import React from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleApiWrapper from './MapsContainer';
import { Launcher } from 'react-chat-window';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="WebsiteTitle">
          <text>Mandela Effect</text>
          <div class="tab">
            <button class="tablinks" onclick="openCity(event, 'Whatever')">Whatever</button>
            <button class="tablinks" onclick="openCity(event, 'About)"> About</button>
            <button class="tablinks" onclick="openCity(event, 'Whatadoop')"> Potato</button>
          </div>
        </div>
        <div className="NavigationBar" height="200">
          <text>Welcome</text>  
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
