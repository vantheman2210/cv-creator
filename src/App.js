import './App.css';
import './styles/Header.css';
import './styles/Personal.css';
import './styles/Experience.css';
import './styles/Education.css';
import './styles/References.css';
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

			firstName: '',
			lastName: '',
			title: '',
			address: '',
			phone: 0,
			email: '',
			description: '',
			university: '',
			city: '',
			degree: '',
			subject: '',
			position: '',
			company: '',
			fullName: '',
			refPosition: '',
			refCompany: '',
			refEmail: '',
			category: '',
			subjectSkill: ''
		};
	}

	handleChange = (e) => {
		const value = e.target.value;
		this.setState({
			[e.target.name]: value
		});
	};

	onSubmitTask = (e) => {
		e.preventDefault();

		console.log(this.state);
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
			city,
			degree,
			subject,
			company,
			position,
			fullName,
			refCompany,
			refPosition,
			refEmail,
			category,
			subjectSkill
		} = this.state;
		return ( 
			<main>
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
					<input name="title" value={title} type="text" onChange={this.handleChange} placeholder="Title" />
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
					<input name="email" value={email} type="email" onChange={this.handleChange} placeholder="Email" />
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
					<form onSubmit={this.onSubmitTask}>
						<input
							name="university"
							value={university}
							type="text"
							onChange={this.handleChange}
							placeholder="University"
						/>
						<input name="city" value={city} type="text" onChange={this.handleChange} placeholder="City" />
						<input
							name="degree"
							value={degree}
							type="text"
							onChange={this.handleChange}
							placeholder="Degree"
						/>
						<input
							name="subject"
							value={subject}
							type="text"
							onChange={this.handleChange}
							placeholder="Subject"
						/>
						<input type="date" placeholder="From" />
						<input type="date" placeholder="To" />
						<button type="submit">Add</button>
						<button>Delete</button>
					</form>
				</div>
				<div className="experienceInput">
					<h1>Experience:</h1>
					<form>
						<input
							name="position"
							value={position}
							type="text"
							onChange={this.handleChange}
							placeholder="Position"
						/>
						<input
							name="company"
							value={company}
							type="text"
							onChange={this.handleChange}
							placeholder="Company"
						/>
						<input type="date" placeholder="From" />
						<input type="date" placeholder="To" />
					</form>
					<button>Add</button>
					<button>Delete</button>
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
			<div className='cv'> 
				<Personal firstName={firstName}/>
			</div>
			</main>
		);
	}
}

export default App;
