define('groom-clients-ember/pods/application/route', ['exports', 'ember', 'ember-simple-auth/mixins/application-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsApplicationRouteMixin) {
    var service = _ember['default'].inject.service;
    exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsApplicationRouteMixin['default'], {
        sessionUser: service('session-user'),

        location: _ember['default'].computed.alias('salon.location'),

        beforeModel: function beforeModel() {
            return this._loadCurrentUser();
        },

        sessionAuthenticated: function sessionAuthenticated() {
            var _this = this;

            this._super.apply(this, arguments);
            this._loadCurrentUser()['catch'](function () {
                return _this.get('session').invalidate();
            });
        },

        _loadCurrentUser: function _loadCurrentUser() {
            return this.get('sessionUser').loadCurrentUser();
        },

        setupController: function setupController(controller, model) {
            this._super(controller, model);

            controller.set('location', this.get('sessionUser.salon.location'));
        },

        actions: {
            error: function error(_error) {
                if (_error.status === 0) {
                    alert('Sorry, but we\'re having trouble connecting to the server. This problem is usually the result of a broken Internet connection. You can try refreshing this page.');
                } else if (_error.status === 403) {
                    //go to some default route
                } else if (_error.status === 401) {
                        //handle 401
                    } else if (_error.status === 404) {
                            this.transitionTo('404');
                        } else {
                            //            alert(error);
                        }
            }
        }
    });
});