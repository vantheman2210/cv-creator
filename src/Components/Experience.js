import React from "react"; 


class Experience extends React.Component { 
  render()  {  
    return (
    <div className="experienceInput">  
      <h1>Experience:</h1>
      <input type="text" placeholder="Position"></input> 
      <input type="text" placeholder="Company"></input> 
      <input type="text" placeholder="City"></input> 
      <input type="date" placeholder="From"></input>  
      <input type="date" placeholder="To"></input>  
      <button>Add</button>  
      <button>Delete</button> 
    </div>
    )
  }
}
export default Experience;