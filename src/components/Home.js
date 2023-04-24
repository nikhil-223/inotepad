import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/note/noteContext";
import Addnote from "./Addnote";
import Mynotes from "./Mynotes";

const Home = () => {
	const context = useContext(noteContext);
	const { getNotes } = context;
	let history = useNavigate();

	useEffect(() => {
		if (localStorage.getItem("token")) {
			getNotes();
		} else {
			history("/login");
		}
		// eslint-disable-next-line
	}, []);

	return (
		  <div className="home-inner">
			<Addnote />
			<Mynotes />
			</div>
	);
};

export default Home;
