import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
	const host = "http://localhost:5000";
	const notesinitial = [];
	const [notes, setNotes] = useState(notesinitial);

	// Fetch note
	const getNotes = async () => {
		// API Call
		const response = await fetch(`${host}/api/notes/fetchnotes`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkNmM5ZjY0ZDk5ZDhjZDdmMDA4ZmZhIn0sImlhdCI6MTY3NTAyNDg4N30.AhkyeBlRRlOCUKga1CrzLqGJrXyUCMlfFzLoSF9_gVM",
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
				"auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkNmM5ZjY0ZDk5ZDhjZDdmMDA4ZmZhIn0sImlhdCI6MTY3NTAyNDg4N30.AhkyeBlRRlOCUKga1CrzLqGJrXyUCMlfFzLoSF9_gVM",
			},
			body: JSON.stringify({ title, description, tag }),
		});
		const json = await response.json();
		console.log(json) 
		// add a note on client side
		const note = {
			title: title,
			description: description,
			tag: tag,
		};
		setNotes(notes.concat(note));
		console.log(notes);
	};
	// Delete note
	const deleteNote = async (id) => {
		// API call
		const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkNmM5ZjY0ZDk5ZDhjZDdmMDA4ZmZhIn0sImlhdCI6MTY3NTAyNDg4N30.AhkyeBlRRlOCUKga1CrzLqGJrXyUCMlfFzLoSF9_gVM",
			},
		});
		const json = await response.json();
		console.log(response ? "Note deleted" : "");
		// delete a note on client side
		const newnote = notes.filter((note) => {
			return note._id !== id;
		});
		setNotes(newnote);
	};
	// Update notes
	const updateNote = async (id, title, description, tag) => {
		// API call
		const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				"auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkNmM5ZjY0ZDk5ZDhjZDdmMDA4ZmZhIn0sImlhdCI6MTY3NTAyNDg4N30.AhkyeBlRRlOCUKga1CrzLqGJrXyUCMlfFzLoSF9_gVM",
			},
			body: JSON.stringify({ title, description, tag }),
		});
		const json = await response.json();
		console.log(response? "Note updated":"")
		// logic to edit a note for client side
		const editednotes = notes.map((note) => {
			if (note._id === id){
					note.title= title;
					note.description= description;
					note.tag= tag;
			}
			return note;
		});
		setNotes(editednotes);
	};
	

	return (
		<NoteContext.Provider
			value={{ notes, addNote, deleteNote, updateNote, getNotes  }}>
			{props.children}
		</NoteContext.Provider>
	);
};
export default NoteState;
