function SuppedArray() {}

SuppedArray.prototype = new Array;
SuppedArray.prototype.forEach = function (fun) {
  var len = this.length;
  while (len--) {
    fun(this[len]);
  }
};

function SuperPowerArray(len) {
  this.usedLength = 0;
}

SuperPowerArray.prototype = new Uint8Array;
SuperPowerArray.prototype.forEach = function (fun) {
  var i = this.length;
  while (i--) {
    fun(this[i]);
  }
};

SuperPowerArray.prototype.push = function (val) {
  this[this.usedLength] = val;
  this.usedLength += 1;
};

function PowerArray() {
  var array = [];

  return {
    push: array.push,
    forEach: function (fun) {
      var i = array.length;
      while (i--) {
        fun(array[i], i);
      }
    },
    map: function (fun) {
      var results = PowerArray();
      array.forEach(function (elem) {
        results.push(fun(elem));
      });
      return results;
    },
    at: function (i) {
      return array[i];
    }
  };
}

module.exports = {
  SuppedArray: SuppedArray,
  SuperPowerArray: SuperPowerArray,
  PowerArray: PowerArray
};