const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');
const userRouter = require('./routes/userRoutes');

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

// Initialize Express App
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set View Engine
app.set('view engine', 'ejs');

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Set Multiple Views Directories (for both user & admin)
app.set('views', [path.join(__dirname, 'views/user'), path.join(__dirname, 'views/admin')]);

// Routes
app.use('/user', userRouter);

// Define PORT
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.render("home"); // If using EJS
});
app.use((req, res) => {
    res.status(404).render('page-404');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
