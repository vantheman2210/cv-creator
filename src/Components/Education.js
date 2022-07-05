import React from 'react';
import '../styles/Education.css'; 
import uniqid from 'uniqid';

class Education extends React.Component {
	constructor(props) {
		super(props);
	} 

	editEducation = (edu) => { 
		return edu.degree = '' 
		
	}

	render() {
		const { education } = this.props;
		return (
			<div>
				{education.map((edu) => {
					return (
						<div key={uniqid()} className="educationCV">
							<p className="degreeCV"><b>
								{edu.degree} in {edu.subject}
								</b></p>  
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
