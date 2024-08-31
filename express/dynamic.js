const express = require('express');
const bodyparser= require('body-parser');
const app = express();
const port = 3000;
const path = require('path')

app.set('view engine','ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyparser.urlencoded({extended:true}));


app.post("/" , (req,res)=>{

  const comm= req.body.message;
  console.log(comm)
  const name =req.body.username;

})





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