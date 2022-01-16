var express = require("express");
var mongoose = require("mongoose");

var path = require("path");
var userRoutes = require("./routers/users");

// connect to mongodb

mongoose.connect('mongodb://localhost/user-diary', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err) => {
   console.log(err ? err : 'Connected true');
});

// middlewares

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// setup view engine

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

// routing middleware

app.get('/', (req, res) => {
  res.render('index')
})

app.use('/users', userRoutes);

// error handler middleware

app.use((req, res, next) => {
  res.status(404).send("Page not found")
})

// listener

app.listen(3000, () => {
  console.log("Running at port 3k");
})