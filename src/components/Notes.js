import React, { useContext, useEffect,useRef} from "react";
import noteContext from "../context/note/noteContext";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote";
import Modal from "./Modal";

const Notes = () => {
	const context = useContext(noteContext);
	const { notes, getNotes } = context;
	useEffect(() => {
		getNotes();
		// eslint-disable-next-line
	}, []);

	const modalRef = useRef(null);
	const showModel=(note)=>{
		modalRef.current.click()
	}
	return (
		<>
			<Addnote />
			<Modal name="showme" ref={modalRef}/>
			<div className="container">
				<h2>Notes</h2>
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
