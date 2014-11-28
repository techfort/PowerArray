'use strict';

// PowerArray
function PowerArray(arr) {
  if (arguments.length > 0) {
    var self = this;
    PowerArray.prototype.forEach.call(arr,function(elem) {
      self.push(elem);
    });
  }
}

PowerArray.prototype = new Array;

PowerArray.prototype.addhAndSort = function (val) {
  this.push(val);
  this.numericSort();
};

PowerArray.prototype.forEach = function (fun) {
  var i = 0,
    len = this.length;

  for (i; i < len; i++) {
    fun(this[i], i);
  }
};

PowerArray.prototype.map = function (fun) {
  var results = new PowerArray();
  this.forEach(function (elem) {
    results.push(fun(elem));
  });
  return results;
};
PowerArray.prototype.filter = function (filterFun) {
  var results = new PowerArray();
  this.forEach(function (elem) {
    if (filterFun(elem)) {
      results.push(elem);
    }
  });
  return results;
};
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

PowerArray.prototype.numericSort = function (fun) {
  this.sort(fun || function (a, b) {
    return a < b ? -1 : 1;
  });
};

// Binary Search method, only works if array is sorted.
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

module.exports = PowerArray;
