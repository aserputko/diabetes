/*global define*/

define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var SearchModel = Backbone.Model.extend({

		defaults: {
			placeholder: 'Search...',
			query: ''
		},

		initialize: function () {
			this.on('change:query', function () {
				Backbone.Mediator.pub('SearchModel:change:query', this.getQuery());
			}, this);
		},

		/** Getters and Setters */
		getPlaceholder: function () {
			return this.get('placeholder');
		},

		setPlaceholder: function (value, options) {
			this.set({placeholder: value}, options);
		},

		getQuery: function () {
			return this.get('query');
		},

		setQuery: function (value, options) {
			this.set({query: value}, options);
		}
	});

	return SearchModel;
});