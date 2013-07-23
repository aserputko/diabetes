/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'models/bread-unit-model'
], function ($, _, Backbone, JST, BreadUnitModel) {
	'use strict';

	var NewBreadUnitView = Backbone.View.extend({

		className: 'new-bread-unit',

		template: JST['app/scripts/templates/new-bread-unit.ejs'],

		/**
		 * @constrictor
		 */
		initialize: function (options) {
			this.model = new BreadUnitModel(options, {parse: true});

			this.on('render', this.render, this);
			this.on('remove', this.remove, this);
		},

		/**
		 * Render the view template from model data,
		 * and updates this.el with the new HTML.
		 */
		render: function () {
			this.$el.html(this.template());
			return this;
		}
	});

	return NewBreadUnitView;
});