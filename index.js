const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

// Initialize the app and set the port
const app = express();
const PORT = 8000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// MongoDB connection string
const MONGO_URL = 'mongodb+srv://mohan:mohan@mydb.p2s4w.mongodb.net/?retryWrites=true&w=majority&appName=Mydb';

// Connect to MongoDB
mongoose
    .connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB connected successfully...");
    })
    .catch((error) => {
        console.error("Error connecting to the database:", error);
    });


app.use('/',userRoutes);
// Start the server
app.listen(PORT, () => {
    console.log(`Welcome ..., Your server is running on PORT ${PORT}`);
});
