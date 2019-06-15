import React from 'react';
import HeaderComponent from './HeaderComponent';
import './TutorialPage.css';
// import {Launcher} from 'react-chat-window';

export class TutorialPage extends React.Component{
    render(){
        return(
            <div className="TutorialPageWrapper">
            <div className="TutorialBody">
                <h1>I'm the tutorial page</h1>
            </div>
            </div>
        )
    }
}

export default TutorialPage