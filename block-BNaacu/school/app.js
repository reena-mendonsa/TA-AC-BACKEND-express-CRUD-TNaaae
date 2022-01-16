var express = require("express");
var mongoose = require("mongoose");

var path = require("path");

var studentRouter = require("./routes/student");

// connect to mongoDB

mongoose.connect(
  'mongodb://localhost/school',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Connected true');
  }
);

// initializing the server

var app = express();

// middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// setup view engine

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// routing middleware

app.use('/students', studentRouter);

// app.get('/', (req, res) => {
//   res.render('views', { list: ['ankit', 'suraj', 'prashant', 'ravi'] });
// })
// error handler middleware

app.use((req, res, next) => {
  res.status(404).send("Page not found");
})

// listener

app.listen(3000, () => {
  console.log("Server is listening at 3k ");
})