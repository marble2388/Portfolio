var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jeff Hall',
    message: 'Still hoping that web dev is not the only potential job after this'});
});

/* GET about me page */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me',
    message: 'Jeff Hall - thats all you need to know' });
});
/* GET projects page. */
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Contact Me',
    message: 'Huge Important Impressive Projects'});
});
/* GET services page. */
router.get('/servicePage', function(req, res, next) {
  res.render('servicePage', { title: 'Contact Me',
    message: 'Prices will vary - NO web dev ever there isnt enough money in the world'});
});
/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me',
    message: 'Please do not contact'});
});
module.exports = router;
