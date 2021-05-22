const mongoose = require("mongoose");

const ProblemSchema = new mongoose.Schema({
    topic_name: {
        type: String,
    },
    problem_list: [
        {
            problem_name: {
                type: String,
            },
            problem_url: {
                type: String,
            },
        },
    ],
});

module.exports = Problem = mongoose.model("problem", ProblemSchema);
