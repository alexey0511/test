define('groom-clients-ember/pods/report/model', ['exports', 'ember-data'], function (exports, _emberData) {
  // import Ember from 'ember';

  var attr = _emberData['default'].attr;
  var belongsTo = _emberData['default'].belongsTo;

  // const { computed } = Ember;

  exports['default'] = _emberData['default'].Model.extend({

    week_id: belongsTo('week'),
    report: attr('string')

  });
});