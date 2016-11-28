import Ember from 'ember';

export default Ember.Service.extend({
  init() {
    this._super(...arguments);
    this.set('connectivity', window.Offline);
  },
  check() {
    return this.get('connectivity').check();
  },
});
