import React, { useContext } from 'react'
import noteContext from '../context/note/noteContext';

const About = () => {
  const context= useContext(noteContext)
  const {mode}=context;
  
  return (
		<div
			className={`navbar-brand  text-${mode === "blue" ? "light" : "black"}`}
      style={{display:'flex',alignItems:"center",padding:'3rem'}}>
			This app is a notepad where you can write your notes online
		</div>
	);
}

export default About