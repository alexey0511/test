var users = require('../api/user');
module.exports = function(router) {

  router.route('/token').post(function(req, res) {
    users.login(req, res);
  });



  router.route('/api/users')
  .post(function(req, res) {
    users.addUser(req,res);
  })
  .get(function(req,res) {
    users.getAllUsers(req,res);
  });
  router.route('/api/users/:id')
  .get(function(req, res) {
    users.getUser(req,res);
  });

  router.route('*').get(function(req, res) {
    res.sendFile('/home/alexey/projects/be-groombarbers/public/index.html'); // load our public/index.html file
   });
};
