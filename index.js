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
