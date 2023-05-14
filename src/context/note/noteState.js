import NoteContext from "./noteContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NoteState = (props) => {
	const host = "https://inotepad-backend.onrender.com";
	let history= useNavigate();
	const notesinitial = [];
	const [notes, setNotes] = useState(notesinitial);
	const [alert, setalert] = useState({ type: "success", message: "" });
	const [mode, setmode] = useState("blue");
	const [note, setnote] = useState({
		id: "",
		etitle: "",
		edescription: "",
		etag: "",
	});
	const changeMode = () => {
		if (mode === "blue") {
			setmode("light");
			document.body.style.backgroundColor = "white";
		} else {
			setmode("blue");
			document.body.style.backgroundColor = "#124671";
		}
	};
	const showalert = (alertmessage) => {
		document.querySelector(".alertbox").style.visibility = "visible";
		setalert(alertmessage);
		setTimeout(() => {
			document.querySelector(".alertbox").style.visibility = "hidden";
		}, 2000);
	};
	const errorHandle=(valid,message)=>{
		if (valid)
			showalert({
				type: "success",
				message: message,
			});
		else {
			showalert({
				type: "danger",
				message: "Error: some error occured",
			});
		}
	}
	// Fetch note
	const getNotes = async () => {
		// API Call
		const response = await fetch(`${host}/api/notes/fetchnotes`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"auth-token": localStorage.getItem("token")
					
			},
		});
		const json = await response.json();
		setNotes(json);
	};
	// Add note
	const addNote = async (title, description, tag) => {
		// API call
		const response = await fetch(`${host}/api/notes/addnote`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"auth-token": localStorage.getItem("token")
					
			},
			body: JSON.stringify({ title, description, tag }),
		});
		const json = await response.json();
		if (!json.error) {
			setNotes(notes.concat(json));
		}
		errorHandle(json._id, "Success: Note Added");
		showalert({ type: "success", message: "Note added" })
		
	};
	// Delete note
	const deleteNote = async (id) => {
		// API call
		const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"auth-token": localStorage.getItem("token")
					
			},
		});
		// eslint-disable-next-line
		const json = await response.json();
		// delete a note on client side
		const newnote = notes.filter((note) => {
			return note._id !== id;
		});
		setNotes(newnote);
		// errorHandle(json._id, "Success: Note Deleted");
		showalert({ type: "success", message: "Note deleted" })
	};
	// Update notes
	const updateNote = async (id, title, description, tag) => {
		// API call
		const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				"auth-token": localStorage.getItem("token")		
			},
			body: JSON.stringify({ title, description, tag }),
		});
		// eslint-disable-next-line
		const json = await response.json();
		// logic to edit a note for client side
		const editednotes = notes.map((note) => {
			if (note._id === id) {
				note.title = title;
				note.description = description;
				note.tag = tag;
			}
			return note;
		});
		setNotes(editednotes);
		errorHandle(json._id, "Success: Note Updated");
		showalert({ type: "success", message: "Note updated" })
	};

	// users login and signup
	const SignUp = async (name, email, password) => {
		// API call
		const response = await fetch(`${host}/api/auth/createuser`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, email, password }),
		});
		const json = await response.json();
		console.log(json.authtoken);
		if (json.authtoken)
		{	
			localStorage.setItem("token", json.authtoken);
			history("/home");
			document.querySelector(".signup").style.display="none";
			showalert({ type: "success", message: "Success: Signed in" });
		} 
		else showalert({ type: "danger", message: "User already exist" });
	};
	const LogIn = async (email, password) => {
		// API call
		const response = await fetch(`${host}/api/auth/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		});
		const json = await response.json();
		console.log(json.authtoken);
		if (json.authtoken) {
			localStorage.setItem("token", json.authtoken);
			history("/home");
			document.querySelector(".login").style.display="none";
			document.querySelector(".signup").style.display="none";
			showalert({ type: "success", message: "Success: Logged in" });}
		else
			showalert({
				type: "danger",
				message: "Please login with valid credential",
			});
	};

	const GetUsers = async () => {
		// API call
		const response = await fetch(`${host}/api/auth/getuser`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"auth-token": localStorage.getItem("token")
					
			},
		});
		const json = await response.json();
		
		if (json.authtoken) {
			showalert({ type: "success", message: "Logged in" });
			
		}
		else
			showalert({
				type: "danger",
				message: "Please login with valid credential",
			});
	};
	

	return (
		<NoteContext.Provider
			value={{
				notes,
				addNote,
				deleteNote,
				updateNote,
				getNotes,
				mode,
				changeMode,
				LogIn,
				SignUp,
				alert,
				GetUsers,
				showalert,
				note,
				setnote
			}}>
			{props.children}
		</NoteContext.Provider>
	);
};
export default NoteState;
