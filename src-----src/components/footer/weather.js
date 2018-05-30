import React , {Component} from 'react'

const IFRAME = '<iframe id="weatherwidget-io-0" class="weatherwidget-io-frame" scrolling="no" frameborder="0" width="100%" src="https://weatherwidget.io/w/" style="display: block; position: absolute; top: 0px; height: 98px;"></iframe>'

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
				href="https://forecast7.com/en/36d37n94d21/bentonville/?unit=us" 
				data-label_1="BENTONVILLE" data-label_2="WEATHER" data-theme="original" 
				data-basecolor="#007dc6">
				BENTONVILLE WEATHER
			</a>
		</div>
	)
}