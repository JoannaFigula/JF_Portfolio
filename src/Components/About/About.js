import React, {Component} from 'react';
import Header from "../Header";
import AboutSelection from "../AboutSelection";
import AboutMe from "../AboutSelection/AboutMe";
import AboutWork from "../AboutSelection/AboutWork";
import AboutDescription from "../AboutSelection/AboutDescription"
import witch from "../../img/transp_witch.svg";
import AboutSkils from "../AboutSkils";
import AboutHobby from "../AboutHobby";
import PortfolioProjects from "../PortfolioProjects";
import AboutFooter from "../AboutFooter";
import {Link} from 'react-scroll';
// import photo from "../../img/ja.png";

export default class About extends Component {
    render() {
        const options = {
            activeClass: "active",
            smooth: "true",
            offset: -100,
            duration: 800,
        }
        return(
            <>
                <Header />
                <div className="about container">
                    <div className="mainAbout">
                        <h1>wow... a whole page just <span>ABOUT ME!</span></h1>
                        <div className="sky-container">
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                        </div>
                        <div className="witch">
                            <nav className="">
                                <ul className="aboutNavigation">
                                    <li><Link className="aboutBtn" id="btnAbout" to="aboutDescription" {...options}><img className="witch" alt="witch" src={witch}/></Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="witchContent">
                            <div className="firstWitchText">
                                <p>Do you think</p>
                                <p>you can catch me?</p>
                            </div>
                        </div>
                        <div className="witchContent">
                            <div className="secondWitchText">
                                <p>If the</p>
                                <p>broom fits.</p>
                                <p>Fly it!</p>
                            </div>
                        </div>

                    </div>
                </div>
                <AboutDescription />
                <AboutSelection />
                <AboutMe id="aboutMyself" />
                <AboutHobby />
                <AboutSkils />
                <AboutWork id="aboutWork" />
                <PortfolioProjects />
                <AboutFooter />

            </>
        )
    }
}
