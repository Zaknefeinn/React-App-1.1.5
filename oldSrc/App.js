import React, { Component } from 'react';
import Header from './components/header';
import FbList from './components/feeds/fbList'
import TwitterList from './components/feeds/twitterList'
import Footer from './components/footer';
import NewsFeed from './components/newsFeed'
import keys from './components/keys';

import { Grid, Row, Col } from 'react-flexbox-grid';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Row >
            <Col xs={4} className="feed-col">
              <FbList groupId={keys.groupId} />
            </Col>
            <Col xs={4} className="feed-col"  >
              <TwitterList/>
            </Col>
            <Col xs={4} className="feed-col">
              <FbList groupId={keys.evntGroupId} />
            </Col>
          </Row>
        <div className="bottom">
          <Footer />
        </div>
        <NewsFeed/>
      </div>
    );
  }
}

export default App;
