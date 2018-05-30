import React , {Component} from 'react'
import {STOCK_API} from '../../keys'

const getMapKeyValueByIndex = (obj, idx) =>{
	var key = Object.keys(obj)[idx];
	return {
	  value: obj[key]
	};
}

export default class StockWidget extends Component{

	state={
		cls : null,
		stockIcon : null,
		error : false
	}

	componentWillMount=()=>this.updateStock()

	componentDidMount=()=>setInterval(()=>this.updateStock(),8000)

	updateStock=()=>{
      fetch(STOCK_API)
        .then(res => res.json())
        .then(
          (response) => {
			let idx = 1;
			let prop = Object.keys(response)[idx];
			let val = response[prop];
			let res = getMapKeyValueByIndex(val, 0);

			let opn = res.value['1. open'];
			let cls = Number(res.value['4. close']).toFixed(2);
			let stockIcon = "fa fa-arrow-down red"
			if (cls >= opn)
				stockIcon = "fa fa-arrow-up green"
			this.setState({  cls,stockIcon })
            
          },
          (error) => {
            this.setState({
              error
            });
          }
        )
    }

	render=()=>{
		return(
			<div className="stock-widget text-center ">
	          <div id="random_no_container" className="stock-price">
	            <p className="stock">NYSE: WMT</p>
	            <span className="icon"><i className={this.state.stockIcon}></i></span>
	            &nbsp;
	            <span className="value stock-value">
	            	{this.state.cls}
	            	<span className="f-12">USD</span>
	            </span>
	          </div>
	        </div>
		)
	}
}