import Ember from 'ember';

export default Ember.Test.registerAsyncHelper('shouldHaveRecordSaved', function(app, assert) {
  andThen(() => {
    assert.equal(currentURL(), '/animals');
  });
});
