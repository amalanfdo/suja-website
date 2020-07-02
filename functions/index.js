const util = require('util');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

var nodemailer=require('nodemailer');
const functions_get = require('firebase-functions');

var html = "Name : %s <br/>"+
           "Email Id : %s <br/>"+
           "Phone Number : %s <br/>"+
           "Message : %s <br/>";

exports.sendMail = functions_get.https.onCall((data, context) =>{
    var mailOptions={
        to: 'sujadesigners@gmail.com',
        subject: 'Customer Details',
        html: util.format(html,data.name,data.emailId,data.number,data.msg)
    }
    var transport = nodemailer.createTransport("SMTP",{
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, 
        auth: {
            
        },
        debug: true
    });
    transport.sendMail(mailOptions,function(err,response){
        console.log(err);
        if(err){
            return {
                error : 'not send'
            }
        }
        else{
            return {
                error : 'not send'
            }
        }
    });
    return {
        error:'send'
    }
});
