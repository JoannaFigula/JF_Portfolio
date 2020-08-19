import React, {Component} from 'react';
import avatar from "../../img/myAvatar (2).svg";
import Header from "../Header";
import ContactForm from "../Contact/ContactForm.js";

export default class Contact extends Component {
    render() {
        return(
            <>
                <Header />
                <div className="contact container">
                    <div className="mainText">
                        <h1>Let me hear <span>from you!</span></h1>
                        <div>
                            <p>You just met me!<span> And this is crazy... </span></p>
                            <p><span>but here's my number</span> +48 607 188 531 <span>- So Call Me, Mayby?</span></p>
                        </div>
                    </div>
                    <div className="avatarImage">
                        <img alt="avatar" src={avatar}/>
                    </div>
                </div>
                <ContactForm />
            </>
        )
    }
}
