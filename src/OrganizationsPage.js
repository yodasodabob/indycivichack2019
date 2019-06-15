import React from 'react';
import HeaderComponent from './HeaderComponent';
import './OrganizationsPage.css';
import {Launcher} from 'react-chat-window';

export class OrganizationsPage extends React.Component{
    render(){
        return(
            <div className="OrganizationsPageWrapper">
            <div className="OrganizationsBody">
                <h1>Need Help Getting Back on Your Feet?</h1><br />

                <h3>Re-Entry Programs</h3>
                <br / >
                <h5><a href ="https://lionheart.org/prison/state-by-state-listing-of-re-entry-programs-for-prisoners/" >LionHeart</a></h5>
                <p>A list of reentry programs below, listed by state, to help people connect with the services or contacts they might need to help them with re-entry into society. </p>
                <br /> 

                <h5><a href = "https://www.in.gov/idoc/2335.htm">Indiana Department of Correction</a></h5>
                <p>The Re-Entry Division, utilizing evidence-based practices, promotes the assessment of each offender's criminogenic needs and encourages a culture of accountability and collaboration.
                    <br /> We value targeted programming to establish a comprehensive Re-Entry model that advocates for a skilled and ready workforce.
                </p>
                <br / >

                <h5><a href = "https://www.nami.org/Find-Support/Living-with-a-Mental-Health-Condition/Reentry-After-a-Period-of-Incarceration">National Alliance of Mental Illness</a></h5>  
                <p>Re-entry after a period of incarceration</p>  

                <br />

                <h5><a href = "https://www.paceindy.org/about-us/">Pace Indy</a></h5>
                <p>If we provide the right tools, our clients can choose to become responsible, productive members of society. PACE accepts anyone with a felony conviction and needs assistance, no matter how long ago that felony occurred.</p>
                 
                <br />

                
            </div>
            </div>
        )
    }
}

export default OrganizationsPage