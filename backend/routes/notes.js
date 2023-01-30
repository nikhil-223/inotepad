const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");

// ROUTE 1: Add a note using POST: "/api/notes/addnote"  no login required
router.post(
	"/addnote",
	fetchuser,
	[
		// validation checks
		body("title", "please use title with atleast 3 characters").isLength({
			min: 3,
		}),
		body(
			"description",
			"please use description with atleast 3 characters"
		).isLength({ min: 3 }),
	],
	async (req, res) => {
		// if there are errors return errors and bad requests

		try {
			const { title, description, tag } = req.body;
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}
			// create a new note
			const note = new Note({
				title,
				description,
				tag,
				user: req.user.id,
			});
			const savedNotes = await note.save();
			res.json(savedNotes);
		} catch (error) {
			console.error(error.message);
			res.status(500).send("error occured");
		}
	}
);
// ROUTE 2: fetch notes using GET: "/api/notes/fetchnotes"  no login required
router.get("/fetchnotes", fetchuser, async (req, res) => {
	try {
		const notes = await Note.findOne({ user: req.user.id });
		res.json({ notes });
	} catch (error) {
		console.error(error.message);
		res.status(500).send("error nbg occured");
	}
});

module.exports = router;
