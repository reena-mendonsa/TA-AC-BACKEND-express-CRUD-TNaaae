var express = require('express');
var router = express.Router();
var User = require('../model/User');
router.get('/new', (req, res) => {
  res.render('newusers');
});

router.get('/', (req, res,next) => {
  User.find({}, (err, users) => {
    console.log(err, users, "All users");
    if (err) return next(err);
    res.render('userList', { users: users });
  })
})

router.get('/:id', (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.send(user);
  })
})

router.post('/', (req, res) => {
  let data = req.body;
  User.create(data, (err, createdUser) => {
    if (err) return res.redirect('/users/new');
    res.redirect('/');
  });
});

module.exports = router;