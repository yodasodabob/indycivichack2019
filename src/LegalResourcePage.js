import React from 'react';
import HeaderComponent from './HeaderComponent';
import infographic from './know-your-rights_51ed133bac099_w1500.jpg';
import './LegalResourcePage.css';
// import {Launcher} from 'react-chat-window';

export class LegalResourcePage extends React.Component{
    render(){
        return(
            <div className="LegalResourcePageWrapper">
            <div className="LegalResourceBody">
                <h1>Need Legal Help?</h1>
        
                <h2>Here Are Some Legal Resources:</h2><br />

                <h3>KNOW YOUR RIGHTS!</h3>
                <p className="firstPLegal"><a href ="https://visual.ly/community/infographic/human-rights/know-your-rights" >Click Here to View Fullsize!</a></p>
                {/* <div class='visually_embed'><img class='visually_embed_infographic' src='https://visual.ly/node/image/80428?_w=540' alt='Know Your Rights' /><div class='visually_embed_cycle'></div><script type='text/javascript' src='https://a.visual.ly/api/embed/80428?width=540' class='visually_embed_script' id='visually_embed_script_80428'></script> */}
                <br />
                <p className="secondPLegal"> (From <a href='https://visual.ly?utm_source=content-embed&utm_medium=embed'>Visually</a>).</p>
                <img
                        alt=""
                        src={infographic}
                        className="infographic"
                    /><br />
                <div className="LineBreak"></div><br />

                <h3>LEGAL SERVICES:</h3>
                <p><a href ="https://www.indianalegalservices.org/" >Indiana Legal Services, Inc.</a></p>
                <p>Indiana Legal Services, Inc. (ILS) is a nonprofit law firm that provides free civil legal assistance 
                to eligible low-income residents throughout the state of Indiana.</p>

                <p><a href = "https://www.nclegalclinic.org/">Neighborhood Christian Legal Clinic</a></p>
                <p>The Clinic believes everyone should have access to justice regardless of their income, so we provide free legal services to those who cannot afford them.</p>

                <p><a href = "https://indianalegalhelp.org/what-if-i-dont-qualify/">Coalition for Court Access</a></p>
                <p>Civil legal aid helps people with non-criminal issues, including family, housing, consumer, healthcare, benefits, employment, and educational services.</p>
            
            </div>
            </div>
        )
    }
}

export default LegalResourcePage