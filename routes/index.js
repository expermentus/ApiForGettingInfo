var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  console.log(req.body)
  res.render('index', { title: 'Express' });
});

router.get('/.well-known/acme-challenge/oYRtOfTC88aaXx7nGmSwA9PMEkor-46UkBjo7X4FW9E', function(req, res, next) {
  res.send('oYRtOfTC88aaXx7nGmSwA9PMEkor-46UkBjo7X4FW9E.9F7IKfgA0V2CIz8K54OarLr1qk-6-AUL2icvb3hCUuc');
});

module.exports = router;
