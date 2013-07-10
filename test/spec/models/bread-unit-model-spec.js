/*global describe, it, beforeEach, require, expect, _ */
'use strict';
require(['models/bread-unit-model'], function (BreadUnitModel) {
    describe('BreadUnitModel', function () {
		beforeEach(function () {
			this.model = new BreadUnitModel();
		});

		it('should be created with default values for its attributes', function () {
			expect(this.model.get('name')).to.equal('');
			expect(this.model.get('measure')).to.equal('');
			expect(this.model.get('weight')).to.equal('');
			expect(this.model.get('kcal')).to.equal('');
			expect(_.size(this.model.attributes)).to.equal(4);
		});

		it('should should have getter "getName"', function () {
			this.model.set({name: 'testValue'});
			expect(this.model.getName()).to.equal('testValue');
		});

		it('should should have setter "setName"', function () {
			this.model.setName('testValue');
			expect(this.model.get('name')).to.equal('testValue');
		});

		it('should should have getter "getMeasure"', function () {
			this.model.set({measure: 'testValue'});
			expect(this.model.getMeasure()).to.equal('testValue');
		});

		it('should should have setter "setMeasure"', function () {
			this.model.setMeasure('testValue');
			expect(this.model.get('measure')).to.equal('testValue');
		});

		it('should should have getter "getWeight"', function () {
			this.model.set({weight: 'testValue'});
			expect(this.model.getWeight()).to.equal('testValue');
		});

		it('should should have setter "setWeight"', function () {
			this.model.setWeight('testValue');
			expect(this.model.get('weight')).to.equal('testValue');
		});

		it('should should have getter "getKcal"', function () {
			this.model.set({kcal: 'testValue'});
			expect(this.model.getKcal()).to.equal('testValue');
		});

		it('should should have setter "setKcal"', function () {
			this.model.setKcal('testValue');
			expect(this.model.get('kcal')).to.equal('testValue');
		});
    });
});
