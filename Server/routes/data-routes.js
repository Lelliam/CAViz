var express = require('express');
var router = express.Router();

/* GET Data*/
router.get('/test', function(req, res, next) {
    res.send({'test':'test'});
});

module.exports = router;
