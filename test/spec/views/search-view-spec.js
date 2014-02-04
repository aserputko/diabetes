/*global describe, it, beforeEach, afterEach, require, expect */
'use strict';
require(['views/search-view'], function (SearchView) {
	describe('SearchView', function () {

		beforeEach(function () {
			$('body').append('<div id="container" class="diabetes container-fluid"></div>');
			this.view = new SearchView();
		});

		afterEach(function () {
			this.view.remove();
			$('#container').remove();
		});

		it('should be tied to a DOM element when created, based off the property provided', function () {
			expect(this.view.el.tagName.toLowerCase()).to.equal('div');
		});

		it('should have a class of "search"', function () {
			expect(this.view.$el.hasClass('search')).to.equal(true);
		});

		it('should be backed by a model instance', function () {
			expect(this.view.model).to.not.equal(undefined);

			expect(this.view.model.get('query')).to.equal('');
			expect(this.view.model.get('placeholder')).to.equal('Search...');
		});

		describe('Rendering', function () {

			it('returns the view object', function () {
				expect(this.view.render()).to.equal(this.view);
			});

			it('produces the correct HTML', function() {
				this.view.render();
				expect(this.view.el.innerHTML).to.equal('<input type="search" results="5" placeholder="Search..." data-value="model.query" data-on-keyup="view:setQuery">');
			});
		});

		it('should have "start" method', function () {
			expect(this.view.start).to.not.equal(undefined);
			expect(this.view.start()).to.equal();
		});

		it('should have "setQuery" method', function () {
			expect(this.view.setQuery).to.not.equal(undefined);
			expect(this.view.setQuery({}, {model: this.view.model, view: this.view})).to.equal();
		});
		
	});
});
