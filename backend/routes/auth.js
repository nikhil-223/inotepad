const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

// adding validators no login required
router.post(
	"/createuser",
	[
		// validation checks
		body("email").isEmail(),
		body("password").isLength({ min: 5 }),
		body("name").isLength({ min: 3 }),
	],
	async (req, res) => {
		// if there are errors return errors and bad requests
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		// check weather the user with the same email exists already
		try {
			let user = await User.findOne({ email: req.body.email });
			if (user) {
				return res.status(400).json({ error: "this email id already exists" });
			}
			user = await User.create({
				name: req.body.name,
				email: req.body.email,
				password: req.body.password,
				date: req.body.date,
			});
			res.json(user);
		} catch (error) {
			console.error("something went wrong");
			res.status(500).send("error occured")
		}
		// .then((user) => res.json(user)).catch(errrr=>{console.log(errrr)
		// res.json({error: "please enter a unique value for email",message: errrr.message})})
	}
);
module.exports = router;
