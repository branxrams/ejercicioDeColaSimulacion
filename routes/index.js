const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();

/* GET home page. */
router.get('/', mainController.index);
router.post('/simulate', mainController.simulate);

module.exports = router;
