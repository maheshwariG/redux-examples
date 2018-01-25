import React, { Component } from 'react';
import {connect} from 'react-redux';
import ItemDescription from './ItemDescription';
import showDescription from '../actions/items';
import ItemId from './ItemId';
import ReactDOM from 'react-dom';
class ItemList extends Component {
  constructor(){
    super();
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(){
    console.log(this.refs.wassup);
    let mountNode = ReactDOM.findDOMNode(this.refs.wassup);
    ReactDOM.unmountComponentAtNode(mountNode);
  }
  render() {
    return (
      <div ref="wassup" className="conatiner">
	      <ul>
            {  
            	this.props.itemArray.map((item)=>(
                 <li onClick={()=>this.handleClick()} key={item.id}>{item.name}</li>
              ))
            }
	     </ul>
       <hr/>
       <h5>Govind</h5>
       <ItemDescription description={this.props.itemDescription}/>
       <ItemId/>
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