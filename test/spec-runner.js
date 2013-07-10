require.config({
  shim: {
    'underscore': {
      exports: '_'
    },
    'jquery': {
      exports: '$'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  },

  paths: {
    // lib
    'jquery'                  : 'bower_components/jquery/jquery',
    'underscore'              : 'bower_components/underscore-amd/underscore',
    'backbone'                : 'bower_components/backbone-amd/backbone',
    'bootstrap'               : 'scripts/vendor/bootstrap',

    // src
    'application-model'       : 'scripts/models/application-model'
  }
});

require(['application-model']);