var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jeff Hall',
    message: 'Still Sleeping'});
});

/* GET about me page */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me',
    message: 'Jeff Hall' });
});
/* GET projects page. */
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Contact Me',
    message: 'Huge Important Impressive Projects'});
});
/* GET services page. */
router.get('/servicePage', function(req, res, next) {
  res.render('servicePage', { title: 'Contact Me',
    message: 'Prices will vary'});
});
/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me',
    message: 'Please do not contact'});
});
module.exports = router;
