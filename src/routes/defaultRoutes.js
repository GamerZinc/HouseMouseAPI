var express = require('express');
var router = express.Router();

router.route('/')
    .get(function(req, res) {
        if(req.query.title) {
            res.render('index',{title: req.query.title, msg: req.query.msg });
        }else{
            res.render('index',{title: 'House Mouse Home Automation', msg: 'by Robert Porter'});
        }
});
module.exports = router;