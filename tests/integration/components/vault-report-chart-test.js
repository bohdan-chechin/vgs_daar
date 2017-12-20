import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('vault-report-chart', 'Integration | Component | report chart', {
  integration: true
});

test('it renders', function(assert) {
  this.set('data', [])
  this.render(hbs`{{vault-report-chart data=data}}`);
  assert.equal(this.$().text().trim().includes(`Filter Activity`), true);
});
