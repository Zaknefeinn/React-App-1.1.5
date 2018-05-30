import React , {Component} from 'react'
import {WORK_PLACE_API} from '../../keys'
import FacebookList from './facebookList'

export default class WorkplaceFeeds extends Component{
	render=()=>(
		<FacebookList url={WORK_PLACE_API} id={`workplace-list`} />
	)
}