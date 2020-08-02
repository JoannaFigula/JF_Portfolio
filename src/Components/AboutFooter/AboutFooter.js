import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import { faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import { faGithub} from "@fortawesome/free-brands-svg-icons";

export default class AboutFooter extends Component {
    render() {
        return(
            <section className="aboutFooter container">
                <div className='footerContent'>
                    <div className="contactInfo">
                        <h2>Bug me</h2>
                        <span><a href = "mailto: joanna.figula@gmail.com"><FontAwesomeIcon icon={faEnvelope} />  &nbsp;&nbsp;Send me e-mail</a></span>
                        <span><a href='tel:607 188 531'> <FontAwesomeIcon icon={faPhoneAlt} /> &nbsp;&nbsp;Click to call</a></span>
                    </div>
                    <div className='socials'>
                        <h2>Let's be internet BFFs</h2>
                        <div className='socialsIcons' >
                            <span><a href='http://www.linkedin.com/in/JoannaFigula' target='_blanc'> <FontAwesomeIcon icon={faLinkedinIn} /></a></span>
                            <span><a href='https://github.com/JoannaFigula' target='_blanc'> <FontAwesomeIcon icon={faGithub} /></a></span>
                            <span><a href = 'https://www.facebook.com/joanna.wiechec' target='_blanc'><FontAwesomeIcon icon={faFacebookF} /></a></span>
                        </div>
                    </div>
                </div>
            </section>
         )
    }
}
