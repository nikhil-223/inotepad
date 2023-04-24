import React, { useContext, useState, useRef } from "react";
import noteContext from "../context/note/noteContext";

const Addnote = () => {
	const context = useContext(noteContext);
	const {mode, addNote } = context;
	const [note, setnote] = useState({ title: "", description: "", tag: "" });
	const handleAdd = (e) => {
		e.preventDefault();
		addNote(note.title, note.description, note.tag);
	};
	const handleChange = (e) => {
		e.preventDefault();
		setnote({ ...note, [e.target.name]: e.target.value });
	};

	// references
	const titleref= useRef(null)
	const descref= useRef(null)
	const tagref= useRef(null)
	const submitref= useRef(null)
	const iff=(e,ref)=>{
		if(e.key=== 'Enter')
		{ref.current.focus();}
	}
	const goDesc=(e)=>{
		iff(e,descref);
	}
	const goTag=(e)=>{
		iff(e,tagref);
	}
	const goSubmit=(e)=>{
		if (e.key === "Enter") 
			submitref.current.click();
	}
	return (
		<div className={` addNote text-${mode === "blue" ? "light" : "black"}`}>
			<div className="addNote-box">
				<h2>Add your Notes</h2>
				<form>
					<div className="form-group my-3">
						<label className="my-1" htmlFor="exampleInputEmail1">
							Title
						</label>
						<input
							type="text"
							className={`form-control bg-${mode} text-${
								mode === "blue" ? "light" : "black"
							}`}
							id="title"
							name="title"
							placeholder="Enter the title"
							onChange={handleChange}
							ref={titleref}
							onKeyDown={goDesc}
						/>
					</div>
					<div className="form-group">
						<label className="my-1" htmlFor="description">
							Description
						</label>
						<textarea
							type="text"
							className={`form-control bg-${mode} text-${
								mode === "blue" ? "light" : "black"
							}`}
							id="description"
							name="description"
							placeholder="Add your description here"
							onChange={handleChange}
							ref={descref}
							onKeyDown={goTag}
						/>
					</div>
					<div className="form-group">
						<label className="my-1" htmlFor="tag">
							Tag
						</label>
						<input
							type="text"
							className={`form-control bg-${mode} text-${
								mode === "blue" ? "light" : "black"
							}`}
							id="tag"
							name="tag"
							placeholder="Add your tag here"
							onChange={handleChange}
							ref={tagref}
							onKeyDown={goSubmit}
						/>
					</div>

					<button
						disabled={note.title.length < 5 || note.description.length < 5}
						style={{ marginTop: "2rem" }}
						className="btnc bg-dark text-light my-2"
						onClick={(e) => {
							handleAdd(e);
						}}
						ref={submitref}>
						Add note
					</button>
				</form>
			</div>
		</div>
	);
};

export default Addnote;
