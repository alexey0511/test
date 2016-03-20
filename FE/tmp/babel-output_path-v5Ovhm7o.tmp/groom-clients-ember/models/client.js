define('groom-clients-ember/models/client', ['exports', 'ember', 'ember-data'], function (exports, _ember, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({

    firstName: _emberData['default'].attr('string'),
    lastName: _emberData['default'].attr('string'),
    fullName: _ember['default'].computed('firstName', 'lastName', function () {
      return this.get('firstName') + ' ' + this.get('lastName');
    }),

    email: _emberData['default'].attr('string'),
    phone1: _emberData['default'].attr('string'),
    phone2: _emberData['default'].attr('string'),

    progress: _emberData['default'].attr('number'),
    visits: _emberData['default'].attr('number'),
    freeVisits: _emberData['default'].attr('number'),
    points: _emberData['default'].attr('number'),

    createdOn: _emberData['default'].attr('date'),
    lastVisit: _emberData['default'].attr('date'),

    token: _emberData['default'].attr('string')
  });
});