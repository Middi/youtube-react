import React, { Component } from 'react';
import Logo from '../../logo.png';
import './style.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div class="inner-header">
                    <img class="header-logo" src={Logo} alt="youtube logo" />
                </div>
            </header>
        )
    }
}

export default Header;