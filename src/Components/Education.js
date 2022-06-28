import React from "react"; 


class Education extends React.Component { 
  render()  {  
    return (
    <div className="educationInput">  
      <h1>Education:</h1>
      <input type="text" placeholder="University"></input> 
      <input type="text" placeholder="City"></input> 
      <input type="text" placeholder="Degree"></input> 
      <input type="text" placeholder="Subject"></input>  
      <input type="date" placeholder="From"></input>  
      <input type="date" placeholder="To"></input> 
      <button>Add</button>  
      <button>Delete</button> 
    </div>
    )
  }
}
export default Education;