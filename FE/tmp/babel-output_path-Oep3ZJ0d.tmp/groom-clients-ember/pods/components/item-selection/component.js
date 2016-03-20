define('groom-clients-ember/pods/components/item-selection/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['selectionBox'],

    actions: {
      makeSelected: function makeSelected(item) {
        this.get('items').filterBy('isActive').forEach(function (item) {
          item.set('isActive', false);
        });
        item.set('isActive', true);

        this.sendAction('itemSelected', item);
      }
    }
  });
});