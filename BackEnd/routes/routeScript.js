const express = require('express');
const router = express.Router();
const { runBot } = require('../controllers/controllerScrip');

router.post('/run', runBot);

module.exports = router;