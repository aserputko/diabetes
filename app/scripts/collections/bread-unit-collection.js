/*global define*/

define([
    'underscore',
    'backbone',
    'models/bread-unit-model'
], function (_, Backbone, BreadUnitModel) {
    'use strict';

    var BreadUnitCollection = Backbone.Collection.extend({
        model: BreadUnitModel
    });

    return BreadUnitCollection;
});