const sequelize = require('./').sequelize;
const Sequelize = require('./').Sequelize;

const Admin = sequelize.define('admin', {
        username: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        password: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false
    }
);

module.exports = Admin;