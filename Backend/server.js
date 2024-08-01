const express = require('express');
const connectDB = require('./database/connection.js');
require('dotenv').config();
const Hotel=require('./database/Models/hotel.models.js')
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Define your routes here
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
