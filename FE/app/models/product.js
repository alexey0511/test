import DS from 'ember-data';
import Ember from 'ember';

const { attr } = DS;
const { computed } = Ember;

export default DS.Model.extend({

  name:          attr('string'),
  description:   attr('string'),
  productType:   attr('string'),
  price:         attr('number'),

  label: computed('name', 'price', function() {
    return `${this.get('name')} : $${this.get('price')}`;
  })
});
