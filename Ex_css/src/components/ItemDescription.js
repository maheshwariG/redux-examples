import React, {Component} from 'react';
require('../scss/App.css');
class ItemDescription extends Component {
	render() {
		return (
			<h6>{this.props.description}</h6>
		)
	}
}
export default ItemDescription;