import React, {Component} from 'react';
import AboutWho from "../AboutSelection/AboutWho";
import AboutProjects from "../AboutSelection/AboutProjects";

export default class AboutSelection extends Component {
    render(){
        return(
            <section className="aboutSelection container" data-stretch-type="full" data-hasbg="hasbg" data-overlay-color="#000000" data-overlay="true"  >
                <h2 className="aboutTitle">Do you want to...</h2>
                <div className="aboutParts">
                    <AboutWho />
                    <AboutProjects />
                </div>
            </section>
        )
    }
}
