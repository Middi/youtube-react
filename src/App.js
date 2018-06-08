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
      currentVideo: 'qxWrnhZEuRU',
      pageToken: null
    };
  }

  fetchVids = () => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    const playlistId = 'PL2fnLUTsNyq7A335zB_RpOzu7hEUcSJbB';
    
    const token = this.state.pageToken ? `&pageToken=${this.state.pageToken}` : '';
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${key}&maxResults=10${token}`;

    fetch(url)
    .then(res => res.json())
    .then(data => {
      let toReturn = this.state.videos.concat(data.items.map(item => item.snippet));

      let previousState = {
        ...this.state,
        videos: toReturn,
        pageToken: data.nextPageToken
      }
      this.setState(...this.state, previousState)
    })
    .catch(err => console.log(err))
  }

  componentDidMount() {
    this.fetchVids();
  }
  
  itemClicked = (id) => {
    this.setState({currentVideo: id})
  }; 

  buttonClicked = () => 
    this.state.pageToken ? this.fetchVids() : null; 

  render() {
    return (
      <div className="App">
        <Header />
        {
          this.state.videos.length > 1 ? 
            <MainVideo video={this.state.currentVideo}/> : null
        }
        <VideoList itemClicked={this.itemClicked} videos={this.state.videos}/>
        <Footer buttonClicked={this.buttonClicked} results={this.state.pageToken} />
      
      </div>
    );
  }
}

export default App;
