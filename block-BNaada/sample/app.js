var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');

// coonect to mongoDB database
mongoose.connect('mongodb://localhost/sample', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
},(err) => {
  console.log(err ? err : "Connected to the database");
});

// middlewares

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// setup view engine

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// setup static directory

app.use(express.static(path.join(__dirname, 'public')));

// routing middelwares

app.use("/", indexRouter);
app.use('/users', userRouter);

// error handler

app.use((req, res, next) => {
  res.status(404).send("page not found")
});

app.use((err, req, res, next) => {
  res.send(err);
})

// listener

app.listen(3000, () => {
  console.log("Listening on port 3k");
})