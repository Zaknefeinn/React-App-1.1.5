import React, { Component } from 'react';
import FeedItem from './feed'
import FBLogo from '../../img/FBLogo.png';
import keys from '../keys';
import jQuery from 'jquery';
window.jQuery = jQuery;
require('jquery.marquee')



class FbList extends Component {

    state = {
      items: [],
      head : '',
      img : null,
      marqueeApplied : false,
      id : `marquee-div-${this.props.groupId}`
    }


    fetchFeeds=()=>{
      const API = "https://graph.facebook.com/"+this.props.groupId+"?fields="+keys.fbFields+"&access_token="+keys.workPlaceToken
      fetch(API)
        .then(res => res.json())
        .then(
          (result) => {
            console.log("Result",result);
            this.setState({
              isLoaded: true,
              items: result.feed.data,
              head : result.name,
              img : result.picture.data.url
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
        feeds.push( <FeedItem key={item.id} item={{
                    id : item.id,
                    creator_img : item.from.picture.data.url,
                    creator_name : item.from.name,
                    text : item.message,
                    img : item.full_picture
                  }} />)
      ))
      return (<div>{feeds}</div>)
    }

    componentWillMount=()=>this.fetchFeeds()

    renderHead=()=>(
      <div className="feed-head">
        <img className="feed-head-logo" src={this.state.img}/>
        <p className="feed-head-title">{this.state.head}</p>
      </div>
    )

    componentDidUpdate=()=>{
      if( this.state.marqueeApplied || !this.state.items.length )
        return
      this.setState({marqueeApplied:true} , ()=>{
        jQuery( '#'+this.state.id ).marquee({
            duration: 20000,
            delayBeforeStart: 0,
            direction: 'up',
            duplicated: true
        });
      })
    }

    render=()=>{
        const { error, isLoaded, items } = this.state;
        let content = null
        if( error ) content = (<div>Error: {error.message}</div>)
        if( isLoaded ) content = (<div>Loading...</div>)
        content = this.renderFeeds()
        return(
          <div>
            {this.renderHead()}
            <div  className="feed" id={this.state.id} >
              {content}
            </div>
          </div>
        )
    }

}


export default FbList
