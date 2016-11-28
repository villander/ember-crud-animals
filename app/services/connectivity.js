import Ember from 'ember';
import config from '../config/environment';

export default Ember.Service.extend({
  init() {
    this._super(...arguments);
    window.Offline.options = config.emberOffline;
    this.set('connectivity', window.Offline);
  },
  check() {
    return this.get('connectivity').check();
  },
});
