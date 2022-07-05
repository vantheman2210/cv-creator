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
								<p>{exp.dateFrom}</p> 
                <p>-</p>
								<p>{exp.dateTo}</p>
							</div>
							<div>
								<p>{exp.position}</p>
								<p>{exp.company}</p>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
export default Experience;
