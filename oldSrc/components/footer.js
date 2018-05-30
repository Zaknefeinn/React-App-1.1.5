import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const IFRAME = '<iframe id="weatherwidget-io-0" class="weatherwidget-io-frame" scrolling="no" frameborder="0" width="100%" src="https://weatherwidget.io/w/" style="display: block; position: absolute; top: 0px; height: 98px;"></iframe>'
const stockAPI = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=WMT&apikey=PFGQU228VE0ZP7WD'

const getMapKeyValueByIndex = (obj, idx) =>
  {
    var key = Object.keys(obj)[idx];
    return {
      value: obj[key]
    };
  }

class footer extends Component {

	state={
		curTime : false,
		iframe : null,
		cls : null , 
		stockIcon : null
	}

	componentWillMount=()=>{
		this.updateStock()
		this.setState({curTime:new Date()})
	}

	componentDidMount() {
	    setInterval( () => {
	      this.setState({
	        curTime : new Date()
	      });
	    },1000)
	    this.setState({iframe : IFRAME})
	    setInterval(()=>this.updateStock(),8000)
	    this.appendScript()
	}

	updateStock=()=>{
      fetch(stockAPI)
        .then(res => res.json())
        .then(
          (response) => {
            console.log("Result - stock",response);
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
	renderStock=()=>{
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

	getTime=()=>{
		let d = this.state.curTime 
		let nhour=d.getHours(),nmin=d.getMinutes(),ap;
		if(nhour==0){ap=" AM";nhour=12;}
		else if(nhour<12){ap=" AM";}
		else if(nhour==12){ap=" PM";}
		else if(nhour>12){ap=" PM";nhour-=12;}
		if(nmin<=9) nmin="0"+nmin;
		return nhour+":"+nmin+ap
	}

	renderDateTime=()=>(
		<div className="date-time-widget text-center">
          <p id="date" className="date">{monthNames[this.state.curTime.getMonth()]} {this.state.curTime.getDate()}</p>
          <p id="time" className="time">{this.getTime()}</p>
        </div>
	)

	appendScript() {
	    const s = document.createElement('script');
	    s.type = 'text/javascript';
	    s.async = true;
	    s.innerHTML = "!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');";
	    this.instance.appendChild(s);
	}
	renderIFrame=()=>(
		<div className="weatherwidget-io-warpper" ref={el => (this.instance = el)}  >
			<a className="weatherwidget-io" 
				href="https://forecast7.com/en/36d37n94d21/bentonville/?unit=us" 
				data-label_1="BENTONVILLE" data-label_2="WEATHER" data-theme="original" 
				data-basecolor="#007dc6">
				BENTONVILLE WEATHER
			</a>
		</div>
	)

	  render() {
	    return (
	      <div className="footer">
	      	<Row >
		        <Col xs={2} >
		          {this.renderStock()}
		        </Col>
		        <Col xs={8}  >
		        	{this.renderIFrame()}
		        </Col>
		        <Col xs={2} >
		        	{this.renderDateTime()}
		        </Col>
		    </Row>
	      </div>
	    );
	  }
}
export default footer;
