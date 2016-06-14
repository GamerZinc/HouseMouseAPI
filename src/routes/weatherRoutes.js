var express = require('express');
var router = express.Router();

router.route('/')
    .get(function(req, res) {
        res.render('weather',{title: 'Weather Report', list:['a','b']});
});

module.exports = router;