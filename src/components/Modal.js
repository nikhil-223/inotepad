import React,{useRef,useContext} from "react";
import noteContext from "../context/note/noteContext";

function Modal(props, ref) {
    const {note, handleChange,handleUpdate}=props;
    const context = useContext(noteContext)
	const {mode}=context;
    const closeRef = useRef(null);
    const closeR=()=>{
        closeRef.current.click();
    }

	return (
		<>
			<div className="container " style={{ position:'absolute' }}>
				<button
					type="button"
					className="btn btn-primary"
					data-toggle="modal"
					data-target="#exampleModal"
					ref={ref}
					style={{ display: "none" }}>
					showme
				</button>
				<div
					className="modal fade"
					id="exampleModal"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true">
					<div id="modalcenter" className="modal-dialog" role="document">
						<div
							className={`modal-content bg-${
								mode === "blue" ? "skyb" : "light"
							}  text-${mode === "blue" ? "light" : "black"}`}>
							<div className="modal-header">
								<h5 className="modal-title mx-3" id="exampleModalLabel">
									Edit the Note
								</h5>
								<button
									type="button"
									id="crossb"
									className={`close bg-${mode} text-${
										mode === "blue" ? "light" : "black"
									}`}
									data-dismiss="modal"
									aria-label="Close">
									<span className="bigf" aria-hidden="true">
										&times;
									</span>
								</button>
							</div>
							<div className="modal-body">
								{/* innerform */}
								<div className="container ">
									<form>
										<div className="form-group my-3">
											<label htmlFor="exampleInputEmail1">Title</label>
											<input
												type="text"
												className={`form-control bg-${mode} text-${
													mode === "blue" ? "light" : "black"
												}`}
												id="etitle"
												name="etitle"
												value={note.etitle}
												placeholder="Enter the title"
												onChange={handleChange}
											/>
										</div>
										<div className="form-group">
											<label className="my-1" htmlFor="description">
												Description
											</label>
											<input
												type="text"
												className={`form-control bg-${mode} text-${
													mode === "blue" ? "light" : "black"
												}`}
												id="description"
												name="edescription"
												value={note.edescription}
												placeholder="Add your description here"
												onChange={handleChange}
											/>
										</div>
										<div className="form-group">
											<label className="my-1" htmlFor="tag">
												Tag
											</label>
											<input
												type="text"
												className={`form-control bg-${mode} text-${
													mode === "blue" ? "light" : "black"
												}`}
												id="tag"
												name="etag"
												value={note.etag}
												placeholder="Add your tag here"
												onChange={handleChange}
											/>
										</div>
									</form>
								</div>
								{/* innerform */}
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-dismiss="modal"
									ref={closeRef}>
									Close
								</button>
								<button
									type="button"
									className="btn btn-primary mjg"
									onClick={(e) => {
										handleUpdate(e);
										closeR();
									}}>
									Update Note
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

const forwardedModal = React.forwardRef(Modal);
export default forwardedModal;
