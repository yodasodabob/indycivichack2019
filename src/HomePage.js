import React from 'react';
import HeaderComponent from './HeaderComponent';
import './HomePage.css';
import {Launcher} from 'react-chat-window';

export class HomePage extends React.Component{
    render(){
        return(
            <div className="homePageWrapper">
            <div className="homeBody">
                <h1>We're here to help</h1>
            </div>
            </div>
        )
    }
}

export default HomePage