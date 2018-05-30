import React, { Component } from 'react';
import {NEWS_API} from '../../keys'
import jQuery from 'jquery';
window.jQuery = jQuery;
require('jquery.marquee')

class NewsFeed extends Component {

    state = {
      isLoading : true,
      items: [],
      marqueeApplied : false,
      id : `marquee-div-news`
    }

    componentWillMount=()=>this.fetchFeeds()


    fetchFeeds=()=>{
      this.setState({isLoading:true})
      fetch(NEWS_API)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoading: false,
              items: result.items,
              
            });
          },
          (error) => {
            this.setState({
              isLoading: false,
              error
            });
          }
        )
    }


    renderFeeds=()=>{
      let feeds = []
      let i = 0
      this.state.items.map(item => (
        feeds.push(<span className="news-feed-marquee-item" key={i++}>{item.title}</span>)
      ))
      return (<div className="news-feed-marquee-wrapper" >{feeds}</div>)
    }


    setMarquee=()=>{
      jQuery('.news-feed-marquee').marquee({
          allowCss3Support : true,
          delayBeforeStart: 0,
          direction: 'left',
          duplicated: true,
          speed : 80,
          gap  : 0,
          pauseOnHover : true,
          startVisible : true
      }).bind('finished', () => {
         this.fetchFeeds()
      });
    }

    componentDidUpdate=()=>{
      if( this.state.marqueeApplied || !this.state.items.length )
        return
      this.setState({marqueeApplied:true},this.setMarquee)
      
    }

    render=()=>{
        const { error, isLoading , items } = this.state;
        let content = null
        if( error ) content =  null
        if( isLoading && !items.length ) content = (<div>Loading...</div>)
        content = this.renderFeeds()
        return(
         <div className='news-feed-marquee' data-duplicated='true' >
              {content}
          </div>
        )
    }
 
}
 

export default NewsFeed