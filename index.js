function SuppedArray() {}

SuppedArray.prototype = new Array;
SuppedArray.prototype.forEach = function (fun) {
  for (var len = this.length; len--;) {
    fun(this[len]);
  }
};

function SuperPowerArray(len) {
  this.usedLength = 0;
}

SuperPowerArray.prototype = new Uint8Array;
SuperPowerArray.prototype.forEach = function (fun) {
  for (var i = this.length; i--;) {
    fun(this[i]);
  }
};

SuperPowerArray.prototype.push = function (val) {
  this[this.usedLength] = val;
  this.usedLength += 1;
};

function loop(fun) {
  var i = 0,
    len = this.length;
  for (i; i < len; i += 1) {
    fun(this[i], i);
  }
}

function PowerArray() {
  var array = [];

  return {
    push: array.push,
    forEach: loop.bind(array),
    map: function (fun) {
      var results = PowerArray();
      array.forEach(function (elem) {
        results.push(fun(elem));
      });
      return results;
    },
    at: function (i) {
      return array[i];
    },
    // UNINMPLEMENTED METHODS

    from: array.from,
    isArray: array.isArray,
    of: array.of,
    concat: array.concat,
    contains: array.contains,
    copyWithin: array.copyWithin,
    entries: array.entries,
    every: array.every,
    fill: array.fill,
    filter: array.filter,
    find: array.find,
    findIndex: array.findIndex,
    indexOf: array.indexOf,
    join: array.join,
    keys: array.keys,
    lastIndexOf: array.lastIndexOf,
    //map: array.map,
    pop: array.pop,
    push: array.push,
    reduce: array.reduce,
    reduceRight: array.reduceRight,
    reverse: array.reverse,
    shift: array.shift,
    slice: array.slice,
    some: array.some,
    sort: array.sort,
    splice: array.splice,
    toLocaleString: array.toLocaleString,
    toSource: array.toSource,
    toString: array.toString,
    unshift: array.unshift,
    values: array.values

  };
}

module.exports = {
  SuppedArray: SuppedArray,
  SuperPowerArray: SuperPowerArray,
  PowerArray: PowerArray
};