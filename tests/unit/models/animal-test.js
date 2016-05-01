import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('animal', 'Unit | Model | animal', {
  // Specify the other units that are required for this test.
  needs: []
});

let fullName = Ember.computed('firstName', 'lastName', function() {
  return this.get('firstName') + ' ' + this.get('lastName');
});

test('it has the attributes: firstName and lastName', function(assert) {
  const model = this.subject();
  const hasAttrFirstName = Object.keys(model.toJSON()).indexOf('firstName') > -1;
  const hasAttrLastName = Object.keys(model.toJSON()).indexOf('lastName') > -1;
  assert.ok(hasAttrFirstName);
  assert.ok(hasAttrLastName);
});

test('fullName', function(assert){
  let animal = this.subject({firstName: 'Cavalo', lastName: 'Marinho', fullName});
  assert.equal(animal.get('fullName'), 'Cavalo Marinho');

  Ember.run(function() {
    animal.set('firstName', 'Macaco');
  });

  assert.equal(animal.get('fullName'), 'Macaco Marinho');

  Ember.run(function() {
    animal.set('lastName', 'Prego');
  });

  assert.equal(animal.get('fullName'), 'Macaco Prego');
});
