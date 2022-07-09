import React from 'react';
import '../styles/Education.css';
import uniqid from 'uniqid';

const Education = (props) => {
	const { education } = props; 
	console.log(props)
	return (
		<div>
			{[education].map((edu) => {
				return (
					<div key={uniqid()} className="educationCV" >
						<p contentEditable="true" suppressContentEditableWarning={true} className="degreeCV">
							<b>
								{edu.degree} in {edu.subject}
							</b>
						</p>
						<p contentEditable="true" suppressContentEditableWarning={true} className="universityCV">
							{edu.university}
						</p>
						<p contentEditable="true" suppressContentEditableWarning={true} className="yearCV">
							{edu.fromYear} - {edu.toYear}
						</p>
					</div>
				);
			})}
		</div>
	);
};
export default Education;
