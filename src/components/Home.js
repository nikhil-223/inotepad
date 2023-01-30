import React, { useContext } from "react";
import Addnote from './Addnote'
import Alert from "./Alert";
import Notes from "./Notes";

const Home = () => {
  
  return (
    <>
    <Alert/>
    <Addnote/>
    <Notes/>
    </>
  )
}

export default Home