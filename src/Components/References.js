import React from 'react';
import '../styles/References.css';
import uniqid from 'uniqid';

const References = (props) => {
	const { references } = props;

	return (
		<div>
			{[references].map((ref) => {
				return (
					<div key={uniqid()} className="referenceCV">
						<p contentEditable="true" suppressContentEditableWarning={true}>
							<b>{ref.fullName}</b>
						</p>

						<div className="positionCompany">
							<p contentEditable="true" suppressContentEditableWarning={true}>{ref.refPosition}</p>
							<p contentEditable="true" suppressContentEditableWarning={true}>{'|' + ref.refCompany}</p>
						</div>
						<p contentEditable="true" className="refEmailCv" suppressContentEditableWarning={true}>
							{ref.refEmail}
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default References;
