import React from 'react';
import HeaderComponent from './HeaderComponent';
import './AboutPage.css';
import {Launcher} from 'react-chat-window';

export class AboutPage extends React.Component{
    render(){
        return(
            <div className="AboutPageWrapper">
            <div className="AboutBody">
                <h1>I'm the about page</h1>
            </div>
            </div>
        )
    }
}

export default AboutPage