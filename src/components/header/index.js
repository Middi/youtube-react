import React, { Component } from 'react';
import Logo from '../../logo.png';
import './style.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="inner-header">
                    <img className="header-logo" src={Logo} alt="youtube logo" />
                </div>
            </header>
        )
    }
}

export default Header;