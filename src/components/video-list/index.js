import React, { Component } from 'react';
import './style.css';
import VideoItem from '../video-item';

class VideoList extends Component {
    render() {
        return (
            <main>
                {
                    this.props.videos.map(video => <VideoItem itemClicked={this.props.itemClicked} key={video.title} video={video} />)
                }
            </main>
        )
    }
}

export default VideoList;
