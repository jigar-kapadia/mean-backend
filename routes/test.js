const express = require('express');
const router = express.Router();
const movieController = require('../app/api/controllers/test');
router.get('/', movieController.getAll);
router.post('/', movieController.create);
// router.get('/:movieId', movieController.getById);
// router.put('/:movieId', movieController.updateById);
// router.delete('/:movieId', movieController.deleteById);
module.exports = router;