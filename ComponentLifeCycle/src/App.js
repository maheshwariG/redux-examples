import React from 'react';
import ShowText from "./components/ShowText";
export default class App extends React.Component {
	constructor(){
		super();
		this.state={
			initValue:""
		}
		this.changeHandler=this.changeHandler.bind(this);
	}
	changeHandler(evt) {
		this.setState({
			initValue:evt.target.value
		})
	}
	/*componentWillMount() {
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
	}*/
    render() {
    	return (
	    		<div>
	    		 	<input onChange={this.changeHandler} type="text" value={this.state.initValue} placeholder="Please Enter"/>
	    		 	<ShowText valueText={this.state.initValue}/>
	    		</div>
    		)
    }
}
