var express = require('express'),
    app     = express();

app.set('port', process.env.PORT || 8080);
app.use(express.static('static'));

var server = app.listen(app.get('port'), function(){
  console.log('Weirdo running on', app.get('port'));
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/static/html/main.html');
})

app.get('/tumblr/key', function(req, res){
  res.send('C26BDb6XSZlxebjxb6nrbMF0tPcSisnz50WHxvR2mzCMC0emz0');
})
