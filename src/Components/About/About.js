import React, {Component} from 'react';
import Header from "../Header";
import AboutSelection from "../AboutSelection";
import AboutMe from "../AboutSelection/AboutMe";
import AboutWork from "../AboutSelection/AboutWork";
import AboutDescription from "../AboutSelection/AboutDescription"
import witch from "../../img/transp_witch.svg";
import AboutSkils from "../AboutSkils";
// import photo from "../../img/ja.png";

export default class About extends Component {
    render() {
        return(
            <>
                <Header />
                <div className="about container">
                    <div className="mainAbout">
                        <h1><span>WOW...</span> a whole page just <span>about me!</span></h1>
                        <div className="witch">
                            <img className="witch" alt="witch" src={witch}/>
                        </div>
                        <div className="witchText">
                            <p>If the</p>
                            <p>broom fits.</p>
                            <p>Fly it!</p>
                        </div>
                        <div className="sky-container">
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                        </div>
                    </div>
                </div>
                <AboutDescription />
                <AboutSelection />
                <AboutMe id="aboutMyself" />
                <AboutSkils />
                <AboutWork id="aboutWork" />

            </>
        )
    }
}
