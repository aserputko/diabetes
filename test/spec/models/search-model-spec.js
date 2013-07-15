/*global describe, it, beforeEach, require, expect, _ */
'use strict';
require(['models/search-model'], function (SearchModel) {
    describe('SearchModel', function () {
		beforeEach(function () {
			this.model = new SearchModel();
		});

		it('should be created with default values for its attributes', function () {
			expect(this.model.get('placeholder')).to.equal('Search...');
			expect(this.model.get('query')).to.equal('');
			expect(_.size(this.model.attributes)).to.equal(2);
		});

		it('should should have getter "getPlaceholder"', function () {
			this.model.set({placeholder: 'testValue'});
			expect(this.model.getPlaceholder()).to.equal('testValue');
		});

		it('should should have setter "setPlaceholder"', function () {
			this.model.setPlaceholder('testValue');
			expect(this.model.get('placeholder')).to.equal('testValue');
		});

		it('should should have getter "getQuery"', function () {
			this.model.set({query: 'testValue'});
			expect(this.model.getQuery()).to.equal('testValue');
		});

		it('should should have setter "setQuery"', function () {
			this.model.setQuery('testValue');
			expect(this.model.get('query')).to.equal('testValue');
		});
    });
});
