var express = require('express');

var userController=require('../controller/user.controller ')

//var auth =require('../utils/auth.js')


var router = express.Router();


//--------------create user--------------//

router.post('/register',userController.Login)

//----------------get technical details-------------//

router.get('/getDetails', userController.getTechnical);

//-------------get soft details--------------//

router.get('/getSoft',userController.getSoftSkill);

//------------add score user tl----------------//

router.post('/AddComment',userController.addComment);

//-------------add form details------------//

router.put('/FormDetails',userController.formDetails);

//------------consolidate rating------------//

router.get('/Consolidate',userController.consolidate);

//-------------adminlogin--------------//

router.post('/adminLogin',userController.LoginUser);

//-----------------appraisal window-----------//

router.get('/appraisalWindow',userController.appraisalWindow);

//---------------usernames------------//

router.get('/userNames', userController.userNames);

//---------------user names only------------//

router.get('/userList', userController.userList);
























module.exports=router;

