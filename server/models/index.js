const config = require('../config').db[process.env.NODE_ENV];
const Sequelize = require('sequelize');

let db = {
    Sequelize: Sequelize
};

db.sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    port: config.port,
    dialect: config.dialect
});

module.exports = db;