import React from 'react';
import '../styles/Photo.css';

class Photo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { photo } = this.props;
		

		return (
			<div
				className="photo"
				accept="image/png, image/gif, image/jpeg, image/jpg"
				style={{
					backgroundImage: 'url(' + photo + ')'
				}}
			/>
		);
	}
}
export default Photo;
