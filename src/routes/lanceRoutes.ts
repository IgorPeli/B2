const express = require('express');
const lanceController = require('../controllers/LanceController');

const router = express.Router();

router.post('/lances', lanceController.criarLance);

module.exports = router;