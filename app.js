const express = require('express');
const app =express();

// routes

app.get('/',(req,resp)=>{
    resp.send('Task manager')
})
const port = 5000;
app.listen(port,console.log(`server is listening on port ${port}...`))