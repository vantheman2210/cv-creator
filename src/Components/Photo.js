import React from 'react';
import '../styles/Photo.css';

class Photo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { photo } = this.props;
		console.log(photo);

		return (
			<div
				className="photo"
				style={{
					backgroundImage: 'url(' + photo + ')'
				}}
			/>
		);
	}
}
export default Photo;
