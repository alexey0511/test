import DS from 'ember-data';
import Ember from 'ember';

const { attr, belongsTo } = DS;
const { computed } = Ember;

export default DS.Model.extend({

  startDate: attr('date'),
  endDate:   attr('date'),
  report:    attr('string'),
  staff:     belongsTo('staff'),
  eftpos:    attr('number'),
  cash:      attr('number'),
  total:     computed('eftpos', 'cash', function() {
    return this.get('cash') + this.get('eftpos');
  })

});
