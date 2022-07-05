import React from 'react'; 
import uniqid from 'uniqid';

class Skills extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { skills } = this.props;
		
		return (
			<div  className="skillsDiv">
				{skills.map((skill) => {
					return (
						<div key={uniqid()} className="skillsCV">
							<div>
								<p className='categoryCV'>
									{skill.category}:
								</p>
								<p>{skill.subjectSkill}</p>
							</div>
							<p className='levelCV'>{skill.level}</p>
						</div>
					);
				})}
			</div>
		);
	}
}
export default Skills;
