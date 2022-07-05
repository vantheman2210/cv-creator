import React from 'react';
import '../styles/References.css';
import uniqid from 'uniqid';

class References extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { references } = this.props;
		
		return (
			<div >
				{references.map((ref) => {
					return (
						<div key={uniqid()} className="referenceCV">
							<p><b>{ref.fullName}</b></p>

							<div className='positionCompany'>
								<p>{ref.refPosition}</p>
								<p>{'|' + ref.refCompany}</p>
							</div>
							<p className='refEmailCv'>{ref.refEmail}</p>
						</div>
					);
				})}
			</div>
		);
	}
}
export default References;
