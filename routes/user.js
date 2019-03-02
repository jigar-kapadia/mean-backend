const express = require('express');
const router = express.Router();
const userController = require('../app/api/controllers/user');
router.post('/register', userController.create);
router.post('/authenticate', userController.authenticate);
router.get('/',userController.getallusers);
router.get('/:email',userController.getuserbyemail);
router.get('/id/:id',userController.getuserbyid);
module.exports = router;    