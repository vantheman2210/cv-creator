import React from 'react';
import '../styles/Experience.css';
import uniqid from 'uniqid';

class Experience extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { experience } = this.props;
		

		return (
			<div   className='experienceDiv'>
				{experience.map((exp) => {
					return (
						<div key={uniqid()} className="experienceCV">
							<div className="years">
								<p contentEditable="true">{exp.dateFrom}</p> 
                <p>-</p>
								<p contentEditable="true">{exp.dateTo}</p>
							</div>
							<div>
								<p contentEditable="true">{exp.position}</p>
								<p contentEditable="true">{exp.company}</p>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
export default Experience;
