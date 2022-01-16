var express = require("express");
var router = express.Router();



router.get('/', (req, res) => {
  res.render('users')
});

router.get('/new', (req, res) => {
  res.render('newUser');
});

router.post('/', (req, res) => {
  res.send(req.body);
});

router.get('/:id', (req, res) => {
  var id = req.params.id;
  res.render('singleUser');
});

router.get('/:id/edit', (req, res) => {
  var id = req.params.id;
  res.render('newUser');
});

router.put('/:id', (req, res) => {
  var id = req.params.id;
  res.render('singleUser');
});

router.delete('/:id', (req, res) => {
  var id = req.params.id;
  res.render('singleUser');
});



module.exports = router;