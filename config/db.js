require("dotenv").config({ path: "./.env" });
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
        console.log("Connected To DB!");
    } catch (err) {
        console.error(err.message);
        process.exit(1); //exit process on failure
    }
};

module.exports = connectDB;
