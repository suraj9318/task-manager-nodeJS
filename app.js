const express = require('express');
const app =express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config();
const notFound = require('./middleware/not-found');

const cors = require('cors');
app.use(cors());

// middleware
app.use(express.json())
// routes
app.use('/api/v1/tasks',tasks);
app.use(notFound);

const port = 5000;
const start  = async() =>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port,console.log(`server is listening on port ${port}...`))
    }catch(err){
        console.log(err)
    }
}
start();