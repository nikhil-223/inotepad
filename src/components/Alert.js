import React, { useContext } from "react";
import noteContext from "../context/note/noteContext";

const Alert = () => {
	const context = useContext(noteContext);
	const { alert } = context;
	return (
		<div style={{ visibility: "hidden" , height:"3.5rem" }} className="alertbox alertb">
			<div className={`alert alert-${alert.type}`} role="alert">
				{alert.message}
			</div>
		</div>
	);
};

export default Alert;
