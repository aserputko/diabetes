/*global define*/

define([
    'underscore',
    'backbone',
    'models/bread-unit-model',
    'collections/bu-mock'
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
				this.filter(function (model) {
					var name, matches;
					name = model.getName();
					matches = name.toUpperCase().match(str.toUpperCase());
					if (matches) {
						model.trigger('show');
						result.push(model);
					} else {
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