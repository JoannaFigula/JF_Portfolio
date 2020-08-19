import React, {Component} from 'react';
import avatar from "../../img/jf.svg";
import Header from '../../Components/Header/Header.js';
import {Link} from "react-router-dom";

export default class Home extends Component {
    render() {
        return(
            <>
                <Header/>
                <div className="home container">
                    <div className="avatarImage">
                        <img alt="" src={avatar}/>
                    </div>
                    <div className="mainText">
                        <h1>Perfectly <span>Imperfect!</span></h1>
                        <p>Hi, I am Joanna,</p>
                        <p>I have no <span>special</span> talent. I am only <span>passionately</span> curious...</p>
                        <button><Link className="homeBtn" id="btnHome" to='/about'>SEE MORE >></Link></button>

                        {/*<p>Albert Einstein</p>*/}
                    </div>
                </div>
            </>
        )
    }
}
