import React ,{useContext} from "react";
import noteContext from "../context/note/noteContext";

const Noteitem = (props) => {
    const context = useContext(noteContext)
    const { deleteNote } = context;
    const {note, showModel } = props;

    const handleDelete=()=>{
        deleteNote(note._id)
    }
	return (
		<div className="col-md-3 my-3" >
			<div className="card">
				<div className="card-body">
					<div className="d-flex justify-content-between align-items-start">
						<h5 className="card-title mx-0">{note.title}</h5>
						<div>
							<i className="fa-solid fa-trash mx-2" onClick={handleDelete}></i>
							<i className="fa-solid fa-pen-to-square" onClick={()=>{showModel(note)}}></i>
						</div>
					</div>
					<p className="card-text">{note.description}</p>
				</div>
			</div>
		</div>
	);
};

export default Noteitem;
