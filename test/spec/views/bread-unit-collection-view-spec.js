/*global describe, it, beforeEach, afterEach, require, expect */
'use strict';
require(['views/bread-unit-collection-view'], function (BreadUnitCollectionView) {
	describe('BreadUnitCollectionView', function () {

		beforeEach(function () {
			$('body').append('<div id="container" class="diabetes container-fluid"></div>');
			this.view = new BreadUnitCollectionView();
			this.view.collection.reset();
		});

		afterEach(function () {
			this.view.remove();
			$('#container').remove();
		});

		it('should be tied to a DOM element when created, based off the property provided', function () {
			expect(this.view.el.tagName.toLowerCase()).to.equal('ul');
		});

		it('should have a id of "bread-unit-items"', function () {
			expect(this.view.$el.attr('id')).to.equal('bread-unit-items');
		});

		it('should have a class of "nav nav-tabs nav-stacked"', function () {
			expect(this.view.$el.hasClass('nav nav-tabs nav-stacked')).to.equal(true);
		});

		it('should be backed by a collection instance', function () {
			expect(this.view.collection).to.not.equal(undefined);

			this.view.collection.add([{name: 'banana'}, {name: 'orange'}]);
			expect(this.view.collection.length).to.equal(2);
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

		it('should have "sync" method', function () {
			expect(this.view.sync).to.not.equal(undefined);
			expect(this.view.sync()).to.equal();
		});

		it('should have "createOne" method', function () {
			expect(this.view.createOne).to.not.equal(undefined);
			expect(this.view.createOne()).to.equal();
		});

		it('should have "addAll" method', function () {
			expect(this.view.addAll).to.not.equal(undefined);
			expect(this.view.addAll()).to.equal();
		});

		it('should call "addAll" method when event "sync" was triggered', function () {
			this.view.collection.add([{name: 'banana'}, {name: 'orange'}, {name: 'bread'}]);
			this.view.collection.trigger('sync');

			expect(this.view.$('li').length).to.equal(3);
		});

		it('should have "addOne" method', function () {
			var model;
			
			this.view.collection.add([{name: 'banana'}]);
			model = this.view.collection.first();
			expect(this.view.addOne).to.not.equal(undefined);
			expect(this.view.addOne(model)).to.equal();
		});
	});
});
