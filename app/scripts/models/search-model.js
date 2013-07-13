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

        /** Getters and Setters */
        getPlaceholder: function () {
			return this.get('placeholder');
        },

        setPlaceholder: function (value, options) {
			return this.set({placeholder: value}, options);
        },

        getQuery: function () {
			return this.get('query');
        },

        setQuery: function (value, options) {
			return this.set({query: value}, options);
        }
    });

    return SearchModel;
});