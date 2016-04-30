import { moduleFor, test } from 'ember-qunit';

moduleFor('route:animals/index', 'Unit | Route | animals/index', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
