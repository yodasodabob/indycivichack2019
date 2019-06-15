import React from 'react';
import HeaderComponent from './HeaderComponent';
import './HomePage.css';
//import {Launcher} from 'react-chat-window';
import logoHome from './seedling-sprout-image-cropped.jpg';

export class HomePage extends React.Component{
    render(){
        return(
            <div className="homePageWrapper">
            <div className="homeBody">
                <div className="TitleLogo">
                    <img
                        alt=""
                        src={logoHome}
                        className="pictureLogoHome"
                    />
                </div>
                <div className="introPara">
                    <h1 id="header1">The path to re-entry shouldn't <br></br> be hard; we're here
                  to make it easier.</h1>
                    <p id="paragraph1"> 
                   With the resources we have gathered, we are dedicated in helping
                    those who have been incarcerated
                  get the right step in for a better future.
                    </p>
                </div>
               
            </div>
            </div>
        )
    }
}

export default HomePage