const bodyParser = require('body-parser')
const router = require('express').Router()

// import controller
const controller = require('../Controller/controller')

router.use(bodyParser.urlencoded({ 
    extended: true
  }));

router.use(bodyParser.json());

// use routes
router.post('/user', controller.createUser)

router.post('/authenticate', controller.authenticate)

router.get('/user', controller.listUser)

router.get('/departments', controller.listDepartment)

router.get('/districts', controller.listDistrict)

router.get('/establishments', controller.listEstablishment)

router.put('/user/:id', controller.editUser)

router.put("/user/token/:token", controller.editUser);

router.get('/user/:id', controller.getUser)

router.get("/user/token/:token", controller.getUser);

router.delete('/user/:id', controller.deleteUser);

router.delete('/unsubscribe/:id', controller.unsubscribeUser);

router.delete("/unsubscribe/token/:token", controller.unsubscribeUser);



module.exports = router;