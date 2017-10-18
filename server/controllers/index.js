const express = require('express');
const router = express.Router();
const user = require('./user');
const admin = require('./admin');
const meeting = require('./meeting');
const feedback = require('./feedback');
const cms = require('./cms');
const authentication = require('../middlewares/authentication');

router.use('/api/user', user);
router.use('/api/admin', admin);
router.use('/api/meeting', meeting);
router.use('/api/feedback', feedback);
router.use('/api/cms', authentication, cms);

module.exports = router;
