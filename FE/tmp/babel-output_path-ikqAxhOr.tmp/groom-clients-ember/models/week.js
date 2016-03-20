define('groom-clients-ember/models/week', ['exports', 'ember-data'], function (exports, _emberData) {
  var attr = _emberData['default'].attr;
  exports['default'] = _emberData['default'].Model.extend({

    startDate: attr('date'),
    endDate: attr('date')

  });
});