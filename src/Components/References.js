import React from 'react';
import '../styles/References.css';

class References extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { experience } = this.props;
		console.log(experience);

		return (
			<div>
				{experience.map((exp) => {
					return (
						<div className="referenceCV">
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
export default References;
