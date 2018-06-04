import React, { Component } from 'react';
import './App.css';
import Header from './components/header/';
import MainVideo from './components/main-video/';
import VideoList from './components/video-list/';
import Footer from './components/footer/';

class App extends Component {
  constructor() {
    super();
        
    this.state = {
      videos: [],
      currentVideo: ''
    };
  }

  componentDidMount() {
    const key = 'AIzaSyAdWPrZkJp9w08250h7nWu7Y4xiLDUzkeY';
    const playlistId = 'PL2fnLUTsNyq7A335zB_RpOzu7hEUcSJbB';
    let token = null;
    const url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL2fnLUTsNyq7A335zB_RpOzu7hEUcSJbB&key=AIzaSyAdWPrZkJp9w08250h7nWu7Y4xiLDUzkeY&maxResults=10';    

    fetch(url)
    .then(res => res.json())
    .then(data => {
      let previousState = {
        ...this.state,
        videos: data.items.map(item => item.snippet),
        currentVideo: data.items[0].snippet.resourceId.videoId
      }
      this.setState(previousState)
    })
  }
  
  itemClicked = (id) => {
    this.setState({currentVideo: id})
  }; 

  render() {
    return (
      <div className="App">
        <Header />
        {
          this.state.videos.length > 1 ? 
            <MainVideo video={this.state.currentVideo}/> : null
        }
        <VideoList itemClicked={this.itemClicked} videos={this.state.videos}/>
        <Footer />
      
      </div>
    );
  }
}

export default App;
