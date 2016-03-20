import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('small-client-new-form', 'Integration | Component | small client new form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{small-client-new-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#small-client-new-form}}
      template block text
    {{/small-client-new-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
