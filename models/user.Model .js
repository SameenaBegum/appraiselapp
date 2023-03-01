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
        let query = (`select id, Kra ,Measures,Kra_id from technicalaspects `)
        return database.promise().query(query)
    },

    async getSoftSkill (){
        let query = (`select id, Kra ,Measures,Kra_id from softskillsaspects `)
        return database.promise().query(query)
    },

    

    async addComment(UserData){
        console.log("data-----",UserData)
        let query=QueryGenerator.insert('technicalaspects',UserData)
        return database.promise().query(query)
    },

    // async formDetails(Data){
    //     console.log("email1-----",Data)
    //     let query=QueryGenerator.insert('users',Data)
    //     return database.promise().query(query)
    // },

    async formDetails(Data){
        let query = (`update users set username = "${Data.username}",Designation= "${Data.Designation}",Manager_name = '${Data.Manager_name}',Department='${Data.Department}',Joning_date='${Data.Joning_date}'where email = '${Data.email}'`);
       console.log(query)
        database.promise().query(query);
        let querys = (`select * from users where email =${Data.email}`)
        return database.promise().query(querys);
        
     },

    
    
    


}




module.exports=UserModel;