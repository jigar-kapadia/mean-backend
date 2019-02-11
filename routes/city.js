const express = require('express');
const router = express.Router();
const cityController = require('../app/api/controllers/city');
router.get('/',cityController.getCities);
router.get('/:stateid',cityController.getCitiesByStateId)

module.exports = router;