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

        initialize: function () {
			this.searchView              = new SearchView();
			this.breadUnitCollectionView = new BreadUnitCollectionView();

			this.on('post-render', this.postRender, this);
        },

        render: function () {
			this.$el.html(this.template());

			this.trigger('post-render');
			return this;
        },

        postRender: function () {
            this.$el.append(this.searchView.render().el);
            this.$el.append(this.breadUnitCollectionView.render().el);

            this.searchView.start();
			this.breadUnitCollectionView.sync();
        },

		remove: function () {
			this.$el.remove();
			return this;
		}
    });

    return ApplicationView;
});