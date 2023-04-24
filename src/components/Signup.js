import React, { useContext, useState } from "react";
import noteContext from "../context/note/noteContext";
import { Link } from "react-router-dom";

const Signup = () => {
	const [user, setuser] = useState({ name: "", email: "", password: "",confirmpass:"" });
	const context = useContext(noteContext);
	const { mode, SignUp, showalert} = context;
	const handleSignUp = () => {
		if(user.confirmpass===user.password){
			SignUp(user.name, user.email, user.password);
		}
		else{
			showalert({type:"danger",message:"password did not match"})			
		}
		
	};
	const handleChange = (e) => {
		e.preventDefault();
		setuser({ ...user, [e.target.name]: e.target.value });
	};
	return (
		<>
			<div className={`page text-${mode === "blue" ? "light" : "black"}`}>
				<div className="page-container">
					<h3>Sign Up</h3>
					<div className="mb-3 row my-3">
						<label htmlFor="name" className=" col-form-label">
							Name
						</label>
						<div className="col">
							<input
								type="text"
								className={`form-control bg-${mode} text-${
									mode === "blue" ? "light" : "black"
								}`}
								id="name"
								name="name"
								onChange={handleChange}
							/>
						</div>
					</div>
					<div className="mb-3 row my-3">
						<label htmlFor="staticEmail" className=" col-form-label">
							Email
						</label>
						<div className="col">
							<input
								type="email"
								className={`form-control bg-${mode} text-${
									mode === "blue" ? "light" : "black"
								}`}
								id="inputEmail"
								name="email"
								onChange={handleChange}
							/>
						</div>
					</div>
					<div className="mb-3 ">
						<label htmlFor="inputPassword" className=" col-form-label">
							Password
						</label>
						<div className="col">
							<input
								type="password"
								className={`form-control bg-${mode} text-${
									mode === "blue" ? "light" : "black"
								}`}
								id="inputPassword"
								name="password"
								onChange={handleChange}
							/>
						</div>
					</div>
					<div className="mb-3 ">
						<label htmlFor="inputPassword" className=" col-form-label">
							Confirm Password
						</label>
						<div className="col">
							<input
								type="password"
								className={`form-control bg-${mode} text-${
									mode === "blue" ? "light" : "black"
								}`}
								id="confirmPassword"
								name="confirmpass"
								onChange={handleChange}
							/>
						</div>
					</div>

					<div className="login-btns">
						<button
							className={`btn btnc bg-${mode} text-${
								mode === "blue" ? "light" : "black"
							}`}
							disabled={
								user.name.length < 5 ||
								user.email.length < 5 ||
								user.password.length < 5
							}
							onClick={handleSignUp}>
							Sign Up
						</button>
						<Link
							to="/login"
							className={`text-${mode === "blue" ? "light" : "black"}`}>
							Already have an account ?
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Signup;
