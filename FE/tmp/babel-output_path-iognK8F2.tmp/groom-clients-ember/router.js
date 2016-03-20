define('groom-clients-ember/router', ['exports', 'ember', 'groom-clients-ember/config/environment'], function (exports, _ember, _groomClientsEmberConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _groomClientsEmberConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('login');
    this.route('protected');
    this.route('product', { path: '/products' });
    this.route('user', { path: '/users' });
    this.route('staff', { path: '/employees' });

    this.route('client', { path: '/clients' });
    this.route('client.item', { path: 'clients/:client_id' });
    this.route('client.new', { path: 'clients/new' });

    this.route('haircut', { path: '/haircuts' });
    this.route('haircut.item', { path: 'haircuts/:haircut_id' });

    this.route('not-found', { path: '/*path' });
  });

  exports['default'] = Router;
});