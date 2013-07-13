/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/search-model'
], function ($, _, Backbone, JST, SearchModel) {
    'use strict';

    var SearchView = Backbone.View.extend({

        tagName: 'form',

        className: 'search',

        template: JST['app/scripts/templates/search-view.ejs'],

        initialize: function () {
            this.model = new SearchModel();
        },

        /**
         * Put data of Model to template
         * and render it to DOM.
         */
        render: function () {
            this.$el.html(this.template(this.model.attributes));
            return this;
        },

        /**
         * Remove DOM and unbind listeners
         */
        remove: function () {
            this.off();
            this.$el.remove();
            return this;
        }
    });

    return SearchView;
});