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


	describe('#concat', function () {
		it('should concatenate', function () {
			var result = array.concat([1, 2, 3]);
			assert.equal(result.length, 12);
			assert.equal(array.length, 9);
			assert.equal(result[0], array[0]);
			assert.equal(42, array[array.length - 1]);
			assert.equal(result[9], 1);
			assert.equal(result[10], 2);
			assert.equal(result[11], 3);
		});
	});

	describe('#map', function () {
		it('should iterate 10 times', function () {
			var counter = 1;
			var r = array.map(function (elem) {
				counter += 1;
				return elem * 2;
			});
			assert.equal(10, counter);
		});

		it('should return a PowerArray', function () {
			var r = array.map(function (elem) {
				return elem * 2;
			});
			assert.ok(r instanceof PowerArray);
		});

		it('should have access to index', function () {
			var r = array.map(function (elem, index) {
				return index;
			});
			assert.equal(r[0], 0);
			assert.equal(r[5], 5);
			assert.equal(r[8], 8);
		});
	});

	describe('#binarySearch', function () {
		it('element 12 should be in position 3', function () {
			assert.equal(3, array.binarySearch(12));
		});
	});

	describe('load array from constructor', function () {
		it('should load passed array', function () {
			var a = new PowerArray(['a', 'b', 'c']);
			assert.equal(3, a.length);
			assert.equal('a', a[0]);
			assert.equal('b', a[1]);
			assert.equal('c', a[2]);
		});
	});

	describe('#slice', function () {
		it('should slice the array and return a power array', function () {
			var a = new PowerArray([1, 2, 3, 4]),
				b = a.slice(1, 3);
			assert.equal(2, b.length);
			assert.equal(true, b instanceof PowerArray);
			assert.equal(2, b[0]);
		});
	});

	describe('#splice', function () {
		it('should splice the array and return a power array', function () {
			var a = new PowerArray([1, 2, 3, 4]),
				b = a.splice(1, 3);
			assert.equal(3, b.length);
			assert.equal(true, b instanceof PowerArray);
			assert.equal(2, b[0]);
		});
	});

});