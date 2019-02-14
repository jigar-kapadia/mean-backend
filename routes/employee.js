const express = require('express');
const router = express.Router();
const employeeController = require('../app/api/controllers/employee');
router.get('/', employeeController.GetEmployees);
router.post('/', employeeController.CreateEmployee);
router.get('/:id', employeeController.GetEmployeeById);
router.put('/:id', employeeController.UpdateEmployee);
router.delete('/:id', employeeController.DeleteEmployee);
module.exports = router;