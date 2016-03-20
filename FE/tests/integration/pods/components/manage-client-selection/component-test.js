import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('manage-client-selection', 'Integration | Component | manage client selection', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{manage-client-selection}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#manage-client-selection}}
      template block text
    {{/manage-client-selection}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
