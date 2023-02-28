var express = require('express');

var userController=require('../controller/user.controller ')

var router = express.Router();


//--------------create user--------------//

router.post('/register',userController.Login)

//----------------get technical details-------------//

router.get('/getDetails',userController.getTechnical);

//-------------get soft details--------------//

router.get('/getSoft',userController.getSoftSkill);

//------------add score user tl----------------//

router.post('/AddComment',userController.addComment);















module.exports=router;

