import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('protected');
  this.route('products');
  this.route('users');
  this.route('staffs', {path: '/employees'});

  this.route('clients');
  this.route('clients.item', {path: 'clients/:client_id'});
  this.route('clients.new', {path: 'clients/new'});

  this.route('haircuts', {path: 'haircuts'});
  this.route('haircuts.item', {path: 'haircuts/:haircut_id'});

  this.route('orders');

  this.route('reports', function() {
    this.route('weekly', function() {
      this.route('person', function() {
        this.route('item', {path: ':startDate'});
      });
    });
  });

  this.route('not-found', { path: '/*path' });
});

export default Router;
