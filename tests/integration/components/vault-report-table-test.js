import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('vault-report-table', 'Integration | Component | report table', {
  integration: true
});

test('it renders', function(assert) {
  this.set('tags', [{ tagName: 'tax-id', tagValue: '5', records: '23431'},
  { tagName: 'credit-card', tagValue: '3', records: '32374'},
  { tagName: 'password', tagValue: '0.5', records: '134234'},
  { tagName: 'dob', tagValue: '0.25', records: '82364'},
  { tagName: 'address', tagValue: '0.1', records: '298732'},
  { tagName: 'account-statement', tagValue: '25', records: '567'},
  { tagName: 'bank-account', tagValue: '3', records: '34535'}])

  this.render(hbs`{{vault-report-table tags=tags}}`);
  assert.equal(this.$('tr').length, 8);
  assert.equal(this.$('tr')[1].getElementsByTagName('td')[1].innerText, '5');
  assert.equal(this.$('tr')[4].getElementsByTagName('td')[2].innerHTML, '82364');
});
