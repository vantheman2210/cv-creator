import React from 'react';

class Personal extends React.Component {
	constructor (props) { 
		super(props) 
		console.log(this.props)
	} 

	render () { 
		return ( 
			<div>
				<h3>{this.props.firstName}</h3> 
				<h3></h3> 
				<h3></h3> 
				<h3></h3> 
				<h3></h3> 
				<h3></h3> 
				<h3></h3>
			</div>
		)
	}
}
export default Personal;
