import React from 'react';
import '../styles/Photo.css';

const Photo = (props) => {
	const { photo } = props;

	return (
		<div
			className="photo"
			accept="image/png, image/gif, image/jpeg, image/jpg"
			style={{
				backgroundImage: 'url(' + photo + ')'
			}}
		/>
	);
};

export default Photo;
