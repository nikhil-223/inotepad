import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import noteContext from "../context/note/noteContext";
import { BiMenu } from "react-icons/bi";
import "../css/navbar.css";

const Navbar = () => {
	const context = useContext(noteContext);
	const { changeMode, mode } = context;
	const history = useNavigate;
	let location = useLocation();

	const logOut = () => {
		localStorage.removeItem("token");
		history("/login");
	};


	// handle menu navigation
	const handleMenuToggle = () => {
		const menuVisible = document.querySelector(".navbar-items").style.display; 

		if (menuVisible === "none") {
			document.querySelector(".navbar-items").style.display = "flex";
		} else {
			document.querySelector(".navbar-items").style.display = "none";
		}
	};
	return (
		<nav
			className={`navbar navbar-expand-lg mynavbar bg-${mode}`}
			data-bs-theme="dark">
			<div className="d-flex align-items-center justify-content-between mx-0 w-100 px-3">
				<div
					className={`navbar-brand  text-${
						mode === "blue" ? "light" : "black"
					}`}>
					INoteBook
				</div>
				<div className=" align-items-center w-100 navbar-items">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-links">
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
						<li className="nav-item">
							<Link
								className={` nav-link ${
									location.pathname === "/about" ? "active" : ""
								} text-${mode === "blue" ? "light" : "black"}`}
								to="/mynotes">
								My Notes
							</Link>
						</li>
					</ul>
					<form className="d-flex" role="search">
						<div
							className={`pallete bg-${mode === "blue" ? "light" : "blue"}`}
							onClick={changeMode}></div>

						{!localStorage.getItem("token") ? (
							<>
								<Link
									style={{ height: "2rem", paddingTop: "0.2rem" }}
									className="btnc login btn btn-primary mx-2"
									to="/login"
									role="button">
									Log In
								</Link>
								<Link
									style={{ height: "2rem", paddingTop: "0.2rem" }}
									className=" btnc signup btn btn-primary mx-2"
									to="/signup"
									role="button">
									Sign Up
								</Link>
							</>
						) : (
							<Link
								style={{ height: "2rem", paddingTop: "0.2rem", margin: "0" }}
								className="btnc btn btn-primary mx-2"
								to="/signup"
								role="button"
								onClick={logOut}>
								Log Out
							</Link>
						)}
					</form>
				</div>
				<div
					className={`nav-menu-toggle text-${
						mode === "blue" ? "light" : "black"
					}`}>
					<BiMenu size={20} onClick={handleMenuToggle} />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
