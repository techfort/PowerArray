/*
 * PowerArray
 * 5x faster array performance with built-in binarySearch
 * @author joe minichino <joe.minichino@gmail.com>
 * License: BSD
 */

'use strict';


/**
 * PowerArray
 * @constructor
 * @param {array} optional plain array to populate a power array
 */
function PowerArray(array) {
  var load = array || [],
    self = this;
  load.forEach(function (el) {
    self.push(el);
  });
}

/*
 * inheritance
 */
PowerArray.prototype = new Array;

/**
 * addAndSort inserts a value and sorts the array after insertion to keep binary search working
 * @param {number} val
 */
PowerArray.prototype.addhAndSort = function (val) {
  this.push(val);
  this.numericSort();
};

/**
 * forEach: improved version of the Array.prototype.forEach method, utilises for loop
 *
 * @param {function} processing function
 */
PowerArray.prototype.forEach = function (fun) {
  var i = 0,
    len = this.length;
  for (; i < len; i++) {
    fun(this[i], i);
  }
};


PowerArray.prototype.concat = function (arr) {
  var results = new PowerArray(this);
  arr.forEach(function (elem) {
    results.push(elem);
  });
  return results;
};

/**
 * map: improved version of map
 * re-utilizing PowerArray.forEach did not make performance differences, so for-loop was used to maintain the 5x factor
 *
 * @param {function} mapping function
 * @returns {array} mapped array
 */
PowerArray.prototype.map = function (fun) {
  var results = new PowerArray(),
    i;
  for (i = 0; i < this.length; i += 1) {
    results.push(fun(this[i], i));
  }
  return results;
};

/**
 * filter: improved version of map
 *
 * @param {function} filter function
 * @returns {array} filtered array
 */
PowerArray.prototype.filter = function (filterFun) {
  var results = new PowerArray();
  for (i = 0; i < this.length; i += 1) {
    if (filterFun(this[i], i)) {
      results.push(this[i]);
    }
  }
  return results;
}

/**
 * contains: returns whether the array contains an element or not
 *
 * @param element
 * @returns {boolean} is the element contained or not
 */
PowerArray.prototype.contains = function (elem) {
  var i = 0,
    len = this.length,
    found = false;
  for (i; i < len; i += 1) {
    if (this[i] === elem) {
      found = true;
      break;
    }
  }
  return found;
};

/**
 * numericSort: sorts the array if the array is numerical
 *
 */
PowerArray.prototype.numericSort = function (fun) {
  this.sort(fun || function (a, b) {
    return a < b ? -1 : 1;
  });
};


PowerArray.prototype.binarySearch = function (searchElement) {

  var minIndex = 0;
  var maxIndex = this.length - 1;
  var currentIndex;
  var currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = (minIndex + maxIndex) / 2 | 0;
    currentElement = this[currentIndex];

    if (currentElement < searchElement) {
      minIndex = currentIndex + 1;
    } else if (currentElement > searchElement) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }

  return -1;
};

PowerArray.prototype.slice = function () {
  var args = Array.prototype.slice.call(arguments),
    results = Array.prototype.slice.apply(this, args);
  return new PowerArray(results);
};

module.exports = PowerArray;