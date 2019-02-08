const express = require('express');
const router = express.Router();
const stateController = require('../app/api/controllers/state');
router.get('/',stateController.getStates);
router.get('/:countryid',stateController.getStatesByCountryId)

module.exports = router;