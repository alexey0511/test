import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('haircut-table-component', 'Integration | Component | haircut table component', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{haircut-table-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#haircut-table-component}}
      template block text
    {{/haircut-table-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
