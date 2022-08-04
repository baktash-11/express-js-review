// console.log('getting express js runing!')

const express = require('express');
const path = require('path')
const app= express();

app.get('/', (req , res , next)=>{
    res.send('Welcome to Express js')
});

app.get('/json',(req, res, next)=>{
    res.json({
        fName: 'Baktash ', lName:'Sana', ocopation: 'software enginner', 
    });
});












app.listen(3000, ()=>console.log('http://localhost:3000'));