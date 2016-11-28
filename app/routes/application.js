import Ember from 'ember';

export default Ember.Route.extend({
  connectivity: Ember.inject.service('connectivity'),
  init() {
    this._super(...arguments);
    window.setInterval(this.checking, 3000);
  },
  checking() {
    $.getJSON('/ajax_test');
  },
  afterModel: function () {
    this.transitionTo('animals');
  },
  actions: {
    transitionTo(route) {
      this.transitionTo(route);
    }
  }
});
