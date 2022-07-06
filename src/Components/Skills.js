import React from 'react';
import uniqid from 'uniqid'; 
import '../styles/Skills.css';

class Skills extends React.Component {
	constructor(props) {
		super(props);
	}

	editSkill = (e) => {
		console.log(e.currentTarget.id);
	};
	render() {
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
	}
}
export default Skills;
