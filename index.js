const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./routers/User-routes');
const adminRoutes = require('./routers/Admin-route');
const HttpError = require('./utils/http-error');

// Configuration statements
app.use(bodyParser.json());



app.use(express.urlencoded({extended:false}));
app.use(express.json());

//connecting mongoDB with server.
mongoose.connect("mongodb://localhost:27017/blog",{
    useUnifiedTopology:true,
    useNewUrlParser:true
})

//creating promise to check connection.
.then(()=>{
    console.info("mongoDB is connected successfully");
})
.catch((error)=>{
    console.error("mongoDB connection failed.");
});

//using API's for user.
app.use('/user',userRoutes);

//using API's for Admin.
app.use('/admin',adminRoutes);

//this server will run on 3001 port number.
const port = 3001;
const localhost = '127.0.0.1'
app.listen(port,()=>{
    console.log(`this server is running on port ${port}`);
})