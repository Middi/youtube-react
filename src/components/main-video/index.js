import React, { Component } from 'react';
import './style.css';

class MainVideo extends Component {
    render() {

    const video = `https://www.youtube.com/embed/${this.props.video}?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=0`;
        return (
            <section>
                <div className="inner-section">
                    <div className="wrapper">
                        <div id="video" className="videoWrapper">
                            <iframe className="video" title="pre-video" src={video} frameBorder="0" allowFullScreen />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default MainVideo;