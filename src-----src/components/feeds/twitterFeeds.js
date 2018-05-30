import React, { Component } from 'react';
import {TWITTER_API} from '../../keys'
import FeedList from './feedList'
import FBLogo from '../../img/FBLogo.png';
import jQuery from 'jquery';
window.jQuery = jQuery;
require('jquery.marquee')

const getImgFromTweet=item=>{
        if( !item.extended_entities ) return null
        if( !item.extended_entities.media ) return null
        return item.extended_entities.media[0].media_url  || null
}

class TwitterFeeds extends Component {

    state = {
      items: [],
      head : 'Tweets by ‎@WalmartToday',
      img : null,
      marqueeApplied : false,
      id : `marquee-div-twitter`,
      isLoading : true,
      error : null
    }


    fetchFeeds=()=>{
      const fetchConfig = {
                method: 'GET',
                headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
                }
            }
      fetch( TWITTER_API , fetchConfig )
            .then(response => { return response.json();})
            .then(responseData => { this.processResult(responseData) })
            .catch(error => {
                this.setState({
                        isLoading:false,
                        error
                })
            });
    }

    processResult = result => {
        let items = []
        result.tweets.map(item => (
                items.push({
                    id : item.id,
                    creator_img : item.user.profile_image_url,
                    creator_name : item.user.screen_name,
                    text : item.text,
                    img : getImgFromTweet( item )
                  })
        ))
        
        this.setState({
                isLoading: false,
                items: items
        });

    }


    componentWillMount=()=>this.fetchFeeds()

    render=()=>{

      let head = {
        text : this.state.head,
        img : this.state.img
      }

      return(
          <FeedList
            isLoading={this.state.isLoading}
            items={this.state.items}
            head={head}
            id={this.state.id}
          />
      )
    }
 
}
 

export default TwitterFeeds