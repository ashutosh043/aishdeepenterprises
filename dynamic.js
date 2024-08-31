const express = require('express');
const bodyparser= require('body-parser');
const app = express();
const nodemailer = require("nodemailer");
const port = 3000;
const path = require('path')

app.set('view engine','ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyparser.urlencoded({extended:true}));


app.post("/" , (req,res)=>{

  const comm= req.body.username;
  const name =req.body.email;
  const email =req.body.mobile;
  const message=req.body.message;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
       user: 'ashush95@gmail.com',
          pass: 'dtck unhe uqhd sdoa'
    },
  });





  var  mailOptions = {
    from: '"Ashutosh Kumar 👻" <ashusah95@gmail.com>', // sender address
    to: req.body.email,
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  };

  transporter.sendMail(mailOptions,function(error, info){
        if(error){
          console.log(error)
        }
        else{
          res.redirect('/');
          console.log('emal snd' + info.response);
        }

  })

  
  

});





app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about',(_,res)=>{
    res.render(`about`)
})

app.get('/blood-nonvacuum-vials',(_,res)=>{
  res.render(`blood-nonvacuum-vials`)
})

app.get('/blood-vacuum-vials',(_,res)=>{
  res.render(`blood-vacuum-vials`)
})

app.get('/contact',(_,res)=>{
  res.render(`contact`)
})

app.get('/container',(_,res)=>{
  res.render(`container`)
})

app.get('/ria-vials',(_,res)=>{
  res.render(`ria-vials`)
})

app.get('*',(_,res)=>{
    res.render(`404`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})