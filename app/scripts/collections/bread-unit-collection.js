/*global define*/

define([
	'underscore',
	'backbone',
	'models/bread-unit-model',
	'mocks/bu-mock'
], function (_, Backbone, BreadUnitModel, mock) {
	'use strict';

	var BreadUnitCollection = Backbone.Collection.extend({

		model: BreadUnitModel,

		initialize: function () {
			Backbone.Mediator.sub('SearchModel:change:query', $.proxy(this.filterByName, this));
		},

		filterByName: function (str) {
			var result = [];

			if (str && str !== '') {
				this.each(function (model) {
					var name, matches, query;

					// Get name of Bread Unit, change the name to upper case and escape it.
					name = model.getName().toUpperCase();
					name = window.escape(name);

					// Change the query to upper case and escape it too.
					query = str.toUpperCase();
					query = query.split(' ');

					// Find matches
					matches = _.map(query, function (element) {
						element = window.escape(element);
						return name.match(element) ? true : false;
					});

					// Set result to temporary storage and trigger `show` event.
					if (_.every(matches)) {
						result.push(model);
						model.trigger('show');
					} else {
						// if don't have matches just trigger `hide` event.
						model.trigger('hide');
					}
				});
			} else {
				this.each(function (model) {
					model.trigger('show');
				});
				result = this.models;
			}

			return result;
		},

		sync: function (method, collection, options) {
			options.success(mock);
		}
	});

	return BreadUnitCollection;
});