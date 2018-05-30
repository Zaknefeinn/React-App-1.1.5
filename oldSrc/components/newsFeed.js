import React, { Component } from 'react';
import jQuery from 'jquery';
import Marquee3k from 'marquee3000';
window.jQuery = jQuery;


class NewsFeed extends Component {

    state = {
      items: [],
      marqueeApplied : false,
      id : `marquee-div-twitter`
    }


    fetchFeeds=()=>{
      const API = "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.foxnews.com%2Ffoxnews%2Flatest"
      fetch(API)
        .then(res => res.json())
        .then(
          (result) => {
            console.log("Result news",result);
            this.setState({
              isLoaded: true,
              items: result.items,
              
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }


    renderFeeds=()=>{
      let feeds = []
      this.state.items.map(item => (
        feeds.push(<li key={item.title}>{item.title}</li>)
      ))
      return (<ul>{feeds}</ul>)
    }

    componentWillMount=()=>this.fetchFeeds()

    componentDidUpdate=()=>{
      if( this.state.marqueeApplied || !this.state.items.length )
        return
      Marquee3k.init()
    }

    render=()=>{
        const { error, isLoaded, items } = this.state;
        let content = null
        if( error ) content =  null
        if( isLoaded ) content = (<div>Loading...</div>)
        content = this.renderFeeds()
        return(
         <div className="marquee3k container-fluid fixed-bottom ticker" 
            data-speed="0.90"  >
              {content}
          </div>
        )
    }
 
}
 

export default NewsFeed