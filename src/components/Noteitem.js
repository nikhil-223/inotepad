import React ,{useContext} from "react";
import noteContext from "../context/note/noteContext";

const Noteitem = (props) => {
    const context = useContext(noteContext)
	return (
		<div className="card">
			<div className="card-body">
				<div className="d-flex justify-content-between align-items-start">
					<h5 className="card-title mx-0">{props.title}</h5>
					<div>
						<i className="fa-solid fa-trash mx-2"></i>
						<i className="fa-solid fa-pen-to-square"></i>
					</div>
				</div>
				<p className="card-text">{props.description}</p>
			</div>
		</div>
	);
};

export default Noteitem;
