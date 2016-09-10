var express = require('express'),
    app     = express();

app.set('port', process.env.PORT || 8080);
app.use(express.static('static'));

var server = app.listen(app.get('port'), function(){
  console.log('Weirdo running on', app.get('port'));
});

var mainRoute = function(req, res, next){
  res.sendFile(__dirname + '/static/html/main.html');
}

app.get(['/', '/music', '/blog', '/contact'], mainRoute);
// app.get('/*', mainRoute);

app.get('/keychain/tumblr', function(req, res){
  res.send('C26BDb6XSZlxebjxb6nrbMF0tPcSisnz50WHxvR2mzCMC0emz0');
});
