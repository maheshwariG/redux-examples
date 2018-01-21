import React, {Component} from 'react';

class ItemDescription extends Component {
	render() {
		return (
			<h5>{this.props.description}</h5>
		)
	}
}
export default ItemDescription;