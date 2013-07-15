/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var BreadUnitView = Backbone.View.extend({

        tagName: 'li',

        template: JST['app/scripts/templates/bread-unit-view.ejs'],

        initialize: function () {
            this.listenTo(this.model, 'hide', this.hide);
            this.listenTo(this.model, 'show', this.show);
        },

        render: function () {
            this.$el.html(this.template(this.model.attributes));
            return this;
        },

        remove: function () {
            this.$el.remove();
            return this;
        },

        hide: function () {
            this.$el.hide();
        },

        show: function () {
            this.$el.show();
        }
    });

    return BreadUnitView;
});