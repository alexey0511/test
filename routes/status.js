/*jshint node:true*/
module.exports = function(app) {
  app.get('/api/status', function(req,res) {
    res.status(200).end();
  });
};
