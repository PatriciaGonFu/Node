const express = require('express');
const app = express();

app.get('/',function(req,res)
{
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers["user-agent"]);
    res.send('Petición recibida del cliente');
});

app.listen(3000);
