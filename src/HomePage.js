import React from 'react';
import HeaderComponent from './HeaderComponent';
import './HomePage.css';
// import {Launcher} from 'react-chat-window';

export class HomePage extends React.Component{
    render(){
        return(
            <div className="homePageWrapper">
            <div className="homeBody">
                <div className="introPara">
                <h1>We're here to help you grow</h1>
                <p> Blah blah boo boo tee hee yada yada
                Blah blah boo boo tee hee yada yada
                Blah blah boo boo tee hee yada yada
                Blah blah boo boo tee hee yada yada
                Blah blah boo boo tee hee yada yada
                Blah blah boo boo tee hee yada yada

                </p>
                </div>
            </div>
            </div>
        )
    }
}

export default HomePage