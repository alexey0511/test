import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('weekly-report-component', 'Integration | Component | weekly report component', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{weekly-report-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#weekly-report-component}}
      template block text
    {{/weekly-report-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
