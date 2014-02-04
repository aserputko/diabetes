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
		mediator: {
			deps: ['backbone'],
			exports: 'mediator'
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
		mediator: 'vendor/backbone-mediator',
		rivets: 'vendor/rivets',
		bootstrap: 'vendor/bootstrap',
		templates: '../.tmp/scripts/templates',
		localstorage: 'vendor/backbone.localStorage'
	}
});

require([
	'backbone',
	'localstorage',
	'mediator',
	'rivets-config',
	'routes/application-router'
], function (Backbone, localstorage, mediator, rivets, ApplicationRouter) {
	var router;

	router = new ApplicationRouter();
	Backbone.history.start();
});