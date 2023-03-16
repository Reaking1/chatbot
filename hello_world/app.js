const express = require('express');

//Express initialize

const app = express();

const port = 8000;

//Create api

app.post('/hello_world',(req,res) => {
    res.send(
        [{

            "message": "Kompose!"
        
        }, {
        
            "message": "Select the suitable option",
        
            "metadata": {
        
            "contentType": "300",
        
                "templateId": "6",
        
                "payload": [{
        
                    "title": "Welcome Intent",
        
                    "message": "Welcome Intent",
        
                }, {
        
                    "title": "Fallback Intent",
        
                    "message": "Fallback Intent"
        
                }]
        
            }
        
        }])
        
        })

app.listen(port,() => {
    console.log('listen port 8000');
})