import React, { Component } from 'react';
import './App.css';
import Header from './components/header/';
import MainVideo from './components/main-video/';
import VideoList from './components/video-list/';
import Footer from './components/footer/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainVideo />
        <VideoList />
        <Footer />
      
      </div>
    );
  }
}

export default App;
