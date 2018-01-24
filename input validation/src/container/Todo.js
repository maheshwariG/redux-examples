import React,{Component} from 'react';
import TodoForm from '../components/TodoForm.js';
import {connect} from 'react-redux';
import submitForm from '../actions/index';
import showError from '../actions/showError';
class Todo extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
				<TodoForm dataStore={this.props.data} submitForm={this.props.submitForm} showError={this.props.showError}/>
			)
	}
}
const mapStateToProps=(state)=>{
	return {
		data:state
	}
}
const mapDispatchToProps=(dispatch)=>{
	return {
		submitForm:(text)=>dispatch(submitForm(text)),
		showError:(text)=>dispatch(showError(text))
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Todo);