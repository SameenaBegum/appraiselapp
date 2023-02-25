var express = require("express");

var router = express.Router();

//---------------users Routes--------------------//

var UserRouter = require('./user.routes');
router.use('/users',UserRouter);

module.exports=router;

