import React from 'react';
import HeaderComponent from './HeaderComponent';
import './OrganizationsPage.css';
// import {Launcher} from 'react-chat-window';

export class OrganizationsPage extends React.Component{
    render(){
        return(
            <div className="OrganizationsPageWrapper">
            <div className="OrganizationsBody">
                <h1>I'm the organizations page</h1>

                <h5><a href ="https://exoffenders.net/reentry-programs-assistance/indiana/">Exoffenders</a>
                <p>Indiana Reentry Programs and Assistance</p></h5>

                <h5><a href ="https://www.prisonfellowship.org/about/justicereform/legislation/state-issues/indiana/">Prison Fellowship</a>
                <p>ADVOCATE FOR JUSTICE THAT RESTORES <br></br> If you share our vision for a justice system
                 that restores all those impacted by crime and incarceration, please join our growing network
                 of advocates. Together we can inspire the Church, change the culture, 
                 and advance justice reform.</p></h5>

                <h5><a href ="https://helpforfelons.org/reentry-programs-ex-offenders-state/" >Help For Felons</a>
                <p>The process of leaving prison can be very difficult, especially for ex-offenders and felons that
                    have had to serve lengthy sentences. Reentry programs for ex-offenders can be very helpful for 
                    those that need a helping hand once outside prison. Below we have a comprehensive list of 
                    reentry programs for ex-offenders by state to help those needing it.</p></h5>

                <h5><a href ="http://www.edovo.com" >Edovo</a>
                <p>Since launching in 2014, Edovo has been building technology solutions to provide fair 
                    and honest communication services, educational and vocational programming, and re-entry
                    preparation for justice-involved people and their loved ones. Our mission is simple: 
                    To help everyone affected by incarceration build better lives.</p></h5>

                <h5><a href ="https://www.voa.org/correctional-re-entry-services" >Volunteers of America</a>
                <p>We provide services to help offenders successfully transition from prison to a 
                    productive life in the community and we help rehabilitate adult offenders and steer 
                    youth to set new, positive directions for their lives. Our services include halfway 
                    houses and work-release programs, day reporting, diversion and pre-trial services, 
                    residential treatment, family supports, and dispute resolution and mediation services.</p></h5>
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
            </div>
            </div>
        )
    }
}

export default OrganizationsPage