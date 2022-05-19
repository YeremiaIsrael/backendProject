const router = require('express').Router()
const userController = require('../controller/user')

router.put('/:id',userController.updateUserData)
router.delete('/:id',userController.deleteSingleUser)
