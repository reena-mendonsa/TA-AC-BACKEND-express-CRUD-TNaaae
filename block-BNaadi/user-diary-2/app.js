var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');

//connection to mongoDB database
mongoose.connect('mongodb://localhost/user-diary-2',(err)=>{
    console.log(err? err : 'Connected to database' );
});

// middlewares

var app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// view engine

app.set('view engine','ejs');
app.set('views' , path.join(__dirname ,'views'));

// static directory

app.use(express.static(path.join(__dirname,'public')));


// routing middleware

app.use('/',indexRouter);
app.use('/users', userRouter);

// error handler

app.use((req,res,next)=>{
    res.status(404).send('page not found');
});

// listener

app.listen(3000 ,() =>{
    console.log('Listening on port 3k');
});