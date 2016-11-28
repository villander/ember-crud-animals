import config from '../config/environment';

export function initialize(application) {
  // application.inject('route', 'foo', 'service:foo');
  // apply config to global Offline
  window.Offline.options = config.emberOffline;

  application.register('connectivity:main', window.Offline, { instantiate: false });
  application.inject('service:connectivity', 'connectivity', 'connectivity:main');
}

export default {
  name: 'connectivity',
  initialize
};
