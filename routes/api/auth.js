require("dotenv").config({ path: "../.env" });
const express = require("express");
const jwt = require("jwt");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

const auth = require("../../middleware/auth");
const User = require("../../models/User");

const router = express.Router();

//@route GET api/auth
//@desc Get user details
//@access Public
router.get("/", auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        return res.json(user);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server Error");
    }
});
