//const database = require("../utils/database")

//const { formDetails } = require("../controller/user.controller ");
const { formDetails, appraisalWindow, userNames } = require("../controller/user.controller ");
const QueryGenerator = require("../generators/query.generator")
const database = require("../utils/database")
const UserModel = {

    async Login(UserData){
        let query = `select * from users where email= '${UserData.email}'`;
        return database.promise().query(query)
       
    },
    async AppUser(UserData){
        console.log("email1-----",UserData)
        let query=QueryGenerator.insert('users',UserData)
        return database.promise().query(query)
    },
    async GetAppLogin(user_id){
        let query = `select * from users where user_id= '${user_id}'`;
        return database.promise().query(query)
       
    },

    async gettechnical (){
        
        let query = (`select t_id, kra, measures,kra_id from technicalaspects `)
        return database.promise().query(query)
    },

    async getSoftSkill (){
        let query = (`select t_id, kra, measures, kra_id from technicalaspects  where type ='S'`)
        return database.promise().query(query)
    },

    

    async addComment(UserData){
        console.log("data-----",UserData)
        let query=QueryGenerator.insert('comment ' ,UserData)
         return database.promise().query(query)
    },
    async getComment(UserData){
        console.log("dd--------",UserData.email)
        let query = (`select * from comment a
        left join technicalaspects b on a.t_id = b.t_id
         where email= '${UserData.email}' `)
        return database.promise().query(query)
    },

    async questionCheck(email){
    console.log("wwwwww----",email)
        let query = (`select t_id from comment where email= '${email}' `)
        return database.promise().query(query)
    },
    async emailCheck(email){
        console.log("checkemail------",email)
        let query = `select email from users where email = '${email}'`;
        return database.promise().query(query)
    },
    
    async updateComment(UserData){
        console.log("xxxxxx-------",UserData)
        let query = (`update comment set  manager_rating ="${UserData.manager_rating}", manager_comment = "${UserData.manager_comment}",self_rating ="${UserData.self_rating}",self_comment = "${UserData.self_comment}", self_aspirations = '${UserData.self_aspirations}', manager_feedback = '${UserData.manager_feedback}'  where email='${UserData.email}' AND t_id= ${UserData.t_id}
        `);
        database.promise().query(query)
       let querys =QueryGenerator.format (`select  * from comment a
       left join technicalaspects b on a.t_id = b.t_id
        where email= '${UserData.email}'`)
       return database.promise().query(querys);

    },

    async formDetails(Data){
        
        let query = (`update users set username = "${Data.username}",designation = "${Data.designation}",manager_name = '${Data.manager_name}',department='${Data.department}',joining_date='${Data.joining_date}',role_id='${Data.role_id}'  where email='${Data.email.email}'`);
        database.promise().query(query)
       let querys =QueryGenerator.format (`select * from users where email ='${Data.email.email}'`)
       return database.promise().query(querys);
       
       },

       async get_self_rating(email){
        console.log("rrrrr--------",email)
        let query = (`select avg(self_rating )as employee_self_rating,avg(manager_rating)as manager_consolidated_rating,email from comment where email="${email.email}"`)
        return database.promise().query(query)
        },
        async LoginUser(UserData){
            console.log("email---------",UserData.email)
            let query = `select email,password from  users where email= '${UserData.email}'`;
             database.promise().query(query)
            let query1=`select * from users where email='${UserData.email}' `
            return database.promise().query(query1)
           
        },

        async appraisalWindow(){
            let query = (`select * from flag order by flag_id desc LIMIT 1`)
            return database.promise().query(query)
            },

            async userNames(){
                let query=(`select * from users `)
            return database.promise().query(query)
            },

            async get_comment_email(email){
                console.log("usercomment--",)
                let query=(`select * from comment where email='${email}' order by t_id asc`)
                return database.promise().query(query)
             },

             async insert_Rating(data){
                let query=QueryGenerator.insert('users_performance ' ,data)
                return database.promise().query(query)
             },

             async ratingCheck(email){
                console.log("wwwwww----",email)
                    let query = (`select employee_self_rating , manager_consolidated_rating from users_performance where email= '${email}' `)
                    return database.promise().query(query)
                },

                async emailrating(email){
                    console.log("checkemailssssss------",email)
                    let query = `select email from users_performance where email = '${email}'`;
                    return database.promise().query(query)
                },

                async updateRating(consolidate_self_rating){
                    console.log("kkkkkk-------",consolidate_self_rating)
                    let query = (`update users_performance set employee_self_rating = "${consolidate_self_rating.employee_self_rating}",manager_consolidated_rating = "${consolidate_self_rating.manager_consolidated_rating}"  where email='${consolidate_self_rating.email}'`);
                     return database.promise().query(query)
                },

                async self_rating(con_email){
                    console.log("quer email------",con_email)
                    let query = (`select * from users_performance where email= '${con_email.email}'`)
                    return database.promise().query(query)
                    },

                   


            
            

        
    
       

    

    
    
    


}




module.exports=UserModel;