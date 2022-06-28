import React from "react"; 


class Personal extends React.Component { 
  render()  {  
    return (
    <div className="personalInput">  
      <h1>Personal Information:</h1>
      <input type="text" placeholder="First Name"></input> 
      <input type="text" placeholder="Last Name"></input> 
      <input type="text" placeholder="Title"></input> 
      <input type="text" placeholder="Address"></input>  
      <input type="file" accept="image/" placeholder="Address"></input> 
      <input type="text" placeholder="Phone Number"></input> 
      <input type="email" placeholder="Email"></input> 
      <textarea type="text" placeholder="Description"></textarea>
    </div>
    )
  }
}
export default Personal;