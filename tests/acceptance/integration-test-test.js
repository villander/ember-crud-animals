import { test } from 'qunit';
import Ember from 'ember'
import moduleForAcceptance from 'ember-crud-animals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | integration test');

test('visiting /integration-test', function (assert) {
  visit('/animals');

  andThen(function () {
    assert.equal(currentURL(), '/animals');
    let firstAnimal = find('div.md-list-item-text:eq(0) h2:first').text();
    let lastAnimal = find('div.md-list-item-text:eq(1) h2:first').text();
    assert.equal(firstAnimal, 'macaco');
    assert.equal(lastAnimal, 'Elefante');
  });
});


test('flow of to create a new animal', function (assert) {
  visit('/animals');

  click('#new-animal');

  andThen(function () {
    assert.equal(currentURL(), '/animals/new');
  });

  fillIn('#first-name', 'Leão');
  fillIn('#last-name', 'Marinho');
  click('#create-or-update');
  andThen(function () {
    assert.equal(currentURL(), '/animals');
    // Ember.run(() => {
    //   const animalCreated = find('div.md-list-item-text:eq(2) h2:first').text();
    //   assert.equal(animalCreated, 'Leão');
    // });

  });

});
