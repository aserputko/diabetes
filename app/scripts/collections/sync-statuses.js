/*global define*/

define([
	'underscore',
	'backbone',
	'models/sync-status'
], function (_, Backbone, SyncStatus) {
	'use strict';

	var SyncStatuses = Backbone.Collection.extend({

		model: SyncStatus,

		localStorage: new Backbone.LocalStorage('sync-statuses'),

		initialize: function () {
			this.fetch();
		}

	});

	return SyncStatuses;
});