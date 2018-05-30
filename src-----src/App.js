import React, { Component } from 'react';
import Header from './components/header';
import WorkplaceFeeds from './components/feeds/workplaceFeeds'
import FacebookFeeds from './components/feeds/facebookFeeds'
import TwitterFeeds from './components/feeds/twitterFeeds'
import Footer from './components/footer';
import NewsFeed from './components/newsFeed'

import { Grid, Row, Col } from 'react-flexbox-grid';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Row >
            <Col xs={4} className="feed-col">
              <FacebookFeeds/>
            </Col>
            <Col xs={4} className="feed-col"  >
              <TwitterFeeds/>
            </Col>
            <Col xs={4} className="feed-col">
              <WorkplaceFeeds/>
            </Col>
          </Row>
          <Footer/>
          <NewsFeed/>
      </div>
    );
  }
}

export default App;
