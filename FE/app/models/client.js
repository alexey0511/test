import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({

  firstName:      DS.attr('string'),
  lastName:      DS.attr('string'),
  fullName: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),

  email:       DS.attr('string'),
  phone1:      DS.attr('string'),
  phone2:      DS.attr('string'),

  progress:    DS.attr('number'),
  visits:      DS.attr('number'),
  freeVisits:  DS.attr('number'),
  points:      DS.attr('number'),

  createdOn:   DS.attr('date'),
  lastVisit:   DS.attr('date'),

  token:       DS.attr('string')
});
