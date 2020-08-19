import React, {Component} from 'react';
// import coliber from "../../../img/coliber.svg";

export default class AboutDescription extends Component {
    render() {
        return(
            <section className="aboutDescription container" id="aboutDescription">

                <div className="aboutText">
                    {/*<div className="coliberImage">*/}
                    {/*    <img alt="coliber" src={coliber}/>*/}
                    {/*</div>*/}
                    <div>
                        <h2>Few words about me</h2>
                        <p>I have seven years of experience in managing and coordinating research projects in the country and
                            abroad as a geophysics team manager. I changed the industry because I always wanted to try my hand
                            as a developer. I am highly motivated, open to knowledge and acquiring new skills. Taking the first
                            steps in the IT, in particular, I care about development opportunities and learning to achieve higher goals.</p>
                    </div>
                </div>
                </section>
        )
    }
}
