
var UserModal=require('../models/user.Model ')
const { Message } = require("../utils/messages");
const Response = require("../utils/response");
const { StatusCodes } = require("http-status-codes");
const UserModel = require('../models/user.Model ');


const userController = {

    async Login(req,res){
      console.log("working")
     try {
      let{
          
          email
    }=req.body;
      console.log("working1")
      var UserData={
         email
         }
         let [valid_email]=await UserModel.Login(UserData)
         console.log("Userdata------",valid_email)
         if(valid_email.length > 0){

            // let payload ={
            //     "user_id":get_valid_email[0].user_id,
            //     "full_name":get_valid_email[0].full_name,
            //     "email":get_valid_email[0].email,
            //     "role_id":get_valid_email[0].role_id
            // }
            // let options = { expiresIn: process.env.JWT_EXPIRE_TIME, issuer : process.env.JWT_ISSUER };
            // let secret = process.env.JWT_SECRET;
            // let token = jwt.sign(payload, secret, options)
            
                   
                  new Response(res)._SuccessResponse("Login Successfull...!")
                  
                 }
                 else{
                  
                      console.log("key")
                      console.log("EMAIL-----",UserData)
                     let [User]=await UserModel.AppUser(UserData)
                         console.log("data12-----------",User)
                     if(User.insertId){
                        let [getUser] = await UserModel.GetAppLogin(User.insertId)
                        console.log("getUser-----------",getUser)
                        if(getUser.length>0){
                        // let payload ={
                        //     "user_id":getUser[0].user_id,
                        //    "full_name":getUser[0].full_name,
                        //    "email":getUser[0].email,
                        //    "fcm_token":getUser[0].fcm_token,
                        //    "role_id":getUser[0].role_id
                        // }
                        // let options = { expiresIn: process.env.JWT_EXPIRE_TIME, issuer : process.env.JWT_ISSUER };
                        // let secret = process.env.JWT_SECRET;
                        // let token = jwt.sign(payload, secret, options)
        
                        // 
                        new Response(res)._SuccessResponse("Register Successfull...!")
                      }
                    }else{

                      console.log("key")
               let [User]=await appModel.AppUser(UserData)
                   console.log("data12-----------",User)
               if(User.insertId){
                  let [getUser] = await appModel.GetAppLogin(User.insertId)
                  console.log("getUser-----------",getUser)
                  if(getUser.length>0){
              //     let payload ={
              //         "user_id":getUser[0].user_id,
              //        "full_name":getUser[0].full_name,
              //        "email":getUser[0].email,
              //        "fcm_token":getUser[0].fcm_token,
              //        "role_id":getUser[0].role_id
              //     }
              //     let options = { expiresIn: process.env.JWT_EXPIRE_TIME, issuer : process.env.JWT_ISSUER };
              //     let secret = process.env.JWT_SECRET;
              //     let token = jwt.sign(payload, secret, options)
  
              //     
                  new Response(res)._SuccessResponse("Register Successfull...!", payload, token)
                 }
               }else{
                 new Response(res)._ErrorMessage("Register failed")
               }
        




                      new Response(res)._ErrorMessage("Register failed")
                    }
              
                    new Response(res)._ErrorMessage("User not found for further information contact admin")
                      }
                     
            
    
        }catch(err){
            console.log(err)
        }
    },
     
      

    async getTechnical(req,res) {
       console.log('working')
        try{
            
    let [getdetails] = await UserModel.gettechnical();
  
             console.log("All details---->",getdetails)
            if([getdetails].length>0){
         new Response(res)._SuccessResponseWithData("Datas Fetched Successfully",getdetails)
            
            }
            else{
              new Response(res)._ErrorMessage("Data Not Found")
            }
        }
        catch(err){
            
        }
      },

      async getSoftSkill(req,res) {
        console.log('working')
         try{
             
     let [getSoftDetails] = await UserModel.getSoftSkill();
   
              console.log("All details---->",getSoftDetails)
             if([getSoftDetails].length>0){
               
               new Response(res)._SuccessResponseWithData("Datas Fetched Successfully",getSoftDetails)
             
             }
             else{
               new Response(res)._ErrorMessage("Data Not Found")
             }
         }
         catch(err){
             
         }
       },
       async addComment(req,res) {
        console.log('working')
         try{

            let{
          
                comment
          }=req.body;
            console.log("working1")
            var UserData={
            comment
               }
            
     let [comments] = await UserModel.addComment(UserData);
          console.log("All details---->",comments)
             if(comments[0].affectedrows>0){
               console.log("get------",comments)
               new Response(res)._SuccessResponseWithData("Comments Added Successfully",comments)
             
             }
             else{
               new Response(res)._ErrorMessage("Data Not Found")
             }
         }
         catch(err){
             
         }
       },


       async formDetails(req,res) {
        console.log('working')
         try{

            let{
          username,
          Manager_name,
          Designation,
          Department,
          Joining_date,
          Review_period
       }=req.body;
            console.log("working1")
            var Data={
              username,
              Manager_name,
              Designation,
              Department,
              Joining_date,
           }
            console.log("data----",Data)
     let [form] = await UserModel.formDetails(Data);
          console.log("All details---->",form)
             if(form[0].affectedrows>0){
               console.log("get------",form)
               new Response(res)._SuccessResponseWithData("Details Added Successfully",form)
             
             }
             else{
               new Response(res)._ErrorMessage("Data Not Found")
             }
         }
         catch(err){
             
         }
       },


       
}

module.exports=userController
    