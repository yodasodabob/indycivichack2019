import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Launcher} from 'react-chat-window'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="WebsiteTitle">
          <text>Title</text>
        </div>
        <div className="NavigationBar">
          <text>Navigation Bar</text>  
        </div>
      </header>
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
