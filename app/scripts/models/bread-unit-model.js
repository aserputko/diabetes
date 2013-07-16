/*global define*/

define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var BreadUnitModel = Backbone.Model.extend({

		defaults: {
			name: '',
			measure: '',
			weight: '',
			kcal: ''
		},

		/** Getters and Setters */
		getName: function () {
			return this.get('name');
		},

		setName: function (value, options) {
			return this.set({name: value}, options);
		},

		getMeasure: function () {
			return this.get('measure');
		},

		setMeasure: function (value, options) {
			return this.set({measure: value}, options);
		},

		getWeight: function () {
			return this.get('weight');
		},

		setWeight: function (value, options) {
			return this.set({weight: value}, options);
		},

		getKcal: function () {
			return this.get('kcal');
		},

		setKcal: function (value, options) {
			return this.set({kcal: value}, options);
		}
	});

	return BreadUnitModel;
});