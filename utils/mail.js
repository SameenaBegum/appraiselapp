//  var express = require('express');
//  var router = express.Router();
// // const appController = require('../controller/app.controller');
// // const appModel = require('../models/app.Model');
//  const schedule = require('node-schedule');

//  var nodemailer = require ('nodemailer');

 

 

// // const jobs = schedule.scheduleJob({hour: 16, minute: 36, dayOfWeek:3}, async function(){
// //     console.log('Time for tea!');
// //    })


// // var EmailbodyData =`<!DOCTYPE html>
// //  <html lang="en">
// //  <head>
// //          <meta charset="UTF-8">
// //          <meta http-equiv="X-UA-Compatible" content="IE=edge">
// //          <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //          <title>Weekly Updates of clockify</title>
         
         
// // </head>
// // <body>
    
// //     <table  style="border-collapse:collapse; border: 2;">
       
// //        <tr>
// //         <td style="width:400px; border-collapse:collapse; border:2px solid;text-align:center;"colspan="8">Weekly Report</td>
// //        </tr>
       
// //         <tr>
// //             <td style="width:400px; border-collapse:collapse; border:2px solid">S.N</td>
// //             <td style="width:10000px; border-collapse:collapse; border:2px solid">Employee Name</td>
// //             <td style="width:10000px; height: 100px;  border:2px solid">day1 </td>
// //             <td style="width:10000px; border-collapse:collapse; border:2px solid">Day2</td>
// //             <td style="width:10000px; border-collapse:collapse; border:2px solid">Day3</td>
// //             <td style="width:10000px; border-collapse:collapse; border:2px solid">Day4</td>
// //             <td style="width:10000px; border-collapse:collapse; border:2px solid">Day5</td>
// //             <td style="width:10000px; border-collapse:collapse; border:2px solid">Day6</td>
// //         </tr>

// //         <tr>
            
        
// //             <td style="width:400px; border-collapse:collapse; border:2px solid">1</td>
// //             <td style="width:100px; border-collapse:collapse; border:2px solid">Name:${full_name}</td>
// //             <td style="width:100px; height: 100px;  border:2px solid">
// //             <table>
            
// //                 <tr>
// //                     <td style="width:10000px;padding:10px; border-collapse:collapse ">Date:${Date}</td>
// //                 </tr>

// //                 <tr>
// //                     <td style="width:10000px;padding:10px; border-collapse:collapse ">Project:${project_name}</td>
// //                 </tr>
                
// //                 <tr>
// //                     <td style="width:10000px; padding:10px; border-collapse:collapse">Task:${task_name}</td>
// //                 </tr>
// //                 <tr>
// //                     <td style="width:10000px; padding:10px ;border-collapse:collapse">Task desc:${task_description }</td>
// //                 </tr>
            
// //             </table>
            
// //             </td>
// //             <td style="width:10000px; border-collapse:collapse; border:2px solid">
// //             <table>
            
// //                 <tr>
// //                     <td style="width:10000px;padding:10px; border-collapse:collapse ">Date:${Date}</td>
// //                 </tr>

// //                 <tr>
// //                     <td style="width:10000px;padding:10px; border-collapse:collapse ">Project:${project_name}</td>
// //                 </tr>
                
// //                 <tr>
// //                     <td style="width:10000px; padding:10px; border-collapse:collapse">Task:${task_name}</td>
// //                 </tr>
// //                 <tr>
// //                     <td style="width:10000px; padding:10px ;border-collapse:collapse">Task desc:${task_description }</td>
// //                 </tr>
            
// //             </table>
// //             </td>
// //             <td style="width:10000px; border-collapse:collapse; border:2px solid">Date3</td>
// //             <td style="width:10000px; border-collapse:collapse; border:2px solid">Date4</td>
// //             <td style="width:10000px; border-collapse:collapse; border:2px solid">Date5</td>
// //             <td style="width:10000px; border-collapse:collapse; border:2px solid">Date6</td>
// //         </tr>
        
// //     </table>
    

// // </body>
// // </html>`

// const jobs = schedule.scheduleJob({hour: 10, minute:35, dayOfWeek: 2}, async function (){
//     console.log('Time for tea!');

//     let [names]= await appModel.getmailnames()
//     console.log("names--------",names)
    

//     var [getweeklytask]= await appModel.getweeklytask()
//     console.log("weekly------",getweeklytask)

//     for (let i = 0; i < getweeklytask.length; i++) {
    
    
    
//     let full_name=names[i].full_name
//     console.log("name-----",full_name)

//     let Date=getweeklytask[i].started_date
//     console.log("date-----------",Date)

//     let project_name=getweeklytask[i].project_name
//     console.log("project-----",project_name)

//     let task_name=getweeklytask[i].task_name
//     console.log("task---",task_name)

//     let task_description=getweeklytask[i].task_description
//     console.log("taskdescrition-----",task_description)

    

//     var EmailbodyData =`<!DOCTYPE html>
//  <html lang="en">
//  <head>
//          <meta charset="UTF-8">
//          <meta http-equiv="X-UA-Compatible" content="IE=edge">
//          <meta name="viewport" content="width=device-width, initial-scale=1.0">
//          <title>Weekly Updates of clockify</title>
         
         
// </head>
// <body>
    
//     <table  style="border-collapse:collapse; border: 2;">
       
//        <tr>
//         <td style="width:400px; border-collapse:collapse; border:2px solid;text-align:center;"colspan="8">Weekly Report</td>
//        </tr>
       
//         <tr>
//             <td style="width:400px; border-collapse:collapse; border:2px solid">S.N</td>
//             <td style="width:400px; border-collapse:collapse; border:2px solid">Employee Name</td>
//             <td style="width:400px; height: 100px;  border:2px solid;text-align:center">Day1 </td>
//             <td style="width:400px; border-collapse:collapse; border:2px solid;text-align:center">Day2</td>
//             <td style="width:400px; border-collapse:collapse; border:2px solid;text-align:center">Day3</td>
//             <td style="width:400px; border-collapse:collapse; border:2px solid;text-align:center">Day4</td>
//             <td style="width:400px; border-collapse:collapse; border:2px solid;text-align:center">Day5</td>
//             <td style="width:400px; border-collapse:collapse; border:2px solid;text-align:center">Day6</td>
//         </tr>

//         <tr>
            
        
//             <td style="width:400px; border-collapse:collapse; border:2px solid">1</td>
//             <td style="width:100px; border-collapse:collapse; border:2px solid">Name:${full_name}</td>
//             <td style="width:10000px; height: 100px;  border:2px solid">
//             <table>
            
//                 <tr>
//                     <td style="width:10000px;padding:10px; border-collapse:collapse ">Date:${Date}</td>
//                 </tr>

//                 <tr>
//                     <td style="width:10000px;padding:10px; border-collapse:collapse ">Project:${project_name}</td>
//                 </tr>
                
//                 <tr>
//                     <td style="width:10000px; padding:10px; border-collapse:collapse">Task:${task_name}</td>
//                 </tr>
//                 <tr>
//                     <td style="width:10000px; padding:10px ;border-collapse:collapse">Task desc:${task_description }</td>
//                 </tr>
            
//             </table>
            
//             </td>
//             <td style="width:10000px; border-collapse:collapse; border:2px solid">

//             <table>
            
//                 <tr>
//                     <td style="width:10000px;padding:10px; border-collapse:collapse ">Date:${Date}</td>
//                 </tr>

//                 <tr>
//                     <td style="width:10000px;padding:10px; border-collapse:collapse ">Project:${project_name}</td>
//                 </tr>
                
//                 <tr>
//                     <td style="width:10000px; padding:10px; border-collapse:collapse">Task:${task_name}</td>
//                 </tr>
//                 <tr>
//                     <td style="width:10000px; padding:10px ;border-collapse:collapse">Task desc:${task_description }</td>
//                 </tr>
            
//             </table>
            
//             </td>
//             <td style="width:10000px; border-collapse:collapse; border:2px solid">

//             <table>
            
//                 <tr>
//                     <td style="width:10000px;padding:10px; border-collapse:collapse ">Date:${Date}</td>
//                 </tr>

//                 <tr>
//                     <td style="width:10000px;padding:10px; border-collapse:collapse ">Project:${project_name}</td>
//                 </tr>
                
//                 <tr>
//                     <td style="width:10000px; padding:10px; border-collapse:collapse">Task:${task_name}</td>
//                 </tr>
//                 <tr>
//                     <td style="width:10000px; padding:10px ;border-collapse:collapse">Task desc:${task_description }</td>
//                 </tr>
            
//             </table>
            
//             </td>
//             <td style="width:10000px; border-collapse:collapse; border:2px solid">

//             <table>
            
//                 <tr>
//                     <td style="width:10000px;padding:10px; border-collapse:collapse ">Date:${Date}</td>
//                 </tr>

//                 <tr>
//                     <td style="width:10000px;padding:10px; border-collapse:collapse ">Project:${project_name}</td>
//                 </tr>
                
//                 <tr>
//                     <td style="width:10000px; padding:10px; border-collapse:collapse">Task:${task_name}</td>
//                 </tr>
//                 <tr>
//                     <td style="width:10000px; padding:10px ;border-collapse:collapse">Task desc:${task_description }</td>
//                 </tr>
            
//             </table>
//             </td>
//             <td style="width:10000px; border-collapse:collapse; border:2px solid">

//             <table>
            
//                 <tr>
//                     <td style="width:10000px;padding:10px; border-collapse:collapse ">Date:${Date}</td>
//                 </tr>

//                 <tr>
//                     <td style="width:10000px;padding:10px; border-collapse:collapse ">Project:${project_name}</td>
//                 </tr>
                
//                 <tr>
//                     <td style="width:10000px; padding:10px; border-collapse:collapse">Task:${task_name}</td>
//                 </tr>
//                 <tr>
//                     <td style="width:10000px; padding:10px ;border-collapse:collapse">Task desc:${task_description }</td>
//                 </tr>
            
//             </table>
//             </td>
//             <td style="width:10000px; border-collapse:collapse; border:2px solid">
//             <table>
            
//                 <tr>
//                     <td style="width:10000px;padding:10px; border-collapse:collapse ">Date:${Date}</td>
//                 </tr>

//                 <tr>
//                     <td style="width:10000px;padding:10px; border-collapse:collapse ">Project:${project_name}</td>
//                 </tr>
                
//                 <tr>
//                     <td style="width:10000px; padding:10px; border-collapse:collapse">Task:${task_name}</td>
//                 </tr>
//                 <tr>
//                     <td style="width:10000px; padding:10px ;border-collapse:collapse">Task desc:${task_description }</td>
//                 </tr>
            
//             </table>
//             </td>
//         </tr>
        
//     </table>
    

// </body>
// </html>`
//     }
    
    





//     //weekly= JSON.stringify(getweeklytask)

//     //let weekly= getweeklytask[0].getweeklytask
    
//     var sender = nodemailer.createTransport({
//       service:'gmail',
//       auth:{ 
//           user:'sameenabegum.s@skeintech.com',
//           pass: 'zwxvebcqzpeazjnx'
  
//       }
//     });

//     var composemail={
//       from:'sameenabegum.s@skeintech.com',
//       to:'sameenabegum920@gmail.com',
//       subject:'send mail using node js',
//       html:EmailbodyData
//   }
//   console.log("mail------",composemail)

//   sender.sendMail(composemail,function(error,info){
//     if(error)
//     {
//         console.log(error)
//     }
//     else{
//         console.log('Mail sent successfully' + info. response)
//     }
//   })

  

//    })
   
//    module.exports = {
//          sendMail
//    };
