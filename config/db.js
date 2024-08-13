const config = require('./config');

const connectDB = async () => {

    if (config.DB_TYPE === 'mongo') {

        if (!process.env.MONGO_URI) {
            console.error('MONGO_URI is not defined in the environment variables');
            process.exit(1);
        }

        const mongoose = require('mongoose');

        try {
            await mongoose.connect(config.MONGO_URI);
            console.log('MongoDB Connected...');
        } catch (err) {
            console.error('Error connecting to MongoDB:', err.message);
            process.exit(1);
        }

    } else if (config.DB_TYPE === 'sql') {

        if (!config.SQL_DATABASE || !config.SQL_USER || !config.SQL_PASSWORD) {
            console.error('SQL Database connection details are not fully defined in the environment variables');
            process.exit(1);
        }

        const { Sequelize } = require('sequelize');

        const sequelize = new Sequelize(config.SQL_DATABASE, config.SQL_USER, config.SQL_PASSWORD, {
            host: config.SQL_HOST,
            dialect: config.SQL_DIALECT,
        });

        try {
            await sequelize.authenticate();
            console.log('SQL Database Connected...');
        } catch (err) {
            console.error('Error connecting to SQL Database:', err.message);
            process.exit(1);
        }

    }

}


module.exports = { connectDB };
