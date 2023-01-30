import React from "react";

const Addnote = () => {
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
						id="exampleInputEmail1"
						placeholder="Enter the title"
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
						placeholder="Add your description here"
					/>
				</div>

				<button className="btn btn-dark my-2">Add note</button>
			</form>
		</div>
	);
};

export default Addnote;
