// // modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
// // set our port
var port           = process.env.PORT || 3000;
var config         = require('./config.js');
env = process.env.NODE_ENV || 'development';

// set up mongoose
var mongoose       = require('mongoose');
mongoose.connect(config[env].db);
mongoose.connection.on("open", function() {
    console.log("connection to database done!");
});
mongoose.connection.on("error", function() {
  console.log("error");
});

// set the static files location for our Ember application
app.use(express.static(__dirname + '/public'));

//bodyParser Middleware to allow different encoding requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());       // to support JSON-encoded bodies


//Routes API
var globSync   = require('glob').sync;
var routes      = globSync('./routes/**/*.js', { cwd: __dirname }).map(require);
var router = express.Router();


routes.forEach(function(route) { route(app); });

router.route('*').get(function(req, res) {
  res.sendFile('/home/alexey/projects/be-groombarbers/public/index.html'); // load our public/index.html file
 });

app.use('/', router);


var server = app.listen(3000, function() {
  console.log('App started');
});

exports = module.exports = app;
