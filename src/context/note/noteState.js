import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
	const notesinitial = [
		{
			_id: "63d80b73fdaa8a91f7cd2055",
			user: "63d6c9f64d99d8cd7f008ffa",
			title: "nik",
			description: "shfk",
			tag: "general",
			date: "2023-01-30T18:24:51.305Z",
			__v: 0,
		},
		{
			_id: "63d80b74fdaa8a91f7cd2057",
			user: "63d6c9f64d99d8cd7f008ffa",
			title: "nik",
			description: "shfk",
			tag: "general",
			date: "2023-01-30T18:24:52.086Z",
			__v: 0,
		},
		{
			_id: "63d80b74fdaa8a91f7cd2059",
			user: "63d6c9f64d99d8cd7f008ffa",
			title: "nik",
			description: "shfk",
			tag: "general",
			date: "2023-01-30T18:24:52.785Z",
			__v: 0,
		},
		{
			_id: "63d80b75fdaa8a91f7cd205b",
			user: "63d6c9f64d99d8cd7f008ffa",
			title: "nik",
			description: "shfk",
			tag: "general",
			date: "2023-01-30T18:24:53.462Z",
			__v: 0,
		},
		{
			_id: "63d80b81fdaa8a91f7cd205d",
			user: "63d6c9f64d99d8cd7f008ffa",
			title: "nik",
			description: "shfk",
			tag: "general",
			date: "2023-01-30T18:25:05.018Z",
			__v: 0,
		},
		{
			_id: "63d80b81fdaa8a91f7cd205f",
			user: "63d6c9f64d99d8cd7f008ffa",
			title: "nik",
			description: "shfk",
			tag: "general",
			date: "2023-01-30T18:25:05.223Z",
			__v: 0,
		},
	];
	const [notes, setnotes] = useState(notesinitial);
	// Add note 
	const addNote=(title,description,tag)=>{
		const note = {
			_id: "63d80b81fdaa8a91f7chjhjd205f",
			user: "63d6c9f64d99d8cd7f008ffa",
			title: title,
			description: description,
			tag: tag,
			date: "2023-01-30T18:25:05.223Z",
			__v: 0, 
		};
		setnotes(notes.concat(note))
	}
	// Delete note 
	const deleteNote=(id)=>{
		const newnote= notes.filter((note1)=>{return note1._id!== id})
		setnotes(newnote)
	}
	
	return (
		<NoteContext.Provider value={{notes,addNote,deleteNote}}>{props.children}</NoteContext.Provider>
	);
};
export default NoteState;
