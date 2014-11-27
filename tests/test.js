var PowerArray = require('../index.js'),
	assert = require('assert');

var array = new PowerArray();
array.push(4);
array.push(34);
array.push(14);
array.push(22);
array.push(42);
array.push(12);
array.push(2);
array.push(6);
array.push(40);
array.numericSort();


describe('PowerArray', function () {

	describe('#numericSort', function () {
		it('last element in array should be 42', function () {
			assert.equal(42, array[array.length - 1]);
		});
	});

	describe('#forEach', function () {
		it('should iterate 10 times', function () {
			var counter = 1;
			array.forEach(function () {
				counter += 1;
			});
			assert.equal(10, counter);
		});
	});

	describe('#binarySearch', function () {
		it('element 12 should be in position 3', function () {
			assert.equal(3, array.binarySearch(12));
		});
	});

});