import React,{Component} from 'react';

class TodoForm extends Component {
	constructor() {
		super();
		this.handleFormsubmit=this.handleFormsubmit.bind(this);
	}

	handleFormsubmit(evt) {
		console.log(this.props.dataStore);
		evt.preventDefault();
        if(this.refs.text.value)
        	this.props.submitForm(this.refs.text.value);
        else {
        	this.props.showError("Please Enter The Text");
        }
	}

	render() {
		return (
			    <div>
				<form ref='form' onSubmit={this.handleFormsubmit}>
			      	<input type='text' ref='text' />
			        <input type='submit' value='Add Todo'/>
			    </form>
			    <span>{this.props.dataStore.todoReducer}</span>
			    </div>
			)
	}
}

export default TodoForm;