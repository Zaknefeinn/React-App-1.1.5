import React , {Component} from 'react'

export default class FeedItem extends Component{
	renderFeed=item=>{
		return(
			<div className="doug-feed-content" >
			   <div className="doug-post-content" >
			      <img className="doug-content-creator-img"  src={item.creator_img}/>
			      <p className="doug-content-creator">{item.creator_name}</p>
			   </div>
			   <p className="doug-message">{item.text}</p>
			   <img className="doug-feed-picture" src={item.img}/>
			</div>
		)
	}

	render=()=>this.renderFeed( this.props.item )
}