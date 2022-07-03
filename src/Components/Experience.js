import React from 'react';
import '../styles/Experience.css';

class Experience extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { experience } = this.props;
		console.log(experience)

		return (
			<div>
				{experience.map((exp) => {
					return (
						<div className="experience">
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
