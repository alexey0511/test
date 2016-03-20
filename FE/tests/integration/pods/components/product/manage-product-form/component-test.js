import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('product/manage-product-form', 'Integration | Component | product/manage product form', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{product/manage-product-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#product/manage-product-form}}
      template block text
    {{/product/manage-product-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
