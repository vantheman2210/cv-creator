import React from "react"; 
import Personal from "./Personal";

class CV extends React.Component {  
  constructor(props) { 
    super(props);
  }
  render() {
    return (  
     
      <main className="CV">
      <header className="header"> 
        <h3 onClick={() => [console.log(this.props)]}>Image</h3>
        <h1>Name<h5>Title</h5></h1> 
        
      </header> 
      <section> 
        <div> 
          <div>Education</div> 
          <div>References</div> 
          <div>Contact</div>
        </div> 
        <div>About me</div> 
        <div>Work Experience</div> 
        <div>Skills</div>
      </section> 
      </main>
    )
  }
} 

export default CV;