const sequelize = require('./').sequelize;
const Sequelize = require('./').Sequelize;

const Meeting = sequelize.define('meeting', {
        id: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        meeting_date: {
            type: Sequelize.DATEONLY
        },
        title: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false
    }
);

module.exports = Meeting;