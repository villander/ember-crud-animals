import Ember from 'ember';
import config from '../config/environment';

export default Ember.Service.extend({
  init() {
    this._super(...arguments);
  },
  check() {
    return this.get('connectivity').check();
  },
});
