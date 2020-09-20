import React from 'react';
import './App.css';
import Colorpick from './components/colorpick/Colorpick'
import NavBar from './components/navbar/NavBar'
import FootBar from './components/footbar/FootBar'



function App() {

  return (
   <div> 
    <NavBar />
    <Colorpick />
    <FootBar />
  </div>
  )
}

export default App;
