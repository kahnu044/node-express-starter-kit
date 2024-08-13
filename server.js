// Server.js
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./config/config');
const routes = require('./routes');
const db = require('./config/db');

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Connect to Database
db.connectDB();

// Routes
app.get('/', (req, res) => {
    return res.status(200).json({
        status: true,
        message: "Welcome to the Backend server"
    })
});
app.use('/api', routes);

// Start the server
app.listen(config.PORT, () => {
    console.log(`Server running in ${config.NODE_ENV} mode on port ${config.PORT}`);
});