import React from "react"; 
import '../styles/Education.css';

class Education extends React.Component { 
  constructor(props) {
		super(props); 
    console.log(this.props)
	}

	render() {
		const { university, degree, subject, fromYear, toYear } = this.props.info;
		return (
			<div className="education">
				<h4 className="degree">{degree} {subject}</h4>  
        <p className="year">{fromYear} - {toYear}</p>
        <h5 className="university">{university}</h5>
			</div>
		);
	}
}
export default Education;