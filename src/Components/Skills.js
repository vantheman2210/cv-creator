import React from 'react';
import uniqid from 'uniqid';
import '../styles/Skills.css';

const Skills = (props) => {
	const { skills } = props;

	return (
		<div className="skillsDiv">
			{skills.map((skill) => {
				return (
					<div key={uniqid()} className="skillsCV">
						<div>
							<p contentEditable="true" suppressContentEditableWarning={true} className="categoryCV">
								{skill.category}
							</p>
							<p contentEditable="true" suppressContentEditableWarning={true}>{skill.subjectSkill}</p>
						</div>
						<p contentEditable="true" suppressContentEditableWarning={true} className="levelCV">
							{skill.level}
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default Skills;
