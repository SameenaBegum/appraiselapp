// var jwt = require('jsonwebtoken');

// const QueryGenerator = require("../generators/query.generator")
// const database = require("../utils/database")
// require('dotenv').config();


// async function Auth(req) {
//   var res;
//   try {
//     let access_token = req.headers.jwt || null;
//     if (!access_token) {
//       res.status(403);
//       res = {
//         status: false,
//         message: "Unauthorized",
//       };
//       return res;
//     } else {
//       if (access_token) {
//         let [rfTokens] = await userDbModel.get_token(access_token);

//         if (rfTokens.length) {
//           res.status(403);
//           res = {
//             status: true,
//             message: "Vaild token !",
//           };
//           return res;
//         } else {
//           res.status(403);
//           res = {
//             status: false,
//             message: "Invalid token !",
//           };
//           return res;
//         }
//       } else {
//         res.status(403);
//         res = {
//           status: false,
//           message: "Invalid token !",
//         };
//         return res;
//       }
//     }
//   } catch {
//     res.status(403);
//     res = {
//       status: false,
//       message: "Unauthorized !",
//     };
//     return res;
//   }
// }

// async function Authorization(req, res, next) {
//   try {
//     let access_token = req.headers["jwt"] || req.cookies.access_token || null;
//     let refresh_token =
//       req.headers["refresh-token"] || req.cookies.refresh_token || null;
//     if (!access_token) {
//       res.status(403);
//       res.send({
//         status: false,
//         message: "Unauthorized",
//       });
//     } else if (!refresh_token) {
//       res.status(403);
//       res.send({
//         status: false,
//         message: "Unauthorized",
//       });
//     } else {
//       var options = {
//         expiresIn: process.env.JWT_EXPIRE_TIME,
//         issuer: process.env.JWT_ISSUER,
//       };
//       let user = jwt.verify(
//         access_token,
//         process.env.JSON_WEB_TOKEN_SECRET,
//         options
//       );
//       if (user) {
//         database
//           .promise()
//           .query(
//             "SELECT * FROM refresh_tokens WHERE user_id = ? AND token = ?  AND expires > NOW()",
//             [user.user_id, refresh_token]
//           )
//           .then(([rfTokens]) => {
//             if (rfTokens.length) {
//               req.user = user;
//               next();
//             } else {
//               res.status(403);
//               res.send({
//                 status: false,
//                 message: "Unauthorized",
//               });
//             }
//           });
//       } else {
//         res.send({
//           status: false,
//           message: "Invalid token !",
//         });
//       }
//     }
//   } catch (err) {
//     res.status(403);
//     res.send({
//       status: false,
//       message: "Unauthorized !",
//       err: err,
//     });
//   }
// }


// module.exports={Auth, Authorization};