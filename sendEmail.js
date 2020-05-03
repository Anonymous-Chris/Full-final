
//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
var nodemailer = require('nodemailer');


const sendEmail = (name,email,message)=>{

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'math.contact2071@gmail.com',
          pass: 'rkpjmirlvzsyjhvo'
        },
        tls: {
          rejectUnauthorized: false
      }
      });
      
    
    var mailOptions = {
        from: 'math.contact2071@gmail.com',
        to: 'sk.niyara@gmail.com',
        subject: `Attention!`,
        text: `Name : ${name},
        Email : ${email} ,
        Message: ${message}`};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}

module.exports = {
    sendEmail
}

//   user: 'oral.labadie@ethereal.email', // generated ethereal user//
//pass: 'qm92DrnbYY2htMd6RU'// generated ethereal password