# redux-examples
this example is very basic of react-redux.
In this i am showing the items on page load and when user clicks on these items. Corresponding item description displays.
Main parts of the redux.
1 Action Creator
2 Reducer
3 Store
4 Provider
5 Component

Action creator is the simple function as shown in example:

const showDescription=(item)=>{
	console.log(item.description);
	return {
		type:"SHOW_DESCRIPTION",
		payload:item.description
	}
}
export default showDescription;
it returns object with type and payload(state/data) for reducer.

Reducer is again javascript function which takes the initial state and action.
const initialState="Click On Item";
const ItemDetail=(state=initialState,action)=>{
   switch(action.type){
   	 case 'SHOW_DESCRIPTION':
   	 	return action.payload;
   	 default:
   	   return state;
   }
}
export default ItemDetail;
It return the new state for store. We need to combine the reducers to make it one objcet for store.

import {combineReducers} from 'redux';
import items from './items';
import itemDetail from './itemDetail'
const rootReducer=combineReducers({
    items,
    itemDetail
});
export default rootReducer;




Store is created using 
const store=createStore(userData);


Provider passes store to react component
 <Provider store={store}>
    <ItemList/>
  </Provider>
  
  Need to add below function to pass store to react components as props, it alos pass the action creator as a props.
  const mapStateToProps=(state)=>{
  return {
  	itemArray:state.items,
    itemDescription:state.itemDetail
  }
}

const mapDispatchToProps=(dispatch)=>{
   return {
      clickOnItem:(description)=>dispatch(showDescription(description))
   }
}

Please go through the example and let me know if you face any issue.
      
