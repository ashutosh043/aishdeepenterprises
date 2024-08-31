const express = require('express');
const path = require('path');
const app =express();
const publicpath= path.join(__dirname,'views');

app.set('view engine','ejs')

app.get('/',(_,res)=>{
    res.sendFile(`${publicpath}/index.ejs`)
})
app.get('/index',(_,res)=>{
    res.sendFile(`${publicpath}/index.ejs`)
})

app.get('/about',(_,res)=>{
    res.sendFile(`${publicpath}/about.html`)
})

app.get('/*',(_,res)=>{
    res.sendFile(`${publicpath}/404.html`)
})


app.listen(3000);