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

        start: function () {
            rivets.bind(this.$el, {model: this.model, view: this}, this);
        },

        setQuery: function (element, self) {
            var query = $(element.target).val();
            self.model.setQuery(query);
        }
    });

    return SearchView;
});