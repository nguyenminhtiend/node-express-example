const express = require('express');
const router = express.Router();
const Meeting = require('../models/meeting');

router.get('/getAll', (req, res) => {
    Meeting.findAll().then((meetings) => {
        res.json(meetings);
    });
});

router.get('/:id', (req, res) => {
    Meeting.findOne({where: {id: req.params.id}}).then(meeting => {
        res.json(meeting);
    })
});



router.post('/', (req, res) => {
    let newMeeting = {
        id: req.body.id,
        meeting_date: new Date(),
        title: req.body.title
    };

    Meeting.findOne({where: {id: req.body.id}}).then(meeting => {
        if (meeting) {
            res.sendStatus(204);
        } else {
            Meeting.create(newMeeting).then(() => {
                res.sendStatus(201);
            }).catch((err) => {
                res.status(500).send(err.errors);
            });
        }
    });
});

module.exports = router;
