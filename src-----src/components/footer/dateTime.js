import React , {Component} from 'react'

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default class DateTime extends Component{

	state={curTime:new Date()}

	componentDidMount=()=>{
		setInterval( () => {
	      this.setState({
	        curTime : new Date()
	      });
	    },1000)
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

	render=()=>(
		<div className="date-time-widget text-center">
          <p id="date" className="date">{monthNames[this.state.curTime.getMonth()]} {this.state.curTime.getDate()}</p>
          <p id="time" className="time">{this.getTime()}</p>
        </div>
	)
}