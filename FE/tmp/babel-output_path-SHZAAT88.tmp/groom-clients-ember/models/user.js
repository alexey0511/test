define('groom-clients-ember/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({

    name: _emberData['default'].attr('string'),
    username: _emberData['default'].attr('string'),
    password: _emberData['default'].attr('string'),
    location: _emberData['default'].attr('string'),
    role: _emberData['default'].attr('string')
  });
});