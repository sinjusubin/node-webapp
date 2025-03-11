const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.error("DB connection error:", error.message);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;
