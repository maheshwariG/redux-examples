import React, { Component } from 'react';
import {connect} from 'react-redux';
import ItemDescription from './ItemDescription';
import showDescription from '../actions/items';
class ItemList extends Component {
  render() {
    return (
      <div>
	      <ul>
            {  
            	this.props.itemArray.map((item)=>(
                 <li onClick={()=>this.props.clickOnItem(item)} key={item.id}>{item.name}</li>
              ))
            }
	     </ul>
       <hr/>
       <ItemDescription description={this.props.itemDescription}/>
      </div>
    )
  }
}
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
export default connect(mapStateToProps,mapDispatchToProps)(ItemList);