import React,{useContext, useState} from "react";
import noteContext from "../context/note/noteContext";

const Login = () => {
    const [user, setuser] = useState({email:"", password:""})
    const context = useContext(noteContext )
    const{mode,LogIn}= context;
    const handleLogIn=()=>{
        LogIn(user.email,user.password)
    }
    const handleChange=(e)=>{
        e.preventDefault();
        setuser({...user,[e.target.name]:e.target.value})
    }
	return (
		<>
			<div
				className={`container my-4 text-${
					mode === "blue" ? "light" : "black"
				}`}>
				<h3>Log In</h3>
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
				<button
					className={`btn btnc bg-${mode} text-${
						mode === "blue" ? "light" : "black"
					}`}
					disabled={user.email.length<5 || user.password.length<5}
					onClick={handleLogIn}>
					Log In
				</button>
			</div>
		</>
	);
};

export default Login;
