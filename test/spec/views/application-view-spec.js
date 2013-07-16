/*global describe, it, beforeEach, afterEach, require, expect */
'use strict';
require(['views/application-view'], function (ApplicationView) {
    describe('ApplicationView', function () {

		beforeEach(function () {
			$('body').append('<div id="container" class="diabetes container-fluid"></div>');
			this.view = new ApplicationView({el: $('#container')});
		});

		afterEach(function () {
			this.view.remove();
			$('#container').remove();
		});

		it('should be tied to a DOM element when created, based off the property provided.', function () {
			expect(this.view.el.tagName.toLowerCase()).to.equal('div');
		});

		it('should be backed by a SearchView instance', function () {
			expect(this.view.searchView).to.not.equal(undefined);
		});

		it('should be backed by a BreadUnitCollectionView instance', function () {
			expect(this.view.breadUnitCollectionView).to.not.equal(undefined);
		});

		describe('Rendering', function () {

			it('returns the view object', function () {
				expect(this.view.render()).to.equal(this.view);
			});

			it('returns the view object', function () {
				expect(this.view.postRender()).to.equal(this.view);
			});

			it('produces the correct HTML', function() {
				this.view.render();
				expect(this.view.el.innerHTML).to.equal('');
			});
		});
    });
});
