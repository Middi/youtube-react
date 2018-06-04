import React, { Component } from 'react';
import './style.css';

class MainVideo extends Component {
    render() {
        return (
            <section>
                <div class="inner-section">
                    <div class="wrapper">
                        <div id="video" class="videoWrapper">
                            <iframe class="video" title="pre-video" src="https://www.youtube.com/embed/gLWIYk0Sd38?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=0" frameborder="0" allowfullscreen />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default MainVideo;