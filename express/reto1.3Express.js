const express = require('express');
const app = express();

app.get('/',function(req,res)
{
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers["user-agent"]);
    res.json({ok: true, message: 'Recibido!'});
});


app.get('/bye', function(req,res)
{
    res.json({ok: true, message: 'Adios!'});
});

app.listen(4000);
