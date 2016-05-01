import { moduleForModel, test } from 'ember-qunit';

moduleForModel('animal', 'Unit | Model | animal', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it has the attributes: firstName and lastName', function(assert) {
  const model = this.subject();
  const hasAttrFirstName = Object.keys(model.toJSON()).indexOf('firstName') > -1;
  const hasAttrLastName = Object.keys(model.toJSON()).indexOf('lastName') > -1;
  assert.ok(hasAttrFirstName);
  assert.ok(hasAttrLastName);
});
