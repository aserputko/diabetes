/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'collections/bread-unit-collection',
	'views/bread-unit-view'
], function ($, _, Backbone, JST, BreadUnitCollection, BreadUnitView) {
	'use strict';

	var BreadUnitCollectionView = Backbone.View.extend({

		id: 'bread-unit-items',

		tagName: 'ul',

		className: 'nav nav-tabs nav-stacked',

		template: JST['app/scripts/templates/bread-unit-collection-view.ejs'],

		/**
		 * Initialize collection <BreadUnitCollection>
		 * Register listeners
		 * @constrictor
		 */
		initialize: function () {
			this.collection = new BreadUnitCollection();
			this.listenTo(this.collection, 'sync', this.addAll);
			this.listenTo(this.collection, 'filterByName', this.filterByName);
		},

		/**
		 * Render the view template from model data,
		 * and updates this.el with the new HTML.
		 */
		render: function () {
			this.$el.html(this.template());
			return this;
		},

		/**
		 * Fetch data from Server-Side or from localStorege
		 */
		sync: function () {
			this.collection.fetch();
		},

		/**
		 * Add all models<BreadUnitModel> to DOM
		 */
		addAll: function () {
			this.collection.each(this.addOne, this);
		},

		/**
		 * Add one model<BreadUnitModel> to DOM
		 */
		addOne: function (model) {
			var view = new BreadUnitView({model: model});
			this.$el.append(view.render().el);
		}

	});

	return BreadUnitCollectionView;
});