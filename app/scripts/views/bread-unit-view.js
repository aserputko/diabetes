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

        },

        render: function () {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });

    return BreadUnitView;
});