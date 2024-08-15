const express = require('express');
const connectDB = require('./database/connection.js');
require('dotenv').config();
const Hotel=require('./database/Models/hotel.models.js')
const app = express();
const PORT = process.env.PORT || 3000;
connectDB();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello, world!');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
