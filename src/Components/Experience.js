import React from 'react';
import '../styles/Experience.css';
import uniqid from 'uniqid';

const Experience = (props) => {
	const { experience } = props;

	return (
		<div className="experienceDiv">
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
};

export default Experience;
