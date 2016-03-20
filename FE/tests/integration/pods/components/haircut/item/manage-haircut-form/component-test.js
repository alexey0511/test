import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('haircut/item/manage-haircut-form', 'Integration | Component | haircut/item/manage haircut form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{haircut/item/manage-haircut-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#haircut/item/manage-haircut-form}}
      template block text
    {{/haircut/item/manage-haircut-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
