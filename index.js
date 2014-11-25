function PowerArray() {}

PowerArray.prototype = new Array;
PowerArray.prototype.forEach = function (fun) {
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
}
SuperPowerArray.prototype.push = function (val) {
  this[0] = val;
  this.usedLength += 1;
}

module.exports = {
  PowerArray: PowerArray,
  SuperPowerArray: SuperPowerArray
};