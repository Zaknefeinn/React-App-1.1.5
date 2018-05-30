import React , {Component} from 'react'
import {FB_API} from '../../keys'
import FacebookList from './facebookList'

export default class FacebookFeeds extends Component{
	render=()=>(
		<FacebookList url={FB_API} id={`facebook-list`} />
	)
}