import React, {Component} from 'react';
import {Link} from 'react-scroll';

export default class AboutProjects extends Component {
    render() {
        const options = {
            activeClass: "active",
            smooth: "true",
            offset: 0,
            duration: 800,
        }
        return(
            <div className="aboutProjects">
                <h2>...or maybe see some of my work</h2>
                <nav className="aboutButton">
                    <ul className="aboutNavigation">
                    <li><Link className="aboutBtn" id="btnAbout" to="aboutWork" {...options}>SEE MY WORK</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
