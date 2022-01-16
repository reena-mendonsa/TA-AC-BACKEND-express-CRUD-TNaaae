var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

//connect to mongodb

mongoose.connect('mongodb://localhost/sample',
 { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  console.log(err ? err:"Connected true");
})

var app = express();

// middleware

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

// routes

app.get("/", (req, res) => {
  res.render('index');
})

// error handler middleware

app.use((req, res, next) => {
  res.send("Page not found")
});

// listener

app.listen(3000, () => {
  console.log("Server is listening at port 3k");
})