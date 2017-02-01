var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  const options = {
    root: './views'
  };
  res.sendFile('index.html', options);
});
router.get('/jade', function(req, res) {
  res.render('index.jade', { title: 'jade page' });
});

module.exports = router;
