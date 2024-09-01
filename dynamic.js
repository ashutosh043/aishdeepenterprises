const express = require('express');
const bodyparser= require('body-parser');
const nodemailer = require("nodemailer");
const port = 3000;
const path = require('path');
const { measureMemory } = require('vm');
const app = express();
app.set('view engine','ejs')

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json())

app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'views/index.ejs')));



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

app.post("/mail", function(req, res){
   var name =req.body.username;
   var email =req.body.email;
   var mobile =req.body.mobile;
   var message = req.body.message;

   var transpoter = nodemailer.createTransport({
      service:'gmail',
      auth:{
         user:'ashusah95@gmail.com',
         pass:'cdid nlpe emwy vygt',
      }
   });

   var mailOptions= {
    from: email,
    to:  'aishdeepenterprises2024@gmail.com',
    text:message

   }

   transpoter.sendMail(mailOptions, function( error, info){
    if(error){
      console.log(error)
    }
    else{
      console.log('Send Email' + info.response) ;
      res.redirect('/')
    }

   })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})