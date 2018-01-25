import React, { Component } from 'react';
import ItemList from './components/ItemList';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import userData from './reducers/rootReducer';
const store=createStore(userData);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ItemList/>
      </Provider>
    )
  }
}
export default App;