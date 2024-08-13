require('dotenv').config();

const config = {
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV || 'development', // 'development', 'production'
    DB_TYPE: process.env.DB_TYPE || 'mongo',  // 'mongo', 'sql'
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/example_db',
    SQL_HOST: process.env.SQL_HOST || 'localhost',
    SQL_USER: process.env.SQL_USER || 'root',
    SQL_PASSWORD: process.env.SQL_PASSWORD || 'root@123',
    SQL_DATABASE: process.env.SQL_DATABASE || 'node_express_db',
    SQL_DIALECT: process.env.SQL_DIALECT || 'mysql', // 'postgres', 'mysql', 'sqlite'
};

module.exports = config;
