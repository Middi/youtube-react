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
      currentVideo: '',
      pageToken: null
    };
  }

  fetchVids = () => {
    const key = 'AIzaSyAdWPrZkJp9w08250h7nWu7Y4xiLDUzkeY';
    const playlistId = 'PL2fnLUTsNyq7A335zB_RpOzu7hEUcSJbB';
    
    const token = this.state.pageToken ? `&pageToken=${this.state.pageToken}` : '';
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL2fnLUTsNyq7A335zB_RpOzu7hEUcSJbB&key=AIzaSyAdWPrZkJp9w08250h7nWu7Y4xiLDUzkeY&maxResults=10${token}`;

    console.log(url);

    fetch(url)
    .then(res => res.json())
    .then(data => {
      let toReturn = this.state.videos.concat(data.items.map(item => item.snippet));

      let previousState = {
        ...this.state,
        videos: toReturn,
        currentVideo: data.items[0].snippet.resourceId.videoId,
        pageToken: data.nextPageToken
      }
      this.setState(...this.state, previousState)
    })
  }

  componentDidMount() {
    this.fetchVids();
  }

  // fetchVids = (token) => {
  //   this.setState({pageToken: token})
  // }
  
  itemClicked = (id) => {
    this.setState({currentVideo: id})
  }; 

  buttonClicked = () => {
    this.fetchVids();
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
        <Footer buttonClicked={this.buttonClicked} />
      
      </div>
    );
  }
}

export default App;
