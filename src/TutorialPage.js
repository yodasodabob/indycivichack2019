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
                <p>In the future, we will have a video here showing people how to use the site!</p>
            </div>
            </div>
        )
    }
}

export default TutorialPage