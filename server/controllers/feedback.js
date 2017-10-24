const express = require('express');
const router = express.Router();
const FeedBack = require('../models/feedback');
const User = require('../models/user');
const FeedbackTemplate = require('../config/feedback-template');

router.get('/template', (req, res) => {
    res.json(FeedbackTemplate.template);
});

router.get('/search', (req, res) => {
    FeedBack.findAll({
        where: {
            meeting_id: req.param('meeting_id')
        }
    }).then((feedbacks) => {
        res.json(feedbacks);
    });
});

router.post('/', (req, res) => {
    User.findOne({where: {psid: req.body.psid}}).then(user => {
        if (!user) {
            res.status(404).send(`Not found user with PSID: ${req.body.psid}`);
            return;
        }
        let feedbacks = [];
        req.body.feedbacks.forEach(function (feedback) {
            feedbacks.push({
                feedback_type: feedback.feedback_type,
                description: feedback.description,
                answer: feedback.answer,
                meeting_id: req.body.meeting_id,
                user_id: user.id
            });
        });

        FeedBack.bulkCreate(feedbacks).then(() => {
            res.sendStatus(201);
        }).catch((err) => {
            res.status(404).send(`Not found meeting with id: ${req.body.meeting_id}`);
        });
    });
});

module.exports = router;
