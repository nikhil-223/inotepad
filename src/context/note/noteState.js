import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
	const s1 = {
		name: "nikhil",
		class: "12th",
	};
	const [state, setstate] = useState(s1);
	const update = () => {
        setTimeout(() => {
            setstate({
                name: "rahul",
                class: "15th",
            });
            
        }, 5000);


	};
	return <NoteContext.Provider value={{state,update}}>{props.children}</NoteContext.Provider>;
};
export default NoteState;
