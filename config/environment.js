/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-crud-animals',
    environment: environment,
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-eval' apis.google.com'",
      'font-src': "'self' http://fonts.gstatic.com",
      'frame-src': "'self' https://*.firebaseapp.com'",
      'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com",
      'img-src': "'self' data:",
      'media-src': "'self'"
    },
    firebase: {
      apiKey: 'uhapd22iLJBrzsfs8pP1BCc0ORasXcCaZdM6XEX2',
      authDomain: 'https://animalscrud.firebaseapp.com',
      databaseURL: 'https://animalscrud.firebaseio.com',
      storageBucket: 'https://animalscrud.appspot.com',
    },
    emberOffline: {
      themes: {
        theme: 'default',
        indicator: false,
        language: 'english'
      }
    },
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
