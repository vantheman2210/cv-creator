import React from 'react';
import '../styles/Education.css';

class Education extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { education } = this.props;
		return (
			<div>
				{education.map((edu) => {
					return (
						<div className="educationCV">
							<h4 className="degreeCV">
								{edu.degree} in {edu.subject}
							</h4>  
							<p className="universityCV">{edu.university}</p>
							<p className="yearCV">
								{edu.fromYear} - {edu.toYear}
							</p>
						</div>
					);
				})}
			</div>
		);
	}
}
export default Education;
