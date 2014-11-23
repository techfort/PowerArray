function PowerArray() {
  function pwrarray() {}
  pwrarray.prototype = new Array;
  pwrarray.prototype.loop = function (fun) {
    var len = this.length;
    while (len--) {
      fun(this[len]);
    }
  }
  return new pwrarray();
}

function SuperPowerArray(len) {
  this.usedLength = 0;
}

SuperPowerArray.prototype = new Uint8Array;
SuperPowerArray.prototype.loop = function (fun) {
  var i = this.length;
  while (i--) {
    fun(this[i]);
  }
}
SuperPowerArray.prototype.add = function (val) {
  this[0] = val;
  this.usedLength += 1;
}

var i = 0,
  LEN = 1e7,
  array = [],
  pwr = PowerArray(),
  sup = new SuperPowerArray(new ArrayBuffer(1e7));

function rand() {
  return Math.floor(Math.random() * 100 + 1);
}

for (i; i < LEN; i += 1) {
  var rnd = rand();
  array.push(rnd);
  pwr.push(rnd);
  sup.add(rnd);
}

function format(s) {
  return (s[0] * 1e3 + s[1] / 1e6) / 1e3;
}

console.log('Array.forEach');
var s1 = process.hrtime();
array.forEach(function (i) {
  i * 2;
});
var s2 = process.hrtime(s1);
console.log('Array.forEach complete in ' + format(s2));

i = LEN;
console.log('plain for loop');
var s3 = process.hrtime();
while (i--) {
  array[i] * 2;
}
var s4 = process.hrtime(s3);
console.log('For loop complete in ' + format(s4));

console.log('PowerArray');
var s5 = process.hrtime();
pwr.loop(function (i) {
  i * 2;
});
var s6 = process.hrtime(s5);
console.log('PowerArray complete in ' + format(s6));


console.log('SuperPowerArray');
var s7 = process.hrtime();
sup.loop(function (i) {
  i * 2;
});
var s8 = process.hrtime(s7);
console.log('SuperPowerArray complete in ' + format(s8));