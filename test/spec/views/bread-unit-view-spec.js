/*global describe, it, beforeEach, afterEach, require, expect */
'use strict';
require(['models/bread-unit-model', 'views/bread-unit-view'], function (BreadUnitModel, BreadUnitView) {
	describe('BreadUnitView', function () {

		beforeEach(function () {
			$('body').append('<ul id="bread-unit-items" class="nav nav-tabs nav-stacked"></ul>');
			var model = new BreadUnitModel({
				name: 'Rye bread',
				measure: '1 piece',
				weight: '25',
				kcal: '60'
			});
			this.view = new BreadUnitView({model: model});
		});

		afterEach(function () {
			this.view.remove();
			$('#bread-unit-items').remove();
		});

		it('should be tied to a DOM element when created, based off the property provided', function () {
			expect(this.view.el.tagName.toLowerCase()).to.equal('li');
		});

		it('should be backed by a model instance', function () {
			expect(this.view.model).to.not.equal(undefined);

			expect(this.view.model.get('name')).to.equal('Rye bread');
			expect(this.view.model.get('measure')).to.equal('1 piece');
			expect(this.view.model.get('weight')).to.equal('25');
			expect(this.view.model.get('kcal')).to.equal('60');
		});

		describe('Rendering', function () {

			it('returns the view object', function () {
				expect(this.view.render()).to.equal(this.view);
			});

			it('produces the correct HTML', function() {
				this.view.render();
				expect(this.view.el.innerHTML).to.equal('<a>\n\t<div class=\"name\">Rye bread</div>\n\t<div class=\"measure\">1 piece</div>\n\t<div class=\"weight\">25</div>\n\t<div class=\"add btn btn-info\"><i class=\"icon-plus icon-white\"></i></div>\n</a>');
			});
		});

		it('should have "hide" method', function () {
			expect(this.view.hide).to.not.equal(undefined);
			expect(this.view.hide()).to.equal();
		});

		it('should have "show" method', function () {
			expect(this.view.show).to.not.equal(undefined);
			expect(this.view.show()).to.equal();
		});
	});
});
