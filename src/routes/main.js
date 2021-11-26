const express = require('express');
const router = express.Router();
const userLogs = require('../middlewares/userLogs')

const accessAdmin = require('../middlewares/accesAdmin')

const {index, services, design, admin, login} = require('../controllers/mainController')
router
.get('/',userLogs, index)
.get('/services',userLogs, services)
.get('/services/design',userLogs, design)
.get('/admin',userLogs, accessAdmin, admin)
.get('/login',userLogs, login)

module.exports = router;