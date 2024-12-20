const express = require('express');
const mongoose = require('mongoose');
const bodyparser= require('body-parser');
const nodemailer = require("nodemailer");
const app = express();
const port = 3000;
const path = require('path');
const {mongoDbUrl} = require('./config/configuration');

//  Database Connection 

async function databaseConnection() {
  try{
    await mongoose.connect(mongoDbUrl)
    console.log('Database Connection Successfull')
  }catch(error){
     console.log('Database Connection Failed');
  }

}

databaseConnection();






app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
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
});

app.get('/multipurpose-vials',(_,res)=>{
  res.render(`multipurpose-vials`)
})

app.get('/container',(_,res)=>{
  res.render(`container`)
})

app.get('/ria-vials',(_,res)=>{
  res.render(`ria-vials`)
})

app.get('/thankyou',(_,res)=>{
  res.render(`thankyou`)
});

app.get('/register',(_,res)=>{
  res.render(`register`)
});

app.post('/register', (req,res)=>{
     res.send('You Sucessfully Register')   
})

app.get('/login',(_,res)=>{
  res.render(`login`)
});




app.get('/admin',(req,res)=>{
  res.render('admin');
})

app.get('/*',(_,res)=>{
    res.render(`404`)
})






app.post("/mail", function(req, res){
   var name =req.body.username;
   var email =req.body.email;
   var mobile =req.body.mobile;
   var message = req.body.message;
   var selectOption= req.body.select;

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
    html:` Name:  ${name} <br> Email:  ${email} <br> Mobile No: ${mobile} <br> Product: ${selectOption} <br> Message  ${message} `

   }

   transpoter.sendMail(mailOptions, function( error, info){
    if(error){
      console.log(error)
    }
    else{
      console.log('Send Email' + info.response) ;
     
      res.redirect('thankyou');

    }

   })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})