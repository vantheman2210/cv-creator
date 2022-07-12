import React from 'react';
import '../styles/Education.css';
import uniqid from 'uniqid';

const Education = (props) => {
	const { education } = props;

	return (
		<div>
			{education.map((edu) => {
				return (
					<div key={uniqid()} className="educationCV">
						<p contentEditable="true" className="degreeCV" suppressContentEditableWarning={true}>
							<b>
								{edu.degree} in {edu.subject}
							</b>
						</p>
						<p contentEditable="true" className="universityCV" suppressContentEditableWarning={true}>
							{edu.university}
						</p>
						<p contentEditable="true" className="yearCV" suppressContentEditableWarning={true}>
							{edu.fromYear} - {edu.toYear}
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default Education;

