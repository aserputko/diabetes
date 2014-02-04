/*global define*/

define([
	'jquery',
	'backbone',
	'helpers/is-mobile',
	'views/application-view',
	'views/new-bread-unit-view'
], function ($, Backbone, isMobile, ApplicationView, NewBreadUnitView) {
	'use strict';

	var ApplicationRouter = Backbone.Router.extend({

		initialize: function () {
			this.el = $('#container');
			this.controller = null;
		},

		routes: {
			'': 'index',
			'create': 'create'
		},

		runController: function (Controller, options) {
			if (!(this.controller instanceof Controller) && this.controller) {
				this.controller.trigger('remove');
			}

			this.controller = new Controller(options);
			this.controller.trigger('render');
		},

		index: function () {
			this.runController(ApplicationView, {el: this.el});

			if (isMobile.any()) {
				setTimeout(function () {
					window.scrollTo(0, 1);
				}, 1000);
			}
		},

		create: function () {
			this.runController(NewBreadUnitView, {el: this.el});
		}

	});

	return ApplicationRouter;
});