/*global define*/

define([
	'jquery',
	'backbone',
	'views/application-view',
	'helpers/is-mobile'
], function ($, Backbone, ApplicationView, isMobile) {
	'use strict';

	var ApplicationRouter = Backbone.Router.extend({

		initialize: function () {
			this.el = $('#container');
			this.controller = null;
		},

		routes: {
			'': 'home',
			'create': 'create'
		},

		runController: function (Controller, options) {
			if (!this.controller instanceof Controller && this.controller) {
				this.controller.trigger('remove');
			}

			this.controller = new Controller(options);
			this.controller.trigger('render');
		},

		home: function () {
			this.runController(ApplicationView, {el: this.el});

			if (isMobile.any()) {
				setTimeout(function () {
					window.scrollTo(0, 1);
				}, 1000);
			}
		},

		create: function () {
			
		}

	});

	return ApplicationRouter;
});