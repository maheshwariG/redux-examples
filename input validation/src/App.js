import React,{Component} from 'react';
import Todo from './container/Todo.js';
import store from './store/configureStore.js';
import {Provider} from 'react-redux';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Todo/>
			</Provider> 
		)
	}
}

export default App;