/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates'
], function ($, _, Backbone, JST) {
	'use strict';

	var BreadUnitView = Backbone.View.extend({

		tagName: 'li',

		template: JST['app/scripts/templates/bread-unit-view.ejs'],

		/**
		 * Register listeners
		 * @constrictor
		 */
		initialize: function () {
			this.listenTo(this.model, 'hide', this.hide);
			this.listenTo(this.model, 'show', this.show);
		},

		/**
		 * Render the view template from model data,
		 * and updates this.el with the new HTML.
		 */
		render: function () {
			this.$el.html(this.template(this.model.attributes));
			return this;
		},

		/**
		 * Hide this part of DOM if model triggers `hide` event
		 */
		hide: function () {
			this.$el.hide();
		},

		/**
		 * Shoq this part of DOM if model triggers `show` event
		 */
		show: function () {
			this.$el.show();
		}
	});

	return BreadUnitView;
});