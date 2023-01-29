const express = require("express");
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require("express-validator");

router.post("/",[
	body('email').isEmail(),
	body('password').isLength({min:5}),
	body('name').isLength({min:3})
] , (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	User.create({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		date: req.body.date
	}).then((user) => res.json(user)).catch(errrr=>{console.log(errrr)
	res.json({error: "please enter a unique value for email",message: errrr.message})})
});
module.exports = router; 
