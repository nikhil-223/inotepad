import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoteState from "./context/note/noteState";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Alert from "./components/Alert"
import React from "react";
import Mynotes from "./components/Mynotes";




function App() {

  return (
		<BrowserRouter>
			<NoteState>
				<Navbar />
				<div className="page-image">
				<Alert/>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/home" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/mynotes" element={<Mynotes />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
				</Routes>
				</div>
			</NoteState>
		</BrowserRouter>
	);
}

export default App;
