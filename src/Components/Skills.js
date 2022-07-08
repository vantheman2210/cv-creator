import React from 'react';
import uniqid from 'uniqid';
import '../styles/Skills.css';

const Skills = (props) => {
	const { skills } = this.props;

	return (
		<div className="skillsDiv">
			{skills.map((skill) => {
				return (
					<div key={uniqid()} className="skillsCV">
						<div>
							<p contentEditable="true" className="categoryCV">
								{skill.category}:
							</p>
							<p contentEditable="true">{skill.subjectSkill}</p>
						</div>
						<p contentEditable="true" className="levelCV">
							{skill.level}
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default Skills;
