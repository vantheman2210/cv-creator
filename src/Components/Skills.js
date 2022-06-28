import React from 'react';

class Skills extends React.Component {
	render() {
		return (
			<div className="skillsInput">
				<h1>Skills:</h1>
				<input type="text" placeholder="Category" />
				<input type="text" placeholder="Subject" />
				<span className="star-rating">
					<input type="radio" name="rating" value="1" />
					<input type="radio" name="rating" value="2" />
					<input type="radio" name="rating" value="3" />
					<input type="radio" name="rating" value="4" />
					<input type="radio" name="rating" value="5" />
				</span>
				<button>Add</button>
				<button>Delete</button>
			</div>
		);
	}
}
export default Skills;
