// import nodemailer from 'nodemailer'
// import dotenv from 'dotenv'
// dotenv.config()

// console.log("user name : ",process.env.SMTP_MAIL_USER)
// console.log("user pass : ", process.env.SMTP_MAIL_PASS)
// const transporter = nodemailer.createTransport({
//     host:process.env.SMTP_MAIL_HOST,
//     port:Number(process.env.SMTP_MAIL_PORT),
//     secure:true,
//     auth:{
//         user:process.env.SMTP_MAIL_USER,
//         pass:process.env.SMTP_MAIL_PASS,
//     }
// })

// transporter.verify((error,sucess)=>{
//     if(error){
//         console.log("Smtp connect error : ", error)
//     } else{
//         console.log("Smtp conected sucessfully")
//     }
// })

// export {transporter}

import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

console.log("user name : ", process.env.SMTP_MAIL_USER);
console.log("user pass : ", process.env.SMTP_MAIL_PASS);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_MAIL_HOST,
  port: Number(process.env.SMTP_MAIL_PORT),
  secure: false, // ❌ NOT true for 587
  auth: {
    user: process.env.SMTP_MAIL_USER,
    pass: process.env.SMTP_MAIL_PASS,
  },
  family: 4, // ✅ VERY IMPORTANT (force IPv4)
});

transporter.verify((error, success) => {
  if (error) {
    console.log("SMTP connect error:", error);
  } else {
    console.log("SMTP connected successfully");
  }
});

export { transporter };