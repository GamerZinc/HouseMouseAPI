var express = require('express');
var router = express.Router();

router.route('/')
    .get(function(req, res) {
        res.render('photo',{title: 'Photo Album', id: req.query.id, secret: req.query.secret, server: req.query.server, farm: req.query.farm, imgType: req.query.imgType });
});

module.exports = router;