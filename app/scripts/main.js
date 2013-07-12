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
        bootstrap: 'vendor/bootstrap'
    }
});

require([
    'backbone',
    'views/bread-unit-collection-view'
], function (Backbone, BreadUnitCollectionView) {
    var $el = $('#container'), view;

    view = new BreadUnitCollectionView();
    $el.html(view.render().el);
    view.sync();
    
    Backbone.history.start();
});