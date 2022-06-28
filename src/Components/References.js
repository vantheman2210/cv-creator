import React from "react"; 


class References extends React.Component { 
  render()  {  
    return (
    <div className="referencesInput">  
      <h1>References:</h1>
      <input type="text" placeholder="Full Name"></input> 
      <input type="text" placeholder="Position"></input> 
      <input type="text" placeholder="Company"></input> 
      <input type="text" placeholder="Email"></input>  
      <input type="date" placeholder="Phone"></input>  
      <button>Add</button>  
      <button>Delete</button> 
    </div>
    )
  }
}
export default References;