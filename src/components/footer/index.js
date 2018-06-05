import React, { Component } from 'react';
import './style.css';

class Footer extends Component {
    render() {
        return (
            <footer onClick={this.props.buttonClicked}>
                <div className="inner-footer">
                    <button className={
                        this.props.results ? 'load-more' : 'load-more disabled'
                    }>{this.props.results ? 'Load More' : 'No More Results'}</button>
                </div>
            </footer>
                )
            }
        }
        
export default Footer;