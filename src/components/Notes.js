import React, { useContext, useEffect,useRef,useState} from "react";
import noteContext from "../context/note/noteContext";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

const Notes = () => {
	const context = useContext(noteContext);
	const { notes, getNotes, updateNote } = context;
	let history= useNavigate();
	const [note, setnote] = useState({ id:"", etitle: "", edescription: "", etag: "" });

	const handleUpdate=(e) => {
		e.preventDefault();
		updateNote(note.id, note.etitle, note.edescription, note.etag);
	};
	const handleChange = (e) => {
		e.preventDefault();
		setnote({ ...note, [e.target.name]: e.target.value });
	};
	useEffect(() => {
		console.log(localStorage.getItem('token'));
		if(localStorage.getItem("token"))
		
		{getNotes(); }
		else{
			history("/login");
		}
		// eslint-disable-next-line
	}, []);

	const modalRef = useRef(null);
	const showModel=(currentNote)=>{
		modalRef.current.click()
		setnote({id:currentNote._id ,etitle:currentNote.title, edescription:currentNote.description , etag:currentNote.tag});
	}
	return (
		<>
			<Addnote />
			<Modal note={note} ref={modalRef} handleChange={handleChange} handleUpdate={handleUpdate}/>
			<div className="container text-light">
				<h2>Notes</h2>
				<h4>{notes.length===0? "No notes to display":""}</h4>
				<div className="row">
					{notes.map((note) => {
						return <Noteitem key={note._id} note={note} showModel={showModel}/>;
					})}
				</div>
			</div>
		</>
	);
};

export default Notes;
