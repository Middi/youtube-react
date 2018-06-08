import React, { Component } from 'react';
import './style.css';

class VideoItem extends Component {
    render() {
        let video = this.props.video;
        let img = this.props.video.thumbnails.medium.url;
        return (
                <article onClick={ () => this.props.itemClicked(video.resourceId.videoId)}>
                    <div className="thumb-container">
                        <img src={img} className="thumb" alt="Video Thumbnail" />
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