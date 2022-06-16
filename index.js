const express=require('express');
const cors=require('cors');
const app=express();
const mongoose=require('mongoose');
var bodyParser=require('body-parser');
const morgan=require('morgan');
const dotenv=require('dotenv');

mongoose.connect('mongodb://localhost:27017/BookStore',()=>{
    console.log("Connectd to Mongodb");
});
app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));


app.get('/api',(req,res)=>{
res.status(200).json("hello")
})
app.listen(8000, 'localhost', function(err) {
    if (err) return console.log(err);
    console.log("Listening at http://localhost:%s", 8000);
});