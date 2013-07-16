/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'rivets',
	'templates',
	'models/search-model'
], function ($, _, Backbone, rivets, JST, SearchModel) {
	'use strict';

	var SearchView = Backbone.View.extend({

		className: 'search',

		template: JST['app/scripts/templates/search-view.ejs'],

		/** @constrictor */
		initialize: function () {
			this.model = new SearchModel();
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
		 * Start key-value binding bitveen Model and View
		 */
		start: function () {
			rivets.bind(this.$el, {model: this.model, view: this}, this);
		},

		/**
		 * Get data from View and set it to Model.
		 * @param {object} element The element of DOM
		 * @param {object} self
		 * @param {object} self.view The current instance of SearchView
		 * @param {object} self.model The model of SearchView
		 */
		setQuery: function (element, self) {
			var query = $(element.target).val();
			self.model.setQuery(query);
		}
	});

	return SearchView;
});