import React, { Component } from 'react';
import './facebook.css';
import FBLogo from '../../img/FBLogo.png';
import keys from '../keys';

console.log("WorplaceToken", keys.workPlaceToken);
const API = "https://graph.facebook.com/"+keys.groupId+"?fields="+keys.fbFields+"&access_token="+keys.workPlaceToken;


class facebook extends Component {
  constructor(props) {
  super(props);
    this.state = {
      items: [],
    };
  }



componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(
        (result) => {
          console.log("Result",result);
          this.setState({
            isLoaded: true,
            items: result.feed.data
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }




  /*render() {
    return (
      <div className="facebook">
      <div className="social-header">
        <img src={FBLogo} className="fb-logo" alt="facebook logo" />
        <p>test text</p>
      </div>
      <div className="social-feed">
        <p>test this text out for me</p>
      </div>
      </div>
    );
  }
}*/

render() {
    const { error, isLoaded, items } = this.state;
    console.log("Error", error);
    console.log("Items", items);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="feed">
          { items.map(item => (
          <div>

            <p key={item.id}>
              {item.message}
            </p>
              <img src={item.full_picture} className="fb-feed-image"></img>
          </div>
          ))}
        </div>
      );
    }
  }
}






export default facebook;
