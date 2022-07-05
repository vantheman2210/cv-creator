import React from 'react';
import '../styles/Personal.css';

class Personal extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { firstName, lastName, title, description } = this.props.info; 
		
		return (
			<main>
				<div className="headerPersonal">
					<div className="nameTitle">
						<h1>
							{firstName} {lastName} 
							
						</h1> 
						<h4>{title}</h4>
					</div>  
					<div className="about">
					<h4>About me </h4>
					<div >{description}</div> 
					</div>
				</div> 
			</main>
		);
	}
}
export default Personal;
