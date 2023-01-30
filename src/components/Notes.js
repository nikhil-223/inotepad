import React,{useContext} from 'react'
import noteContext from "../context/note/noteContext";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote";

const Notes = () => {
    const context = useContext(noteContext);
	const { notes } = context;
  return (<>
		<Addnote/>
		<div className="container">
            <h2>Notes</h2>
            <div className='row'>
			{notes.map((note) => {
				return (
                    <div className='col-md-3 my-3' key={note._id}>
					<Noteitem
						note={note}
						title={note.title}
						description={note.description}
					/>
                    </div>
				);
			})}
            </div>
		</div>
		</>
	);
}

export default Notes