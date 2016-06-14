var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var audioRouter = require('./src/routes/audioRoutes');
var clockRouter = require('./src/routes/clockRoutes');
var defaultRouter = require('./src/routes/defaultRoutes');
var photoRouter = require('./src/routes/photoRoutes');
var weatherRouter = require('./src/routes/weatherRoutes');

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/index', defaultRouter);
app.use('/clock', clockRouter);
app.use('/audio', audioRouter);
app.use('/photo', photoRouter);
app.use('/weather', weatherRouter);

app.get('/', function(req, res){
    res.render('index',{title: 'House Mouse Home Automation', list:['a','b']});
});

app.listen(port, function(err){
    console.log('running on port: ' + port);    
});