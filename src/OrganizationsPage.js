import React from 'react';
import HeaderComponent from './HeaderComponent';
import './OrganizationsPage.css';
import {Launcher} from 'react-chat-window';

export class OrganizationsPage extends React.Component{
    render(){
        return(
            <div className="OrganizationsPageWrapper">
            <div className="OrganizationsBody">
                <h1>I'm the organizations page</h1>
            </div>
            </div>
        )
    }
}

export default OrganizationsPage