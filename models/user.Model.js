//const database = require("../utils/database")

const QueryGenerator = require("../generators/query.generator")
const database = require("../utils/database")
const UserModel = {

    async Login(UserData){
        let query = `select * from users where email= '${UserData.email}'`;
        return database.promise().query(query)
       
    },

    async gettechnical (){
        let query = (`select id, Kra ,Measures from technicalaspects `)
        return database.promise().query(query)
    },

    async getSoftSkill (){
        let query = (`select id, Kra ,Measures from softskillsaspects `)
        return database.promise().query(query)
    },

    

    async addComment(UserData){
        console.log("data-----",UserData)
        let query=QueryGenerator.insert('technicalaspects',UserData)
        return database.promise().query(query)
    },

    
    
    


}




module.exports=UserModel;