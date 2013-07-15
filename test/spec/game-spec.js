/*global describe, it, beforeEach, _,require, expect */
'use strict';
require(['models/application-model'], function (ApplicationModel) {
    describe('ApplicationModel', function () {
		beforeEach(function () {
			this.model = new ApplicationModel();
		});

        it('should have default attributes', function () {
            expect(_.size(this.model.attributes)).to.equal(0);
        });
    });
});
