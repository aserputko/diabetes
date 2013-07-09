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
    },
    'chai-jquery': ['jquery', 'chai']
  },

  paths: {
    'jquery'                  : '../app/bower_components/jquery/jquery',
    'underscore'              : '../app/bower_components/underscore-amd/underscore',
    'backbone'                : '../app/bower_components/backbone-amd/backbone',
    'bootstrap'               : '../app/scripts/vendor/bootstrap',
    'mocha'                   : 'lib/mocha/mocha',
    'expect'                  : 'lib/expect',
    'chai'                    : 'lib/chai',
    'chai-jquery'             : 'lib/chai-jquery',

    // sources
    'application-model'       : '../app/scripts/models/application-model'
  }
});
 
require(['require', 'chai', 'chai-jquery', 'expect', 'mocha', 'jquery'], function(require, chai, chaiJquery){
 
  // Chai
  var should = chai.should();
  chai.use(chaiJquery);
 
  /*globals mocha */
  mocha.setup({ui: 'bdd', ignoreLeaks: true});
 
  require([
    'spec/my-test.js',
    'spec/test.js'
  ], function(require) {
      mocha.run();
  });
 
});