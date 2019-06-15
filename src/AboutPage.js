import React from 'react';
import HeaderComponent from './HeaderComponent';
import './AboutPage.css';
//import {Launcher} from 'react-chat-window';

export class AboutPage extends React.Component{
    render(){
        return(
        <div className="AboutPageWrapper">
            <div className="AboutBody">
            <div id= "para1">
                <h1>We're Mandela Effect</h1>
                <p> 
                    We're a group of dedicated individuals looking to help those
                    wanting another chance at a better life. At Mandela Effect, your
                    background does not define you -- instead it should only
                    accentuate the changes <b> you </b>  want to make. That is why
                    we picked the name "Mandela Effect" -- what people thought was true
                    about you is completely wrong.
                </p>
                </div>

            </div>
            

            </div>

        )
    }
}

export default AboutPage