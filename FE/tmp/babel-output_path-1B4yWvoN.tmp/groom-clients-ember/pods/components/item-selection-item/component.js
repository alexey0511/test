define('groom-clients-ember/pods/components/item-selection-item/component', ['exports', 'ember'], function (exports, _ember) {
  var computed = _ember['default'].computed;
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['column'],
    isActive: false,
    orange: computed.alias('isActive'),
    inverted: computed.alias('isActive'),

    actions: {
      makeActive: function makeActive() {
        this.attrs.makeSelected(this.get('item'));
        this.set('isActive', true);
      }
    }
  });
});