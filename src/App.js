import './App.css';

import './styles/Skills.css';
import './styles/CV.css';
import Header from './Components/Header';
import Personal from './Components/Personal';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Skills from './Components/Skills';
import References from './Components/References';
import CV from './Components/CV';
import React from 'react';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			personal: {
				firstName: 'John',
				lastName: 'Doe',
				title: 'Senior Developer',
				address: '',
				phone: 0,
				email: '',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada risus at euismod pharetra. Sed tristique consequat elit, at consequat velit pellentesque et. Nullam est felis, bibendum nec lectus ac, dignissim blandit magna. Donec imperdiet neque et augue dapibus bibendum. Phasellus ullamcorper augue felis, et vehicula lacus vulputate id. Vivamus.'
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
				subjectSkill: ''
			},
			experience: [],
			education: []
		};
	}

	handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.id;
		console.log(name);
		this.setState({
			[name]: {
				...this.state[name],
				[e.target.name]: value
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

	render() {
		const {
			firstName,
			lastName,
			title,
			address,
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
			subjectSkill
		} = this.state;
		return (
			<main>
				<Header />
				<div className="personalInput">
					<h1>Personal Information:</h1>
					<form onSubmit={this.onSubmitTask}>
						<input
							name="firstName"
							value={firstName}
							onChange={this.handleChange}
							type="text"
							placeholder="First Name"
							required
						/>
						<input
							name="lastName"
							value={lastName}
							type="text"
							onChange={this.handleChange}
							placeholder="Last Name"
							required
						/>
						<input
							name="title"
							value={title}
							type="text"
							onChange={this.handleChange}
							placeholder="Title"
						/>
						<input
							name="address"
							value={address}
							type="text"
							onChange={this.handleChange}
							placeholder="Address"
							required
						/>
						<input type="file" accept="image/" />
						<input
							name="phone"
							value={phone}
							type="text"
							onChange={this.handleChange}
							placeholder="Phone Number"
							required
						/>
						<input
							name="email"
							value={email}
							type="email"
							onChange={this.handleChange}
							placeholder="Email"
						/>
						<textarea
							name="description"
							value={description}
							type="text"
							onChange={this.handleChange}
							placeholder="Description"
							required
						/>
						<button type="submit">Add</button>
						<button>Delete</button>
					</form>
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
							<button type="submit">Add</button>
							<button>Delete</button>
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
							<button type="submit">Add</button>
							<button>Delete</button>
						</form>
					</div>

					<div className="referencesInput">
						<h1>References:</h1>
						<form>
							<input
								name="fullName"
								value={fullName}
								type="text"
								onChange={this.handleChange}
								placeholder="Full Name"
							/>
							<input
								name="refPosition"
								value={refPosition}
								type="text"
								onChange={this.handleChange}
								placeholder="Position"
							/>
							<input
								name="refCompany"
								value={refCompany}
								type="text"
								onChange={this.handleChange}
								placeholder="Company"
							/>
							<input
								name="refEmail"
								value={refEmail}
								type="text"
								onChange={this.handleChange}
								placeholder="refEmail"
							/>
							<input type="date" placeholder="email" />
						</form>
						<button>Add</button>
						<button>Delete</button>
					</div>
					<div className="skillsInput">
						<h1>Skills:</h1>
						<input
							name="category"
							value={category}
							type="text"
							onChange={this.handleChange}
							placeholder="Category"
						/>
						<input
							name="subjectSkill"
							value={subjectSkill}
							type="text"
							onChange={this.handleChange}
							placeholder="Subject"
						/>
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
				</div>
				<div className="cv">
					<div className="columnOne">
						<div className="photo">Image</div>
						<div className="education">
							<h4>Education</h4>
							<Education education={this.state.education} />
						</div> 
						<div className="references">
							<h4>References</h4>
							<References education={this.state.education} />
						</div>
					</div>

					<div className="columnTwo">
						<Personal info={this.state.personal} />
						<h4 className="workExp">Work experience</h4>
						<Experience experience={this.state.experience} />
					</div>
				</div>
			</main>
		);
	}
}

export default App;
