const express = require('express');

//Express initialize

const app = express();

const port = 8000;

//Create api

app.post('/hello_world',(req,res) => {
    res.send([{
        "message": "A message can be simple as a plain text" 
    }, {
        "message": "A message can be a rich message containing metadata",
        "metadata": {
        "contentType": "300",
            "templateId": "6",
            "payload": [{
                "title": "Suggested Reply button 1",
                "message": "Suggested Reply button 1"
            }, {
                "title": "Suggested Reply button 2",
                "message": "Suggested Reply button 2" 
            }]
        }
    }]);
})

app.listen(port,() => {
    console.log("Server is running");
})