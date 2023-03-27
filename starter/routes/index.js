var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/choose', function (req, res, next) {
  res.render('choose', { title: 'Express' });
});
router.get('/choose/1', function (req, res, next) {
  res.render('methodchoices1', { title: 'Express' });
});
router.get('/choose/2', function (req, res, next) {
  res.render('methodchoices2', { title: 'Express' });
});
router.get('/choose/3', function (req, res, next) {
  res.render('methodchoices3', { title: 'Express' });
});
router.get('/choose/1/1', function (req, res, next) {
  res.render('1/1', { title: 'Express' });
});
router.get('/choose/1/2', function (req, res, next) {
  res.render('1/2', { title: 'Express' });
});
router.get('/choose/1/3', function (req, res, next) {
  res.render('1/3', { title: 'Express' });
});
router.get('/choose/2/1', function (req, res, next) {
  res.render('2/sdzpzcff', { title: 'Express' });
});
router.get('/choose/2/2', function (req, res, next) {
  res.render('2/quzheng', { title: 'Express' });
});

router.get('/choose/3/1', function (req, res, next) {
  res.render('3/1', { title: 'Express' });
});
router.get('/choose/3/2', function (req, res, next) {
  res.render('3/2', { title: 'Express' });
});
router.get('/choose/3/3', function (req, res, next) {
  res.render('3/3', { title: 'Express' });
});
router.get('/choose/3/4', function (req, res, next) {
  res.render('3/4', { title: 'Express' });
});
router.get('/choose/3/5', function (req, res, next) {
  res.render('3/5', { title: 'Express' });
});
router.get('/choose/3/6', function (req, res, next) {
  res.render('3/6', { title: 'Express' });
});

module.exports = router;
