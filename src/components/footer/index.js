 import React , {Component} from 'react'
import { Row, Col } from 'react-flexbox-grid';

import DateTime from './dateTime'
import StockWidget from './stockWidget'
import Weather from './weather'
import NewsFeed from './newsFeed'

export default class Footer extends Component{
	render=()=>{
		return (
			<div className="bottom fixed-bottom ">
				<div className="footer">
		      	<Row >
			        <Col xs={2} >
			        	<StockWidget/>
			        </Col>
			        <Col xs={8}  >
			        	<Weather/>
			        </Col>
			        <Col xs={2} >
			        	<DateTime/>
			        </Col>
			    </Row>
		      </div>
		      <NewsFeed/>
            </div>
		)
	}
}