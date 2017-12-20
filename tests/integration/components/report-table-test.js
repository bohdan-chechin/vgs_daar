import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('report-table', 'Integration | Component | report table', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('tags', [{ tagName: 'tax-id', tagValue: '5', records: '23431'},
  { tagName: 'credit-card', tagValue: '3', records: '32374'},
  { tagName: 'password', tagValue: '0.5', records: '134234'},
  { tagName: 'dob', tagValue: '0.25', records: '82364'},
  { tagName: 'address', tagValue: '0.1', records: '298732'},
  { tagName: 'account-statement', tagValue: '25', records: '567'},
  { tagName: 'bank-account', tagValue: '3', records: '34535'}])

  this.render(hbs`{{report-table}} tags`);

  assert.equal(this.$().text().trim(), '');

  assert.equal(this.$().text().trim(), 'template block text');
});
