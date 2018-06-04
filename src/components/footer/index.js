import React, { Component } from 'react';
import './style.css';

class Footer extends Component {
    render() {
        return (
            <footer onClick={this.props.buttonClicked}>
                <div className="inner-footer">
                    <button className="load-more">Load More</button>
                </div>
            </footer>
                )
            }
        }
        
export default Footer;