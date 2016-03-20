import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({

  startDate:    attr('date'),
  endDate:     attr('date')

});
