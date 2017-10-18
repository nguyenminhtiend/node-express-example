const express = require('express');
const router = express.Router();
const FeedBack = require('../models/feedback');

router.get('/feedback', (req, res) => {
    FeedBack.findAll({
        where: {
            meeting_id: req.query.meeting_id
        }
    }).then((feedbacks) => {
        res.json(feedbacks);
    });
});

module.exports = router;