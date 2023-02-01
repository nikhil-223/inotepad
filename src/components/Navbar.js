import React ,{useContext} from "react";
import { Link, useLocation } from "react-router-dom";
import noteContext from "../context/note/noteContext";
import "../css/navbar.css";

const Navbar = () => {
	const context = useContext(noteContext)
	const{changeMode,mode}= context;
	 let location = useLocation();
	return (
		<nav className={`navbar navbar-expand-lg bg-${mode}`} data-bs-theme="dark">
			<div className="container-fluid">
				<a className= {`navbar-brand  text-${
							mode === "blue" ? "light" : "black"
						}`} href="/">
					INoteBook
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon "></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link
								className={` nav-link ${
									location.pathname === "/home" ? "active" : ""
								} text-${mode === "blue" ? "light" : "black"}`}
								aria-current="page"
								to="/home">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className={` nav-link ${
									location.pathname === "/about" ? "active" : ""
								} text-${mode === "blue" ? "light" : "black"}`}
								to="/about">
								About
							</Link>
						</li>
					</ul>
					<form className="d-flex" role="search">
						<div
							className={`pallete bg-${mode === "blue" ? "light" : "blue"}`}
							onClick={changeMode}></div>
					</form>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
