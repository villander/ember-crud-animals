import Ember from 'ember';

export default Ember.Test.registerAsyncHelper('shouldHaveRecordSaved', function(app, assert) {
  fillIn('#first-name', 'Leão');
  fillIn('#last-name', 'Marinho');
  click('#create-or-update');
  return app.testHelpers.wait();
});
