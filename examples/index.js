
/**
 * Module exports.
 */

var express = require('express');

// instantiate app

var app = express();
app.set('view engine', 'jade');
app.set('views', 'examples');
app.use(app.router);
app.use( express.static( process.cwd() ) );
app.get('/', function(req, res){
  res.render('index');
});
app.listen(3000);
console.log('Examples server listening on port 3000');
