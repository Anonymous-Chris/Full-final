import axios from 'axios'
//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
var nodemailer = require('nodemailer');

//const sendWelcomeEmail = ()=>{
const data = axios.get('/api/hello').then(res=>{
    console.log(res)
})
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'math.contact2071@gmail.com',
          pass: 'rkpjmirlvzsyjhvo'
        },
        tls:{
            rejectUnauthorized:false
        }
      });
      
    
    var mailOptions = {
        from: 'math.contact2071@gmail.com',
        to: 'sk.niyara@gmail.com',
        subject: 'Contact Me',
        text: `Test` };

transporter.sendMail(mailOptions, (error, info)=>{
  if (error) {
   return console.log(error);
  } 
  console.log('message was sent');
    console.log(info)

});
//}

// module.exports = {
//     sendWelcomeEmail
// }

