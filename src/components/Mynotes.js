import React, { useContext, useRef,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Noteitem from "./Noteitem";
import Modal from "./Modal";
import noteContext from "../context/note/noteContext";

const Mynotes = () => {
    let history = useNavigate();
	const context = useContext(noteContext);
	const { notes, note, updateNote, setnote,getNotes } = context;
	const handleUpdate = (e) => {
		e.preventDefault();
		updateNote(note.id, note.etitle, note.edescription, note.etag);
	};
	const handleChange = (e) => {
		e.preventDefault();
		setnote({ ...note, [e.target.name]: e.target.value });
	};

	const modalRef = useRef(null);
	const showModel = (currentNote) => {
		modalRef.current.click();
		setnote({
			id: currentNote._id,
			etitle: currentNote.title,
			edescription: currentNote.description,
			etag: currentNote.tag,
		});
	};

    useEffect(() => {
			if (localStorage.getItem("token")) {
				getNotes();
			} else {
				history("/login");
			}
			// eslint-disable-next-line
		}, []);

	return (
		<>
			<Modal
				note={note}
				ref={modalRef}
				handleChange={handleChange}
				handleUpdate={handleUpdate}
			/>
			<div className="myNotes text-light">
				<div className="myNotes-head">
					<h2>Notes</h2>
				</div>
				<h4>{notes.length === 0 ? "No notes to display" : ""}</h4>
				<div className="d-flex justify-content-start flex-wrap  gap-2">
					{notes.map((note) => {
						return (
							<Noteitem key={note._id} note={note} showModel={showModel} />
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Mynotes;
