import React , {Component} from 'react'
import FeedItem from './feedItem'
import jQuery from 'jquery';
window.jQuery = jQuery;
require('jquery.marquee')

export default class feedList extends Component{

  state = {
    marqueeApplied : false,
    id : this.props.id
  }

  componentDidUpdate=()=>{
    if( this.state.marqueeApplied || !this.props.items.length )
      return
    this.setState({marqueeApplied:true} , this.setMarquee )
  }

  setMarquee=()=>{
      jQuery( '#'+this.state.id ).marquee({
          allowCss3Support : true,
          duration: 20000,
          delayBeforeStart: 0,
          direction: 'up',
          duplicated: true,
          pauseOnHover : true,
      }).bind('finished', () => {
         if( this.props.refreshItems )
          this.props.refreshItems()
      });
  }

	renderHead=()=>(
      <div className="feed-head">
        {this.props.head.img &&
        <img className="feed-head-logo" src={this.props.head.img} alt="walmart-logo" />}
        <p className="feed-head-title">{this.props.head.text}</p>
      </div>
    )

	renderList=()=>{
      let feeds = []
      this.props.items.map(item => (
        feeds.push( <FeedItem key={item.id} item={item} />)
      ))
      return (<div>{feeds}</div>)
    }


	render=()=>{
        const { isLoading , error } = this.props;
        let content = null
        if( error ) content = (<div> Something went wrong !</div>)
        if( isLoading ) content = (<div>Loading...</div>)
        content = this.renderList()
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