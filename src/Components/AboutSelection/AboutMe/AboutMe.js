import React, {Component} from 'react';
import photo from "../../../img/ja.png";


export default class AboutMe extends Component {
    render() {
        return (
            <section className="aboutMe container" id="aboutMyself">
                <div className="aboutContent">
                    <div className="aboutText">
                        <h2>HONESTLY...</h2>
                        <p>Yesterday I was clever, so I wanted to change the world.</p>
                        <p>Today I am wise, so I am changing myself.</p>
                    </div>
                    <img className="img-about" alt="photo" src={photo}/>
                </div>
            </section>
        )
    }
}
