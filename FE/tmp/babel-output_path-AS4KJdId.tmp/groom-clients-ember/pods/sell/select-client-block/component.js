define('groom-clients-ember/pods/sell/select-client-block/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    clientOptionsList: [_ember['default'].Object.create({ label: 'CASUAL', isActive: true }), _ember['default'].Object.create({ label: 'EXISTING', isActive: false }), _ember['default'].Object.create({ label: 'NEW', isActive: false })]
  });
});