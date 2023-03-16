const express = require('express');

//Express initialize

const app = express();

const port = 8000;

//Create api

app.post('/hello_world',(req,res) => {
    res.send('Hello World');
})

app.listen(port,() => {
    console.log('listen port 8000');
})