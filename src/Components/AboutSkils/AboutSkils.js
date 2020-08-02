import React, {Component} from "react";

export default class AboutSkils extends Component {
    render() {
        return(
            <section id="skills" className="skills container" data-content="skills">
                <h2>Witch skills I have</h2>
                <div className="base">
                    <div className="hard">
                        <h3>Hard <span>skills</span></h3>
                        <ul>
                            <li>JavaScript ES6</li>
                            <li>React</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Bootstrap</li>
                            <li>Photoshop</li>
                            <li>SQL</li>
                            <li>Basics of manual testing</li>
                            <li>Basics of test automation</li>
                            <li>and..</li>
                        </ul>
                        <p>Working to be</p>
                        <strong>greater</strong>
                    </div>

                    <div className="soft">
                        <h3>Soft <span>skills</span></h3>
                        <ul>
                            <li>Work ethic</li>
                            <li>Creativity</li>
                            <li>Problem solving</li>
                            <li>Teamwork</li>
                            <li>Decision making</li>
                            <li>Time management</li>
                            <li>Determination</li>
                            <li>Responsibility</li>
                            <li>Patience</li>
                            <li>and...</li>
                        </ul>
                        <p>Working to be</p>
                        <strong>stronger</strong>
                    </div>
                </div>
            </section>


        )
    }
}
