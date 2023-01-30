import React,{useContext} from 'react'
import noteContext from "../context/note/noteContext";
import Noteitem from "./Noteitem";

const Notes = () => {
    const context = useContext(noteContext);
	const { notes, setNotes } = context;
  return (
		<div className="container">
            <h2>Notes</h2>
            <div className='row'>
			{notes.map((element) => {
				return (
                    <div className='col-md-3 my-3' key={element._id}>
					<Noteitem
						
						title={element.title}
						description={element.description}
					/>
                    </div>
				);
			})}
            </div>
		</div>
	);
}

export default Notes