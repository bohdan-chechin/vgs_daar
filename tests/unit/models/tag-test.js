import { moduleForModel, test } from 'ember-qunit';

moduleForModel('tag', 'Unit | Model | tag', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject({
    tagName: 'testtag',
    tagValue: 10,
    records: 142
  });
  assert.ok(!!model);
  assert.equal(model.get('impact'), '$1,420.00')
  assert.equal(model.get('impactForCSV'), '$1420.00')
});
