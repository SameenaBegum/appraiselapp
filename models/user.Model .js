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
        console.log("typeee----",UserData.type)
     if(UserData.type=="manager"){
        let query = (`update comment set  manager_rating ="${UserData.manager_rating}", manager_comment = "${UserData.manager_comment}"  where email='${UserData.email}' AND t_id= ${UserData.t_id}`);
        database.promise().query(query)
    
     }else if(UserData.type=="employee"){
        
        let query = (`update comment set self_rating ="${UserData.self_rating}",self_comment = "${UserData.self_comment}"  where email='${UserData.email}' AND t_id= ${UserData.t_id}`);
        database.promise().query(query)
        console.log("ty------",query)
     }
     
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

            async userNames(email){
                console.log("user-------",email)
                let query=(`select * from users where email='${email.email}' `)
            return database.promise().query(query)
            },

            async get_comment_email(email){
                console.log("usercomment--",)
                let query=(`select * from comment a  where email='${email}' order by t_id asc`)
                return database.promise().query(query)
             },

            //  async update_Performance(data){
            //     console.log("d-------",data)
            //     let query = (`update users_performance set self_aspirations = "${data.self_aspirations}",manager_feedback='${data.manager_feedback}' where email='${data.email}'`);
            //     return database.promise().query(query)
            //  },

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

                async updateRating(data1){
                    console.log("kkkkkk-------",data1)
                    if(data1.type=="employee"){
                    let query = (`update users_performance set employee_self_rating = "${data1.employee_self_rating}",manager_consolidated_rating = "${data1.manager_consolidated_rating}"  where email='${data1.email}'`);
                     database.promise().query(query)
                    }else if(data1.type=="manager"){
                    let query = (`update users_performance set employee_self_rating = "${data1.employee_self_rating}",manager_consolidated_rating = "${data1.manager_consolidated_rating}"  where email='${data1.email}'`)
                        database.promise().query(query)
                        console.log("qq--------",query)
                        
                    }
                },

                async self_rating(con_email){
                    console.log("quer email------",con_email)
                    let query = (`select * from users_performance where email= '${con_email.email}'`)
                    return database.promise().query(query)
                    },

                    async userList(){
                        console.log("qqqqqq-")
                         let query=(`select * from users where NOT user_id=3`)
                         return database.promise().query(query)
                    },

                    async insert_rating(consolidate_self_rating){
                        console.log("data-----",consolidate_self_rating)
                        let query=QueryGenerator.insert('users_performance' ,consolidate_self_rating)
                         return database.promise().query(query)
                    },

                    async userComments(email){
                        console.log("qqqqqq-",email)
                         let query=(`select * from  comment where email='${email.email}'`)
                         return database.promise().query(query)
                    },
                    async user_aspiration(email){
                        console.log("comments----",email)
                        let query=(`select self_aspirations,manager_feedback,employee_self_rating,manager_consolidated_rating from users_performance where email='${email.email}'`)
                         return database.promise().query(query)
                    },

                    async userFeedback(Data){
                        console.log("typeee1----",Data.type)
                     if(Data.type=="manager"){
                        let query = (`update users_performance set manager_feedback ="${Data.manager_feedback}" where email='${Data.email}'`);
                       return database.promise().query(query)
                        console.log("executed-------",query)
                        }else if(Data.type=="employee"){
                        console.log("typeee----",Data.type)
                        let query1 = (`update users_performance set self_aspirations ="${Data.self_aspirations}" where email='${Data.email}'`);
                       return  database.promise().query(query1)
                        console.log("query executed----",query)
                         }
                       
                    }

                    

                    


                    

                    

                    

                   


            
            

        
    
       

    

    
    
    


}




module.exports=UserModel;