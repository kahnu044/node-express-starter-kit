// Server.js
const express = require('express');
const config = require('./config/config');
const routes = require('./routes');

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    return res.status(200).json({
        status: true,
        message: "Welcome to the Backend server"
    })
});
app.use('/api', routes);

// Start the server
app.listen(config.port, () => {
    console.log(`Server running in ${config.env} mode on port ${config.port}`);
});