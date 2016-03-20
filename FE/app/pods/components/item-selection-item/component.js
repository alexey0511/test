import Ember from 'ember';

const { computed } = Ember;
export default Ember.Component.extend({
  classNames: ['column'],
  isActive: false,
  orange:  computed.alias('isActive'),
  inverted:  computed.alias('isActive'),

  actions: {
    makeActive() {
      this.attrs.makeSelected(this.get('item'));
      this.set('isActive', true);
    }
  }
});
