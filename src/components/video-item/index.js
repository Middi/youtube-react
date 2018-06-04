import React, { Component } from 'react';
import './style.css';

class VideoItem extends Component {
    render() {
        let video = this.props.video;
        return (
            <article onClick={ () => this.props.itemClicked(video.resourceId.videoId)}>
                <div className="thumb-container">
                    <img src={video.thumbnails.medium.url} className="thumb" />
                </div>
                <div className="vid-details">
                    <h1>{video.title}</h1>
                    <p className="description">{video.description.substring(0, 100) + ' ...'}</p>
                </div>
            </article>
        )
    }
}

export default VideoItem;