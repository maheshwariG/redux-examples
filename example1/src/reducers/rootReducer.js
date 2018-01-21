import {combineReducers} from 'redux';
import items from './items';
import itemDetail from './itemDetail'
const rootReducer=combineReducers({
    items,
    itemDetail
});
export default rootReducer;