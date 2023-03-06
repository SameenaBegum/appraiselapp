//const database = require("../utils/database")

//const { formDetails } = require("../controller/user.controller ");
const { formDetails } = require("../controller/user.controller ");
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
        
        let query = (`select t_id, kra, measures,kra_id from technicalaspects  where type='T'`)
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
    console.log("qqqqqqq----",email)
        let query = (`select t_id from comment where email= '${email}' `)
        return database.promise().query(query)
    },

    
    

    async updateComment(UserData){
        
        let query = (`update comment set self_rating = "${UserData.self_rating}",self_comment = "${UserData.self_comment}",
        manager_rating = '${UserData.manager_rating}',manager_comment='${UserData.manager_comment}',
        self_aspirations='${UserData.self_aspirations}' ,teamlead_feedback='${UserData.teamlead_feedback}',
        employee_self_rating='${UserData.employee_self_rating}',manager_consolidated_rating='${UserData.manager_consolidated_rating}'
         where email='${UserData.email.email}'`);
       return database.promise().query(query)
       
       
       },

    async emailCheck(email){
        let query = `select email from users where email = '${email}'`;
        return database.promise().query(query)
    },                                          

   

  

    // async formDetails(Data){
    //     console.log("email1-----",Data)
    //     let query=QueryGenerator.insert('users',Data)
    //     return database.promise().query(query)
    // },

    async formDetails(Data){
        
        let query = (`update users set username = "${Data.username}",designation = "${Data.designation}",manager_name = '${Data.manager_name}',department='${Data.department}',joining_date='${Data.joining_date}'  where email='${Data.email.email}'`);
        database.promise().query(query)
       let querys =QueryGenerator.format (`select * from users where email ='${Data.email.email}'`)
       return database.promise().query(querys);
       
       },

    //  async formEmail(){
    //     let query = (`select * from users where email ='${Data.email}'`)
    //     return database.promise().query(query);
    //  }

    
    
    


}




module.exports=UserModel;