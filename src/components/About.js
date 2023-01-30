import React, {useContext, useEffect} from 'react'
import noteContext from '../context/note/noteContext'

const About = () => {
  const a= useContext(noteContext)
  useEffect(() => {
    a.update();
  })
  return (
    <div>my name is {a.state.name} and i am in class {a.state.class}</div>
  )
}

export default About