require("dotenv").config({ path: "../.env" });
const express = require("express");
const Problem = require("../../models/Problem");

const router = express.Router();

//@route    POST api/problems/all
//@desc     Add all problems to DB
//@access   me :)
router.post("/all", async (req, res) => {
    const { topic_name, problem_list } = req.body;
    try {
        problem = new Problem({ topic_name, problem_list });
        await problem.save();
        return res.status(200).json({ msg: "Added!" });
    } catch (err) {
        console.log(err.message);
        return res.status(500).send("Server error");
    }
});

module.exports = router;
