import React, { Component } from 'react';
import FeedList from './feedList'
import FBLogo from '../../img/FBLogo.png';

 
class FacebookList extends Component {

    state = {
      items: [],
      head : '',
      img : false,
      isLoading : true
    }

    componentWillMount=()=>this.fetchFeeds()

    fetchFeeds=()=>{
      fetch(this.props.url)
        .then(res => res.json())
        .then(
          (result) => {
            this.processResult( result )
          },
          (error) => {
            this.setState({
              isLoading: false,
              error
            });
          }
        )
    }

    processResult= result => {
      let items = []
      result.feed.data.map(item => {
        items.push({
          id : item.id,
          creator_img : item.from.picture.data.url,
          creator_name : item.from.name,
          text : item.message,
          img : item.full_picture
        })
      })
      this.setState({
        isLoading: false,
        items: items,
        head : result.name,
        img : result.picture.data.url
      });
    }


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
            id={this.props.id}
          />
      )
    }
 
}
 

export default FacebookList