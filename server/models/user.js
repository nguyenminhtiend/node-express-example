const sequelize = require('./').sequelize;
const Sequelize = require('./').Sequelize;

const User = sequelize.define('user', {
        psid: {
            type: Sequelize.STRING
        },
        business_unit: {
            type: Sequelize.STRING
        },
        location: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false
    }
);

module.exports = User;