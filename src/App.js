import './App.css';
import Header from './Components/Header';
import Personal from './Components/Personal';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Skills from './Components/Skills';
import References from './Components/References';
import Contact from './Components/Contact';
import Photo from './Components/Photo';
import React, { useEffect, useState } from 'react';
import icon from './Images/add.png';

const initialState = {
	personal: {
		firstName: '',
		lastName: '',
		title: '',
		address: '',
		photo: {},
		phone: '',
		email: '',
		description: ''
	},
	edu: {
		university: '',
		degree: '',
		subject: '',
		fromYear: '',
		toYear: ''
	},
	exp: {
		position: '',
		company: '',
		dateFrom: '',
		dateTo: ''
	},
	ref: {
		fullName: '',
		refPosition: '',
		refCompany: '',
		refEmail: ''
	},
	skill: {
		category: '',
		subjectSkill: '',
		level: ''
	}
}

const useApp = (props) => {
	const [ formData, setFormData ] = useState(initialState);

	const [ dataExport, setDataExport ] = useState({
		edu: [],
		exp: [],
		ref: [],
		skill: []
	});

	const changeOnClick = (e) => {
		const value = e.target.value; 
		console.log(e.target.id, e.target.name)
		setFormData((values) => ({
			...formData,
			[e.target.id]: {
				...values[e.target.id],
				[e.target.name]: value
			} 
		}));
	};

	const onSubmitTask = (e) => {
		e.preventDefault();
		const id = e.target.id;
		const name = e.target.name; 
		console.log(id, name)
		setDataExport((values) => ({
			...values,
			[id]: dataExport[id].concat(formData[id])
		})); 
		//setFormData(initialState)
		e.target.reset()
	};

	const print = () => {
		window.print();
	} 


	const handlePhoto = (e) => {
		const files = e.target.files[0];
		const name = e.target.id;
		console.log(files);
		console.log(name);
		setFormData((values) => ({
			...formData,
			[e.target.id]: {
				...values[e.target.id],
				[e.target.name]: URL.createObjectURL(files)
			} 
		}));
	}; 
	

	const { firstName, lastName, title, address, description, photo, phone, email } = formData;

	const { university, degree, subject, fromYear, toYear } = formData;

	const { position, company, dateFrom, dateTo } = formData;

	const { fullName, refPosition, refCompany, refEmail } = formData;

	const { category, subjectSkill, level } = formData;

	return (
		<main>
			<Header />
			<div className="container">
				<div className="forms">
					<div className="personalInput">
						<h1>Personal Information:</h1>
						<div className="personalForm">
							<form>
								<input
									name="firstName"
									id="personal"
									value={firstName}
									onChange={changeOnClick}
									type="text"
									placeholder="First Name"
									required
								/>
								<input
									name="lastName"
									id="personal"
									value={lastName}
									type="text"
									onChange={changeOnClick}
									placeholder="Last Name"
									required
								/>
								<input
									name="title"
									id="personal"
									value={title}
									type="text"
									onChange={changeOnClick}
									placeholder="Title"
								/> 
								<input
									name="photo"
									label="photo"
									id="personal"
									value={photo}
									type="file"
									accept="image/"
									onChange={handlePhoto}
								/>
								<input
									name="address"
									id="personal"
									value={address}
									type="text"
									onChange={changeOnClick}
									placeholder="Address"
									required
								/>

								<input
									name="phone"
									id="personal"
									value={phone}
									type="text"
									onChange={changeOnClick}
									placeholder="Phone Number"
									required
								/>
								<input
									name="email"
									id="personal"
									value={email}
									type="email"
									onChange={changeOnClick}
									placeholder="Email"
								/>
								<textarea
									name="description"
									id="personal"
									value={description}
									type="text"
									onChange={changeOnClick}
									placeholder="About Me"
									required
								/>
							</form>
						</div>
					</div>
					<div className="educationInput">
						<h1>Education:</h1>
						<form className="formEdu" id="edu" name="education" onSubmit={onSubmitTask}>
							<input
								name="university"
								id="edu"
								value={university}
								type="text"
								onChange={changeOnClick}
								placeholder="University"
							/>
							<input
								name="degree"
								id="edu"
								value={degree}
								type="text"
								onChange={changeOnClick}
								placeholder="Degree"
							/>
							<input
								name="subject"
								id="edu"
								value={subject}
								type="text"
								onChange={changeOnClick}
								placeholder="Subject"
							/>
							<input
								name="fromYear"
								id="edu"
								value={fromYear}
								type="number"
								min="1900"
								max="2099"
								step="1"
								onChange={changeOnClick}
								placeholder="From (year)"
							/>
							<input
								name="toYear"
								id="edu"
								value={toYear}
								type="number"
								min="1900"
								max="2099"
								step="1"
								onChange={changeOnClick}
								placeholder="To (year)"
							/>
							<button type="submit">
								<img alt="add" rel="icon" src={icon} />
							</button>
						</form>
					</div>

					<div className="experienceInput">
						<h1>Experience:</h1>
						<form id="exp" name="experience" onSubmit={onSubmitTask}>
							<input
								name="position"
								id="exp"
								value={position}
								type="text"
								onChange={changeOnClick}
								placeholder="Position"
							/>
							<input
								name="company"
								id="exp"
								value={company}
								type="text"
								onChange={changeOnClick}
								placeholder="Company"
							/>
							<input
								name="dateFrom"
								id="exp"
								value={dateFrom}
								type="number"
								min="1900"
								max="2099"
								step="1"
								onChange={changeOnClick}
								placeholder="From"
							/>
							<input
								name="dateTo"
								id="exp"
								value={dateTo}
								type="number"
								min="1900"
								max="2099"
								step="1"
								onChange={changeOnClick}
								placeholder="To"
							/>
							<button type="submit">
								<img alt="add" rel="icon" src={icon} />
							</button>
						</form>
					</div>

					<div className="referencesInput">
						<h1>References:</h1>
						<form id="ref" name="references" onSubmit={onSubmitTask}>
							<input
								name="fullName"
								id="ref"
								value={fullName}
								type="text"
								onChange={changeOnClick}
								placeholder="Full Name"
							/>
							<input
								name="refPosition"
								id="ref"
								value={refPosition}
								type="text"
								onChange={changeOnClick}
								placeholder="Position"
							/>
							<input
								name="refCompany"
								id="ref"
								value={refCompany}
								type="text"
								onChange={changeOnClick}
								placeholder="Company"
							/>
							<input
								name="refEmail"
								id="ref"
								value={refEmail}
								type="text"
								onChange={changeOnClick}
								placeholder="Email"
							/>
							<button type="submit">
								<img alt="add" rel="icon" src={icon} />
							</button>
						</form>
					</div>
					<div className="skillsInput">
						<h1>Skills:</h1>
						<form id="skill" name="skills" onSubmit={onSubmitTask}>
							<input
								name="category"
								id="skill"
								value={category}
								type="text"
								onChange={changeOnClick}
								placeholder="Category"
							/>
							<input
								name="subjectSkill"
								id="skill"
								value={subjectSkill}
								type="text"
								onChange={changeOnClick}
								placeholder="Subject"
							/>
							<select id="skill" name="level" value={level} onChange={changeOnClick}>
								<option value={level} type="text">
									Level 1
								</option>
								<option value={level} type="text">
									Level 2
								</option>
								<option value={level} type="text">
									Level 3
								</option>
								<option value={level} type="text">
									Level 4
								</option>
								<option value={level} type="text">
									Level 5
								</option>
							</select>
							<button type="submit">
								<img alt="add" rel="icon" src={icon} />
							</button>
						</form>
					</div>
					<button className="pdf" type="button" value="Print" onClick={print}>
						Generate PDF
					</button>
				</div>
				<div className="cv">
					<div className="columnOne">
						<Photo photo={formData.personal.photo} />
						<div className="education">
							<h4>Education</h4>
							<Education education={dataExport.edu} />
							<button className="educationBtn">Edit</button>
						</div>
						<div className="references">
							<h4>References</h4>
							<References references={dataExport.ref} />
						</div>
						<div className="contact">
							<h4>Contact</h4>
							<Contact contacts={formData.personal} />
						</div>
					</div>

					<div className="columnTwo">
						<Personal personal={formData.personal} />
						<h4 className="workExp">Work experience</h4>
						<Experience experience={dataExport.exp} />
						<h4 className="workExp">Skills</h4>
						<Skills skills={dataExport.skill} />
					</div>
				</div>
			</div>
		</main>
	);
};

export default useApp;

