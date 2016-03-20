define('groom-clients-ember/pods/application/route', ['exports', 'ember', 'ember-simple-auth/mixins/application-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsApplicationRouteMixin) {
    exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsApplicationRouteMixin['default'], {
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
                            alert(_error);
                        }
            }
        }
    });
});