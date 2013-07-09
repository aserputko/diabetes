/*global describe, it, require, beforeEach */
'use strict';
define(function(require) {
	describe('Tests for AAAA', function () {
		
		var ApplicationModel = require('application-model');

		beforeEach(function () {
			this.model = new ApplicationModel();
		});

		describe('lalalala', function () {
			it('should create instance with default attributes', function () {
				var attributes
				  , size;

				attributes 	= this.model.attributes;
				size 		= _.size(attributes);

				expect(size).to.be.equal(0);
			});
			it('should create instance with default attributes', function () {
				var attributes
				  , size;

				attributes 	= this.model.attributes;
				size 		= _.size(attributes);

				expect(size).to.be.equal(0);
			});
			it('should create instance with default attributes', function () {
				var attributes
				  , size;

				attributes 	= this.model.attributes;
				size 		= _.size(attributes);

				expect(size).to.be.equal(0);
			});
		});

		it('dsdsd', function () {

		});
	});
});