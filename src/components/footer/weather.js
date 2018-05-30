import React , {Component} from 'react'
import {WEATHER_API} from '../../keys'

export default class Weather extends Component{

	componentDidMount=()=>this.appendScript()

	appendScript() {
	    const s = document.createElement('script');
	    s.type = 'text/javascript';
	    s.async = true;
	    s.innerHTML = "!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');";
	    this.instance.appendChild(s);
	}

	render=()=>(
		<div className="weatherwidget-io-warpper" ref={el => (this.instance = el)}  >
			<a className="weatherwidget-io" 
				href={WEATHER_API.href}
				data-label_1={WEATHER_API.label_1} 
				data-label_2={WEATHER_API.label_2} 
				data-theme={WEATHER_API.theme} 
				data-basecolor={WEATHER_API.basecolor} >
				BENTONVILLE WEATHER
			</a>
		</div>
	)
}