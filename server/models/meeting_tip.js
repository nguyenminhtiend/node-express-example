const sequelize = require('./').sequelize;
const Sequelize = require('./').Sequelize;

const MeetingTip = sequelize.define('meeting_tip', {
        description: {
            type: Sequelize.STRING
        },
        is_before_meeting: {
            type: Sequelize.BOOLEAN
        },
        meeting_id: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false
    }
);

module.exports = MeetingTip;