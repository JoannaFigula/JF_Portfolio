import logo from "../../img/jfLogosvg.svg";
import { FaAlignRight } from 'react-icons/fa'
import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Header extends Component{
    state = {
        toggle:false
    }
    Toggle = () => {
        this.setState({toggle:!this.state.toggle})
    }
    render() {
        return (
            <>
                <div className="navBar">
                    <div className="navMob">
                        <img alt="logo" src={logo}/>
                        <button onClick={this.Toggle}>
                            <FaAlignRight />
                        </button>
                    </div>
                    <ul className={this.state.toggle ? "show-nav" : "links"}>
                        <li><Link exact="true" to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
            </>
        );
    }
}
