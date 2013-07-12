/*global define*/

define([
    'underscore',
    'backbone',
    'models/bread-unit-model'
], function (_, Backbone, BreadUnitModel) {
    'use strict';

    var BreadUnitCollection = Backbone.Collection.extend({

        model: BreadUnitModel,

		filterByName: function (str) {
			var result = [];

			if (str && str !== '') {
				this.filter(function (model) {
					var name, matches;
					name = model.getName();
					matches = name.match(str);
					if (matches) {
						result.push(model);
					}
				});
			} else {
				result = this.models;
			}

			return result;
		},

		sync: function (method, collection, options) {
			options.success([
				{
					name: 'Name 1'
				},
				{
					name: 'Name 2'
				},
				{
					name: 'Name 3'
				},
				{
					name: 'Name 4'
				},
				{
					name: 'Name 5'
				}
			]);
		}
    });

    return BreadUnitCollection;
});