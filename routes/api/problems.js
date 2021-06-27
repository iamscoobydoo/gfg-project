require("dotenv").config({ path: "../.env" });
const express = require("express");
const Problems = require("../../models/Problems");

const auth = require("../../middleware/auth");
const router = express.Router();

//@route    POST api/problems/all
//@desc     Add all problems to DB
//@access   me :)
router.post("/all", auth, async (req, res) => {
    const { topic_name, problem_list } = req.body;
    try {
        problems = new Problems({ topic_name, problem_list });
        await problems.save();
        return res.status(200).json({ msg: "Added!" });
    } catch (err) {
        console.log(err.message);
        return res.status(500).send("Server error");
    }
});

//@route    GET api/problems/:topic
//@desc     Fetch problems list by name
//@access   Private
router.get("/:topic", auth, async (req, res) => {
    try {
        const { topic_name, problem_list } = await Problems.findOne({
            topic_name: req.params.topic,
        });
        return res.status(200).json({ problem_list });
    } catch (err) {
        console.log(err.message);
        return res.status(500).send("Server error");
    }
});

module.exports = router;
