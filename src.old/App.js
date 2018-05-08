import React, { Component } from 'react';
import Header from './components/header';
import Facebook from './components/facebook/facebook';
import Footer from './components/footer';
import TwitterTimeline from 'react-twitter-embedded-timeline';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Facebook />
        <TwitterTimeline widgetId="695868534455275520" chrome="noborders noheader" height={300} />




        <div className="bottom">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
