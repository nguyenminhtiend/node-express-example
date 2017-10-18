const sequelize = require('./').sequelize;
const Sequelize = require('./').Sequelize;

const Feedback = sequelize.define('feedback', {
        feedback_type: {
            type: Sequelize.INTEGER
        },
        description: {
            type: Sequelize.STRING
        },
        answer: {
            type: Sequelize.INTEGER
        },
        meeting_id: {
            type: Sequelize.STRING
        },
        user_id: {
            type: Sequelize.INTEGER
        }
    }, {
        timestamps: false
    }
);

module.exports = Feedback;