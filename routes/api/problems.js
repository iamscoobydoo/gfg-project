require("dotenv").config({ path: "../.env" });
const express = require("express");
const Problem = require("../../models/Problem");

const router = express.Router();

//@route    POST api/problems/all
//@desc     Add all problems to DB
//@access   me :)
router.post("/all", async (req, res) => {});
