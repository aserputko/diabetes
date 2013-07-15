/*global describe, it, beforeEach, require, expect */
'use strict';
require(['collections/bread-unit-collection'], function (BreadUnitCollection) {
    describe('BreadUnitCollection', function () {
		beforeEach(function () {
			this.collection = new BreadUnitCollection();
		});

        it('should add Model instances as objects and arrays', function () {
			expect(this.collection.length).to.equal(0);

			this.collection.add({name: 'name_1'});
			expect(this.collection.length).to.equal(1);

			this.collection.add([{name: 'name_2'}, {name: 'name_3'}]);
			expect(this.collection.length).to.equal(3);
        });

        it('should have filterByName', function () {
			var result;
			this.collection.add([{name: 'apple'}, {name: 'banana'}, {name: 'orange'}]);
			
			result = this.collection.filterByName('apple');
			expect(result.length).to.equal(1);

			result = this.collection.filterByName('an');
			expect(result.length).to.equal(2);  // banana and orange

			result = this.collection.filterByName();
			expect(result.length).to.equal(3);

			result = this.collection.filterByName('');
			expect(result.length).to.equal(3);
        });

        it('should recognize query with upper and lower cases', function () {
			var result;
			this.collection.add([{name: 'apple'}, {name: 'APPLE'}, {name: 'ApPlE'}]);
			this.collection.add([{name: 'banana'}, {name: 'ORANGE'}]);

			result = this.collection.filterByName('apple');
			expect(result.length).to.equal(3);

			result = this.collection.filterByName('APPLE');
			expect(result.length).to.equal(3);

			result = this.collection.filterByName('ApPlE');
			expect(result.length).to.equal(3);

			result = this.collection.filterByName('BANANA');
			expect(result.length).to.equal(1);

			result = this.collection.filterByName('orange');
			expect(result.length).to.equal(1);
        });
    });
});