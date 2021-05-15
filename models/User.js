const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    problem_solved: {
        type: mongoose.Schema.Types.ObjectId,
    },
});

module.exports = User = mongoose.model("user", UserSchema);
