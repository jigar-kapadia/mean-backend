const express = require('express');
const router = express.Router();
const countryController = require('../app/api/controllers/country');
router.get('/', countryController.getCountries);
module.exports = router;