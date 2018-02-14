import React,{Component} from 'react';
export default class ShowText extends Component { 
	componentWillMount() {
		console.log("Will mount");
	}
	componentDidMount() {
		console.log("Did mount");
	}
	shouldComponentUpdate(){
		console.log("should update");
		return true;
	}
	componentWillReceiveProps() {
		console.log("receive props");
	}
	componentWillUpdate() {
		console.log("Will Update");
	}
	componentDidUpdate() {
		console.log("Did Update");
	}
	render() {
		return (
			  <h1>{this.props.valueText}</h1>
			)
	}
}