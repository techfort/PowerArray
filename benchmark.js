var power = require('./index.js'),
  PowerArray = power.PowerArray,
  SuperPowerArray = power.SuperPowerArray;

var i = 0,
  LEN = 1e7,
  array = [],
  pwr = new PowerArray(),
  sup = new SuperPowerArray(new ArrayBuffer(1e7)),
  wa = power.WrappedArray();

function rand() {
  return Math.floor(Math.random() * 100 + 1);
}

for (i; i < LEN; i += 1) {
  var rnd = rand();
  array.push(rnd);
  pwr.push(rnd);
  sup.push(rnd);
  wa.push(rnd);
}

function format(s) {
  return (s[0] * 1e3 + s[1] / 1e6) / 1e3;
}

function ops_per_sec(s) {
  return (LEN / format(s)).toExponential();
}

console.log('Array.forEach');
var s1 = process.hrtime();
array.forEach(function (i) {
  i * 2;
});
var s2 = process.hrtime(s1);
console.log('Array.forEach complete in ' + format(s2) + ', ops/s: ' + ops_per_sec(s2));

i = LEN;
console.log('plain for loop');
var s3 = process.hrtime();
while (i--) {
  array[i] * 2;
}
var s4 = process.hrtime(s3);
console.log('For loop complete in ' + format(s4) + ', ops/s: ' + ops_per_sec(s4));

console.log('SuperPowerArray');
var s7 = process.hrtime();
sup.forEach(function (i) {
  i * 2;
});
var s8 = process.hrtime(s7);
console.log('SuperPowerArray complete in ' + format(s8) + ', ops/s: ' + ops_per_sec(s8));


console.log('WrappedArray');
var s9 = process.hrtime();
wa.forEach(function (i) {
  i * 2;
});
var s10 = process.hrtime(s9);
console.log('WrappedArray complete in ' + format(s10) + ', ops/s: ' + ops_per_sec(s10));

console.log('PowerArray');
var s5 = process.hrtime();
pwr.forEach(function (i) {
  i * 2;
});
var s6 = process.hrtime(s5);
console.log('PowerArray complete in ' + format(s6) + ', ops/s: ' + ops_per_sec(s6));