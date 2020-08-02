import React, {Component} from 'react';
import {Link} from 'react-scroll';

export default class AboutWho extends Component {
    render() {
        const options = {
            activeClass: "active",
            smooth: "true",
            offset: 50,
            duration: 800,
        }
        return (
            <div className="aboutWho">
                <h2> See who I am? </h2>
                <nav className="aboutButton">
                    <ul className="aboutNavigation">
                        <li><Link className="aboutBtn" id="btnAbout" to="aboutMyself" {...options}>SEE WHO I AM</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
