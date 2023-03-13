
var UserModal=require('../models/user.Model ')
const { Message } = require("../utils/messages");
const Response = require("../utils/response");
const { StatusCodes } = require("http-status-codes");
const UserModel = require('../models/user.Model ');
var jwt = require('jsonwebtoken');



//var auth=require('../utils/auth.js')







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


        
             let payload ={

              "email":email,
             // "email":valid_email.length[0].email,
            }
             let options = { expiresIn: process.env.Expire_Time};
             let secret = process.env. Secret_Key;
             let token = jwt.sign(payload, secret, options)
            
                   
                  new Response(res)._SuccessResponse("Login Successfull...!",valid_email[0].email,token)
                  
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
           let email =req.query.email
            
          let comment = req.body;
          console.log("checking-------",comment)
          for(let i=0; i<comment.length; i++){
            let{
              t_id,
          self_rating,
          self_comment,
          manager_rating,
          manager_comment,
          self_aspirations,
          manager_feedback	,
          employee_self_rating,
          manager_consolidated_rating
          }=comment[i];

          console.log("working1")
            var UserData={
              t_id,
              self_rating,
              self_comment,
              manager_rating,
              manager_comment,
              self_aspirations,
              manager_feedback,
              employee_self_rating,	
              manager_consolidated_rating,
              email
               }
               console.log("data1------",UserData)
            let [emailcheck] = await UserModel.emailCheck(email);
                 if(emailcheck.length>0){
             let [questionCheck]=await UserModel.questionCheck(email)

             const checkQuestion = questionCheck.find(obj => obj.t_id == t_id);
                   if(checkQuestion=== undefined){
                      
     let [comments] = await UserModel.addComment(UserData);
           if(comments.affectedRows>0){
      let getComments=await UserModel.getComment(UserData)
                   if(i===comment.length-1){
                new Response(res)._SuccessResponseWithData("Comments Added Successfully",getComments)
             }
        }
      //}
      }else{
         let [updatecomment]=await UserModel.updateComment(UserData)
         console.log("update-------",updatecomment)
         if(updatecomment.length>0){
          
          if(i===comment.length-1){
          console.log("updateeeeee-------",updatecomment)
          new Response(res)._SuccessResponseWithData("Comments updated Successfully",updatecomment)
          

         }
              }
            }
       } 
     }
              }
              catch(err){
             }
       },


       async  formDetails(req,res) {
        console.log('working')
         try{

          let email=req.query
            let{
          username,
          manager_name,
          designation,
          department,
          role_id,
          joining_date,
          review_period
       }=req.body;
            console.log("working1")
            var Data={
              email,
              username,
              manager_name,
              designation,
              department,
              role_id,
              joining_date,
           }
            console.log("data----",Data)
     let [form] = await UserModel.formDetails(Data);
          //console.log("All details---->",form)
             if(form.length>0){
               console.log("get------",form.length)
              // let formEmail=await UserModal.formEmail(email)
              // console.log("email-----",formEmail)
               new Response(res)._SuccessResponseWithData("Details Added Successfully",form[0])
             
             }
             else{
               new Response(res)._ErrorMessage("Data Not Found")
             }
         }
         catch(err){
             
         }
       },
       async consolidate(req,res){
        console.log("working")

        try{
        let con_email=req.query
        
        let [consolidate_self_rating]=await UserModel.get_self_rating(con_email)
        console.log("1111-------",consolidate_self_rating)
        if(consolidate_self_rating.length>0){
          new Response(res)._SuccessResponseWithData("Ratings Fetched Successfully",consolidate_self_rating[0])

        }else{
          new Response(res)._ErrorMessage("Ratings Not Found")

        }
       }catch(err){
           console.log(err)
        }
       },

       async LoginUser(req,res){
      try{
       let{
             email ,
             password 
        }=req.body;
         var UserData= {
          email,password
        };
        console.log("data---",UserData)
        let [get_valid_email]=await UserModel.LoginUser(UserData)
        console.log('get_valid_email--->',get_valid_email)
      
        if(get_valid_email.length>0){
          console.log("emaillllll--------",get_valid_email.length)
          if(get_valid_email[0].password==UserData.password){
            console.log("User-------",UserData.password)
              // let payload ={
              //     "email":get_valid_email[0][0].email,
              //     "full_name":get_valid_email[0][0].full_name  
              //   }
              //   let options = { expiresIn: process.env.JWT_EXPIRE_TIME, issuer : process.env.JWT_ISSUER };
              //   let secret = process.env.JWT_SECRET;
               // let token = jwt.sign(payload, secret, options)

             
               new Response(res)._SuccessResponse("Login Successfull...!",get_valid_email[0])
        }
        else{
          new Response(res)._ErrorMessage("Password is Mismatch")
          console.log("Password is Mismatch")
        }
           }
        else{
          new Response(res)._ErrorMessage("Please enter the correct email")
console.log('Please enter the correct email...!')
        }
       }
        catch(err){

         }
        },

        async appraisalWindow(req,res){
          console.log("working")
  
          try{
          
          
          let [appraisal_window]=await UserModel.appraisalWindow()
          console.log("qqqqqq-------",appraisal_window)
           if(appraisal_window.length>0){
            if(appraisal_window[0].is_appraisal_window_open == 'true'){
              appraisal_window[0].is_appraisal_window_open = true;
            }else if(appraisal_window[0].is_appraisal_window_open == 'false'){
               appraisal_window[0].is_appraisal_window_open = false;

            }
            if(appraisal_window[0].is_appraisal_open_for_employee == 'true'){
              appraisal_window[0].is_appraisal_open_for_employee = true;
            }else if(appraisal_window[0].is_appraisal_open_for_employee == 'false'){
               appraisal_window[0].is_appraisal_open_for_employee = false;

            }
            console.log("dsdfdf",appraisal_window[0].is_appraisal_window_open);
            var data ={
              flag_id:appraisal_window[0].flag_id ,
              is_appraisal_window_open: appraisal_window[0].is_appraisal_window_open,
              is_appraisal_open_for_employee: appraisal_window[0].is_appraisal_open_for_employee,
              created_at:appraisal_window[0].created_at ,
              updated_at: appraisal_window[0].updated_at
            }
            console.log("boolean---",data)
            
            new Response(res)._SuccessResponseWithData("Flags Fetched Successfully",data)
  
          }else{
            new Response(res)._ErrorMessage("Flags Not Found")
  
          }
         }catch(err){
             console.log(err)
          }
         },

         async userNames(req,res){
          try{
            console.log("working")

            let [user_names]=await UserModel.userNames()
            console.log("names-----",user_names)
           
            for(let i=0 ;i<user_names.length;i++){
              console.log("wwwwwww------",user_names[i].email)
              let[get_user_comment_email]=await UserModel.get_comment_email(user_names[i].email)
              user_names[i].comments = get_user_comment_email;
              
            }
            console.log('user_names', user_names)
           
            if(user_names.length>0){
              new Response(res)._SuccessResponseWithData("Users Fetched Successfully",user_names)
            }else{
               new Response(res)._ErrorMessage("User Data  Not Found")
            }
          }catch(err){

          }
          
         }
  

       


       
}

module.exports=userController
    