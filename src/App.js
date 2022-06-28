import './App.css'; 
import './styles/Header.css'; 
import './styles/Personal.css'; 
import './styles/Experience.css'; 
import './styles/Education.css'; 
import './styles/References.css'; 
import './styles/Skills.css';
import Header from './Components/Header'; 
import Personal from './Components/Personal';
import Experience from './Components/Experience'; 
import Education from './Components/Education'; 
import Skills  from './Components/Skills'; 
import References from './Components/References';
import React from 'react';

class App extends React.Component { 

  render() {
  return ( 
    <main>
    <div>
   <Header /> 
   <Personal /> 
   <Experience /> 
   <Education /> 
   <References /> 
   <Skills />
   </div>  
   <div className="cvOutput">
    <header></header>
   </div>
   </main>
  )
  }
}

export default App;
