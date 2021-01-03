import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './Contact.css';
import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




class Contact extends Component {
  
    render() {
     

        return (
           <div className="app">
             
            <ul className="socialLinks">
                <li id="socialmedicons">
                    <a href="mailto: derrybradley199611@gmail.com" className='my-links'><FontAwesomeIcon icon="envelope"title="Email"  /></a>
                </li>
                
                <li id="socialmedicons">
                    <a href="https://www.linkedin.com/in/derrybradley203/" className='my-links' id="linkedin"><FontAwesomeIcon icon={['fab', 'linkedin']} title="LinkedIn"/></a>
                </li>
        
                <li id="socialmedicons">
                    <a href="https://github.com/derryb51" className='my-links'> <FontAwesomeIcon icon={['fab', 'github']} title="Github"/></a>
                </li>

                <li id="socialmedicons">
                    <a href="https://gitlab.com/derryb51" className='my-links'><FontAwesomeIcon icon={['fab', 'gitlab']} title="Gitlab" /></a>
                </li>
            </ul>
         
           </div>
           
        );    }
}

export default Contact;
