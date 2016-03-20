/*jshint node:true*/

// To use it create some files under `mocks/`
// e.g. `server/mocks/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };

module.exports = function(app) {
  var globSync   = require('glob').sync;
  var mocks      = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);
  var proxies    = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);

  // Log proxy requests
  var morgan  = require('morgan');
  app.use(morgan('dev'));
  app.get('/api/status', function(req,res) {
    res.status(200).end();

  });
var mongoose = require('mongoose');
  mongoose.connect('mongodb://alexey0511:a1725362@ds034208.mlab.com:34208/groomclients_dev');
  mongoose.connection.on("open", function() {
      console.log("connection to database done!");
  });
  mongoose.connection.on("error", function() {
    console.log("error");
});
  mocks.forEach(function(route) { route(app); });
  proxies.forEach(function(route) { route(app); });

};
