import { test } from 'qunit';
import moduleForAcceptance from 'vgs/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | view vault analytics');

test('visiting /view-vault-analytics', function(assert) {
  visit('/vaults/vlt-asdf1235');
  andThen(function() {
    assert.equal(currentURL(), '/vaults/vlt-asdf1235');
    click('.analytics-link')
  });
  andThen(() => {
    assert.equal(currentURL(), '/vaults/vlt-asdf1235/analytics');
    assert.equal(find('.download-csv').text(), 'Download as CSV');
    server.shutdown();
  })
});
