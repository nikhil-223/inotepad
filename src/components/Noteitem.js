import React, { useContext } from "react";
import noteContext from "../context/note/noteContext";

const Noteitem = (props) => {
	const context = useContext(noteContext);
	const { deleteNote, mode } = context;
	const { note, showModel } = props;

	const handleDelete = () => {
		deleteNote(note._id);
	};
	const capitalise = (strin) => {
		const cap = strin.charAt(0).toUpperCase().concat(strin.slice(1));
		return cap;
	};
	return (
		<div className="col-md-3 w-40 my-3">
			<div
				className={`card bg-${mode} text-${
					mode === "blue" ? "light" : "black"
				}`}>
				<div className="card-body">
					<div className="d-flex justify-content-between align-items-start">
						<h5
							style={{ fontWeight: "600", width: "60%" }}
							className="card-title mx-0">
							{capitalise(note.title)}
						</h5>
						<div>
							<i className="fa-solid fa-trash mx-2" onClick={handleDelete}></i>
							<i
								className="fa-solid fa-pen-to-square"
								onClick={() => {
									showModel(note);
								}}></i>
						</div>
					</div>
					<p style={{ fontWeight: "400" }} className="card-text">
						{capitalise(note.description)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Noteitem;
