import './App.css';
import Header from './Components/Header';
import Personal from './Components/Personal';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Skills from './Components/Skills';
import References from './Components/References';
import Contact from './Components/Contact'; 
import Photo from './Components/Photo';
import React from 'react';
import icon from './Images/add.png';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
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
			},
			experience: [],
			education: [],
			references: [],
			skills: []
		};
	}

	handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.id;
		this.setState({
			[name]: {
				...this.state[name],
				[e.target.name]: value
			}
		});
	}; 

	handlePhoto = (e) => {
		const files = e.target.files[0];
		const name = e.target.id;
		console.log(files);
		console.log(name);
		this.setState({
			[name]: {
				...this.state[name],
				[e.target.name]: URL.createObjectURL(files),
			}
		});
	};

	onSubmitTask = (e) => {
		e.preventDefault();
		const id = e.target.id;
		const name = e.target.name;

		this.setState({
			[name]: this.state[name].concat(this.state[id]),
			[id]: {
				...this.state[id],
				[name]: ''
			}
		});
	};

   print = () => { 
		window.print();
	}

	render() {
		const {
			firstName,
			lastName,
			title,
			address,
			photo,
			phone,
			email,
			description,
			university,
			degree,
			subject,
			fromYear,
			toYear,
			company,
			position,
			dateFrom,
			dateTo,
			fullName,
			refCompany,
			refPosition,
			refEmail,
			category,
			subjectSkill,
			level
		} = this.state; 

		
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
										onChange={this.handleChange}
										type="text"
										placeholder="First Name"
										required
									/>
									<input
										name="lastName"
										id="personal"
										value={lastName}
										type="text"
										onChange={this.handleChange}
										placeholder="Last Name"
										required
									/>
									<input
										name="title"
										id="personal"
										value={title}
										type="text"
										onChange={this.handleChange}
										placeholder="Title"
									/>
									<input
										name="address"
										id="personal"
										value={address}
										type="text"
										onChange={this.handleChange}
										placeholder="Address"
										required
									/>
									<input name="photo" label="photo" id="personal" value={photo} type="file" accept="image/" onChange={this.handlePhoto} />
									<input
										name="phone"
										id="personal"
										value={phone}
										type="text"
										onChange={this.handleChange}
										placeholder="Phone Number"
										required
									/>
									<input
										name="email"
										id="personal"
										value={email}
										type="email"
										onChange={this.handleChange}
										placeholder="Email"
									/>
									<textarea
										name="description"
										id="personal"
										value={description}
										type="text"
										onChange={this.handleChange}
										placeholder="About Me"
										required
									/>
								</form>
							</div>
						</div>
						<div className="educationInput">
							<h1>Education:</h1>
							<form id="edu" name="education" onSubmit={this.onSubmitTask}>
								<input
									name="university"
									id="edu"
									value={university}
									type="text"
									onChange={this.handleChange}
									placeholder="University"
								/>
								<input
									name="degree"
									id="edu"
									value={degree}
									type="text"
									onChange={this.handleChange}
									placeholder="Degree"
								/>
								<input
									name="subject"
									id="edu"
									value={subject}
									type="text"
									onChange={this.handleChange}
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
									onChange={this.handleChange}
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
									onChange={this.handleChange}
									placeholder="To (year)"
								/>
								<button type="submit">
									<img alt="add" rel="icon" src={icon} />
								</button>
							</form>
						</div>

						<div className="experienceInput">
							<h1>Experience:</h1>
							<form id="exp" name="experience" onSubmit={this.onSubmitTask}>
								<input
									name="position"
									id="exp"
									value={position}
									type="text"
									onChange={this.handleChange}
									placeholder="Position"
								/>
								<input
									name="company"
									id="exp"
									value={company}
									type="text"
									onChange={this.handleChange}
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
									onChange={this.handleChange}
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
									onChange={this.handleChange}
									placeholder="To"
								/>
								<button type="submit">
									<img alt="add" rel="icon" src={icon} />
								</button>
							</form>
						</div>

						<div className="referencesInput">
							<h1>References:</h1>
							<form id="ref" name="references" onSubmit={this.onSubmitTask}>
								<input
									name="fullName"
									id="ref"
									value={fullName}
									type="text"
									onChange={this.handleChange}
									placeholder="Full Name"
								/>
								<input
									name="refPosition"
									id="ref"
									value={refPosition}
									type="text"
									onChange={this.handleChange}
									placeholder="Position"
								/>
								<input
									name="refCompany"
									id="ref"
									value={refCompany}
									type="text"
									onChange={this.handleChange}
									placeholder="Company"
								/>
								<input
									name="refEmail"
									id="ref"
									value={refEmail}
									type="text"
									onChange={this.handleChange}
									placeholder="Email"
								/>
								<button type="submit">
									<img alt="add" rel="icon" src={icon} />
								</button>
							</form>
						</div>
						<div className="skillsInput">
							<h1>Skills:</h1>
							<form id="skill" name="skills" onSubmit={this.onSubmitTask}>
								<input
									name="category"
									id="skill"
									value={category}
									type="text"
									onChange={this.handleChange}
									placeholder="Category"
								/>
								<input
									name="subjectSkill"
									id="skill"
									value={subjectSkill}
									type="text"
									onChange={this.handleChange}
									placeholder="Subject"
								/>
								<select id="skill" name="level" value={level} onChange={this.handleChange}>
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
						<button className="pdf" type="button" value="Print" onClick={this.print}>
							Generate PDF
						</button>
					</div>
					<div className="cv">
						<div className="columnOne">
							<Photo photo={this.state.personal.photo} />
							<div className="education">
								<h4>Education</h4>
								<Education education={this.state.education} />
								<button className="educationBtn">Edit</button>
							</div>
							<div className="references">
								<h4>References</h4>
								<References references={this.state.references} />
							</div>
							<div className="contact">
								<h4>Contact</h4>
								<Contact contacts={this.state.personal} />
							</div>
						</div>

						<div className="columnTwo">
							<Personal info={this.state.personal} />
							<h4 className="workExp">Work experience</h4>
							<Experience experience={this.state.experience} />
							<h4 className="workExp">Skills</h4>
							<Skills skills={this.state.skills} />
						</div>
					</div>
				</div>
			</main>
		);
	}
}

export default App;
