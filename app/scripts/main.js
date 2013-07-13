/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone-amd/backbone',
        underscore: '../bower_components/underscore-amd/underscore',
        rivets: '../bower_components/rivets/rivets',
        bootstrap: 'vendor/bootstrap'
    }
});

require([
    'backbone',
    'rivets-config',
    'views/application-view'
], function (Backbone, rivets, ApplicationView) {
    var $el = $('#container'), view;

    view = new ApplicationView({el: $el});
    view.render();
    
    Backbone.history.start();
});