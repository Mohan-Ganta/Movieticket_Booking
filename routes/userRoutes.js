const express = require('express')
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/getusers',userController.getAllUsers);
router.post('/add',userController.addUser);

module.exports = router ;