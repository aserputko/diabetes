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
	'views/application-view',
	'helpers/is-mobile'
], function (Backbone, localstorage, mediator, rivets, ApplicationView, isMobile) {
	var $el = $('#container'), view;

	view = new ApplicationView({el: $el});
	view.render();
	view.postRender();

	if (isMobile.any()) {
		setTimeout(function () {
			window.scrollTo(0, 1);
		}, 1000);
	}
	Backbone.history.start();
});