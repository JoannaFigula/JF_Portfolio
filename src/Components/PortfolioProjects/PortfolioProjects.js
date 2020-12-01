import React, {Component} from 'react';
import country from "../../img/countrySearch.jpg";
import things from "../../img/thingsSharing.jpg";
import progress from "../../img/sitchair.png";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEye} from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'


export default class PortfolioProjects extends Component {
    render(){
        return(
            <section className='portfolioProjects container'>
                <div className="grid">
                    <figure className="effect-zoe">
                        <h2>Country <span>Search</span></h2>
                        <img className="countrySearch" alt="countrySearch" src={country} />
                        <figcaption>
                            <div className="effectSearch">
                                <h3>Country <span>Search</span></h3>
                                <div className="icons">
                                    <span><FontAwesomeIcon icon={faEye } /></span>
                                    <span><a href="https://country-search-joannafigula-site.netlify.app/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCode} /></a></span>

                                </div>
                            </div>
                            <p>
                                <span>&lt; React.js, </span>
                                <span>HTML, </span>
                                <span>SCSS  /&gt;</span>
                            </p>
                            {/*<p>The application that downloads basic data about the searched country.*/}
                            {/*    The data is collected from https://restcountries.eu - a database*/}
                            {/*    of information about countries around the world. The JavaScript*/}
                            {/*    programming language library (ReactJS) and cascading*/}
                            {/*    style sheets (CSS) were used.</p>*/}
                        </figcaption>
                    </figure>
                    <figure className="effect-zoe">
                        <h2>Things <span>Sharing</span></h2>
                        <img className="thingsSharing" alt="thingsSharing" src={things} />
                        <figcaption>
                            <div className="effectSearch">
                                <h3>Things <span>Sharing</span></h3>
                                <div className="icons">
                                    <span><FontAwesomeIcon icon={faEye} /></span>
                                    <span><a href="https://country-search-joannafigula-site.netlify.app/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCode} /></a></span>
                                </div>
                            </div>
                            <p>
                                <span>&lt; React.js, </span>
                                <span>HTML, </span>
                                <span>SCSS  /&gt;</span>
                            </p>
                            {/*<p>The aim of the project were to create a place where everyone*/}
                            {/*    could give unnecessary things to trusted institutions.*/}
                            {/*    The project is a website with a simple form that will*/}
                            {/*    help users to donate things. ReactJS and syntactically awesome*/}
                            {/*    style sheets (SCSS) were used.</p>*/}
                        </figcaption>
                    </figure>
                    <figure className="effect-zoe">
                        <h2>Black <span>Chair</span></h2>
                        <img className="workProgress" alt="workProgress" src={progress} />
                        <span><a href="https://black-chair-gatsby.netlify.app/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEye}/></a></span>

                        <figcaption>
                            <div className="effectSearch">

                                <h3>Black <span>Chair</span></h3>
                                <div className="icons">

                                    <span><FontAwesomeIcon icon={faEye} /></span>
                                    <span><a href="https://github.com/JoannaFigula/Black-Chair" target="_blank" rel="noopener noreferrer"><span><FontAwesomeIcon icon={faCode} /></span></a></span>
                                </div>
                            </div>
                            <p>
                                <span>&lt; Gatsby.js, </span>
                                <span>HTML, </span>
                                <span>SCSS  /&gt;</span>
                            </p>

                        </figcaption>
                    </figure>
                </div>
            </section>
        )
    }

}
