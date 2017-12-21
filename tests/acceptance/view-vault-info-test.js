import { test } from 'qunit';
import moduleForAcceptance from 'vgs/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | view vault info');

test('visiting /vaults then select one and check out its info', function(assert) {
  visit('/vaults');
  andThen(function() {
    assert.equal(currentURL(), '/vaults');
    click('.nav a:eq(2)')
  });
  andThen(() => {
    assert.equal(currentURL(), '/vaults/vlt-asdf1235');
    assert.equal(find('.vault-details').text().includes('ID: vlt-asdf1235'), true)
    server.shutdown();
  })
});
