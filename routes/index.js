const express = require('express');
const exampleRoutes = require('./exampleRoutes');

const router = express.Router();

router.get('/', (req, res) => {
    return res.status(200).json({
        status: true,
        message: "Welcome to the Backend API server"
    })
});


router.use('/example', exampleRoutes);

module.exports = router;
