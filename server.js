// console.log('getting express js runing!')

const express = require('express');
const path = require('path');

const app= express();


app.use(express.static('public'))
app.get('/', (req , res , next)=>{
    res.sendFile(path.resolve(__dirname, 'index.html'))
});

app.get('/json',(req, res, next)=>{
    res.json({
        fName: 'Baktash ', lName:'Sana', ocopation: 'software enginner', 
    });
});












app.listen(3000, ()=>console.log('http://localhost:3000'));