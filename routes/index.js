let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/home', (req, res, next) => {
  res.render('index', { title: 'Home' });
});

router.get('/aboutme', (req, res, next) => {
  res.render('index', { title: 'About' });
});

router.get('/projects', (req, res, next) => {
  res.render('index', { title: 'Contact' });
});

router.get('/Services', (req, res, next) => {
  res.render('index', { title: 'Products' });
});

router.get('/contacts', (req, res, next) => {
  res.render('index', { title: 'Services' });
});

module.exports = router;
