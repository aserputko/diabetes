/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'views/search-view',
	'views/bread-unit-collection-view'
], function ($, _, Backbone, JST, SearchView, BreadUnitCollectionView) {
	'use strict';

	var ApplicationView = Backbone.View.extend({

		template: JST['app/scripts/templates/application.ejs'],

		/**
		 * Initialize views <SearchView> and <BreadUnitCollectionView>
		 * @constrictor
		 */
		initialize: function () {
			this.searchView              = new SearchView();
			this.breadUnitCollectionView = new BreadUnitCollectionView();

			this.on('render', this.render, this);
			this.on('render', this.postRender, this);
			this.on('remove', this.remove, this);
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
		 * Render child views (searchView and breadUnitCollectionView)
		 */
		postRender: function () {
			this.$el.append(this.searchView.render().el);
			this.$el.append(this.breadUnitCollectionView.render().el);

			this.searchView.start();
			this.breadUnitCollectionView.sync();

			return this;
		},

		remove: function() {
			this.searchView.remove();
			this.breadUnitCollectionView.remove();
			this.$el.remove();
			this.stopListening();
			return this;
		}
	});

	return ApplicationView;
});