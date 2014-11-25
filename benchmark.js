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

function format(s) {
  return (s[0] * 1e3 + s[1] / 1e6) / 1e3;
}

function ops_per_sec(s) {
  return (LEN / format(s)).toExponential();
}
console.log('Populating arrays...');

for (i; i < LEN; i += 1) {
  var rnd = rand();
  array.push(rnd);
  pwr.push(rnd);
  sup.push(rnd);
  wa.push(rnd);
  if (i === 1e6) {
    console.log('10% complete');
  }
  if (i === 2e6) {
    console.log('20% complete');
  }
  if (i === 3e6) {
    console.log('30% complete');
  }
  if (i === 4e6) {
    console.log('40% complete');
  }
  if (i === 5e6) {
    console.log('50% complete');
  }
  if (i === 6e6) {
    console.log('60% complete');
  }
  if (i === 7e6) {
    console.log('70% complete');
  }
  if (i === 8e6) {
    console.log('80% complete');
  }
  if (i === 9e6) {
    console.log('90% complete');
  }
}
console.log('100% complete');



console.log('Array.forEach');
var s1 = process.hrtime();
array.forEach(function (i) {
  i * 2;
});
var plain = process.hrtime(s1);
console.log('Array.forEach complete in ' + format(plain) + ', ops/s: ' + ops_per_sec(plain));

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

console.log('WrappedArray MAP');
var wamap = process.hrtime();
wa.map(function (i) {
  return i * 2;
});
var wamapend = process.hrtime(wamap);
console.log('WrappedArray MAP complete in ' + format(wamapend) + ', ops/s: ' + ops_per_sec(wamapend));

console.log('Plain Array MAP');
var map = process.hrtime();
array.map(function (i) {
  return i * 2;
});
var mapend = process.hrtime(map);
console.log('Plain Array MAP complete in ' + format(mapend) + ', ops/s: ' + ops_per_sec(mapend));

console.log('Wrapped/Plain Ratio: ' + (ops_per_sec(wamapend) / ops_per_sec(mapend)).toFixed(2));