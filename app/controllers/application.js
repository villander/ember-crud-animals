import Ember from 'ember';

export default Ember.Controller.extend({
  connectivity: Ember.inject.service('connectivity')
});
