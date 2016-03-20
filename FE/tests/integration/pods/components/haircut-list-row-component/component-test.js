import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('haircut-list-row-component', 'Integration | Component | haircut list row component', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{haircut-list-row-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#haircut-list-row-component}}
      template block text
    {{/haircut-list-row-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
