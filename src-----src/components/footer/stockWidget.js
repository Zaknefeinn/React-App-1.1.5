import React , {Component} from 'react'

const stockAPI = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=WMT&apikey=PFGQU228VE0ZP7WD'

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
      fetch(stockAPI)
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