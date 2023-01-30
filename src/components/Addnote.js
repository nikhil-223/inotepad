import React,{useContext,useState} from "react";
import noteContext from "../context/note/noteContext";

const Addnote = () => {
    const context = useContext(noteContext)
    const {addNote}=context;
    const [note, setnote] = useState({title:"", description:"" ,tag:"default"})
    const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
    }
    const handleChange=(e)=>{
        e.preventDefault();
        setnote({...note,[e.target.name]:e.target.value})
    }
	return (
		<div className="container my-3">
			<h2>Add your Notes</h2>
			<form>
				<div className="form-group my-3">
					<label className="my-1" htmlFor="exampleInputEmail1">
						Title
					</label>
					<input
						type="text"
						className="form-control"
						id="title"
                        name="title"
						placeholder="Enter the title"
						onChange={handleChange}
					/>
				</div>
				<div className="form-group">
					<label className="my-1" htmlFor="exampleInputPassword1">
						Description
					</label>
					<input
						type="text"
						className="form-control"
						id="description"
                        name="description"
						placeholder="Add your description here"
						onChange={handleChange}
					/>
				</div>

				<button className="btn btn-dark my-2" onClick={handleClick}>
					Add note
				</button>
			</form>
		</div>
	);
};

export default Addnote;
