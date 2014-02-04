/*global describe, it, beforeEach, afterEach, require, expect */
'use strict';
require(['views/new-bread-unit-view'], function (NewBreadUnitView) {
	describe('NewBreadUnitView', function () {

		beforeEach(function () {
			$('body').append('<div id="container" class="diabetes container-fluid"></div>');
			this.view = new NewBreadUnitView();
		});

		afterEach(function () {
			this.view.remove();
			$('#container').remove();
		});

		
		it('should be tied to a DOM element when created, based off the property provided', function () {
			expect(this.view.el.tagName.toLowerCase()).to.equal('div');
		});

		it('should have a class of "new-bread-unit"', function () {
			expect(this.view.$el.hasClass('new-bread-unit')).to.equal(true);
		});

		it('should be backed by a model instance', function () {
			expect(this.view.model).to.not.equal(undefined);

			expect(this.view.model.get('name')).to.equal('');
			expect(this.view.model.get('measure')).to.equal('');
			expect(this.view.model.get('weight')).to.equal('');
			expect(this.view.model.get('kcal')).to.equal('');
		});

		describe('Rendering', function () {

			it('returns the view object', function () {
				expect(this.view.render()).to.equal(this.view);
			});

			it('produces the correct HTML', function() {
				this.view.render();
				expect(this.view.el.innerHTML).to.equal('');
			});
		});

	});
});
