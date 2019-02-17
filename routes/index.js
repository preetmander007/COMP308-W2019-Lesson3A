let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Home' });
});

/* GET about me page. */
router.get('/aboutme', (req, res, next) => {
  res.render('aboutme', { title: 'Aboutme' });
});

/* GET projects page. */
router.get('/projects', (req, res, next) => {
  res.render('projects', { title: 'Projects' });
});

/* GET services page. */
router.get('/services', (req, res, next) => {
  res.render('services', { title: 'Services' });
});

/* GET contacts page. */
router.get('/contacts', (req, res, next) => {
  res.render('contacts', { title: 'Contacts' });
});

module.exports = router;
