import React from "react";  
import '../styles/Header.css';

class Header extends React.Component { 
  render()  {  
    return (
    <nav className="header"> 
      <h3>Logo</h3> 
      <h1 className="pageName">CV Creator</h1>
    </nav> 
    )
  }
}
export default Header;