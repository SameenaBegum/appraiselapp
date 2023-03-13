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
    
        let query = (`select t_id from comment where email= '${email}' `)
        return database.promise().query(query)
    },
    async emailCheck(email){
        let query = `select email from users where email = '${email}'`;
        return database.promise().query(query)
    },
    
    async updateComment(UserData){
        let query = (`update comment set  manager_rating = "${UserData. manager_rating}", manager_comment = "${UserData. manager_comment}", manager_feedback = '${UserData. manager_feedback}', manager_consolidated_rating='${UserData. manager_consolidated_rating}'  where email='${UserData.email}'`);
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

       async get_self_rating(con_email){
        let query = (`select avg(self_rating )as self_rating,avg(manager_rating)as manager_rating from comment where email="${con_email.email}"`)
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
             }
            

        
    
       

    

    
    
    


}




module.exports=UserModel;