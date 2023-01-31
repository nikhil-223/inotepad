import React from "react";

function Modal({ name }, ref) {
	return (
		<>
			<div className="container">
				<button
					type="button"
					className="btn btn-primary"
					data-toggle="modal"
					data-target="#exampleModal"
					ref={ref}
					style={{ display: "none" }}>
					{name}
				</button>
				<div
					className="modal fade"
					id="exampleModal"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title mx-3" id="exampleModalLabel">
									Edit the Note
								</h5>
								<button
									type="button"
									id="crossb"
									className="close"
									data-dismiss="modal"
									aria-label="Close">
									<span className="bigf" aria-hidden="true">&times;</span>
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
												className="form-control"
												id="title"
												name="title"
												placeholder="Enter the title"
												// onChange={handleChange}
											/>
										</div>
										<div className="form-group">
											<label className="my-1" htmlFor="description">
												Description
											</label>
											<input
												type="text"
												className="form-control"
												id="description"
												name="description"
												placeholder="Add your description here"
												// onChange={handleChange}
											/>
										</div>
										<div className="form-group">
											<label className="my-1" htmlFor="tag">
												Tag
											</label>
											<input
												type="text"
												className="form-control"
												id="tag"
												name="tag"
												placeholder="Add your tag here"
												// onChange={handleChange}
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
									data-dismiss="modal">
									Close
								</button>
								<button type="button" className="btn btn-primary mjg">
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
