import Ember from 'ember';
import ManageItemsBaseMixin from '../../../mixins/manage-items-base';
import { module, test } from 'qunit';

module('Unit | Mixin | manage items base');

// Replace this with your real tests.
test('it works', function(assert) {
  let ManageItemsBaseObject = Ember.Object.extend(ManageItemsBaseMixin);
  let subject = ManageItemsBaseObject.create();
  assert.ok(subject);
});
