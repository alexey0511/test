import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('order-sell-form-component', 'Integration | Component | order sell form component', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{order-sell-form-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#order-sell-form-component}}
      template block text
    {{/order-sell-form-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
