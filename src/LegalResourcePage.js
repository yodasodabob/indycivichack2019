import React from 'react';
import HeaderComponent from './HeaderComponent';
import './LegalResourcePage.css';
// import {Launcher} from 'react-chat-window';

export class LegalResourcePage extends React.Component{
    render(){
        return(
            <div className="LegalResourcePageWrapper">
            <div className="LegalResourceBody">
                <h1>I'm the legal resource page</h1>
            </div>
            </div>
        )
    }
}

export default LegalResourcePage