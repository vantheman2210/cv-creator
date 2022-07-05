import React from 'react';
import '../styles/Contact.css';

class Contact extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { email, phone, address } = this.props.contacts;

		return (
			<div className="contactsCV">
				<div> 
					<p> 
						<b>Phone</b>
					</p>
					<p>{phone}</p>
				</div>
				<div>
					<p>
						<b>Email</b>
					</p>
					<p>{email}</p>
				</div>
				<div>
					<p>
						<b>Address</b>
					</p>
					<p>{address}</p>
				</div>
			</div>
		);
	}
}
export default Contact;
