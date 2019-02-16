let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/home', (req, res, next) => {
  res.render('index', { title: 'Home' });
});

/* GET about me page. */
router.get('/aboutme', (req, res, next) => {
  res.render('index', { title: 'About' });
});

/* GET projects page. */
router.get('/projects', (req, res, next) => {
  res.render('index', { title: 'Contact' });
});

/* GET services page. */
router.get('/services', (req, res, next) => {
  res.render('index', { title: 'Products' });
});

/* GET contacts page. */
router.get('/contacts', (req, res, next) => {
  res.render('index', { title: 'Services' });
});

module.exports = router;
