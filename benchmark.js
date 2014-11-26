var PowerArray = require('./index.js');

var i = 0,
  LEN = 1e7,
  array = [],
  supped = new PowerArray();

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
  supped.push(rnd);
  if (i === LEN / 10) {
    console.log('10% complete');
  }
  if (i === LEN / 10 * 2) {
    console.log('20% complete');
  }
  if (i === LEN / 10 * 3) {
    console.log('30% complete');
  }
  if (i === LEN / 10 * 4) {
    console.log('40% complete');
  }
  if (i === LEN / 10 * 5) {
    console.log('50% complete');
  }
  if (i === LEN / 10 * 6) {
    console.log('60% complete');
  }
  if (i === LEN / 10 * 7) {
    console.log('70% complete');
  }
  if (i === LEN / 10 * 8) {
    console.log('80% complete');
  }
  if (i === LEN / 10 * 9) {
    console.log('90% complete');
  }
}
console.log('Arrays populated');

var s1 = process.hrtime();
array.forEach(function (i) {
  i * 2;
});
var plain = process.hrtime(s1);
console.log('Array.forEach complete in ' + format(plain) + ', ops/s: ' + ops_per_sec(plain));

i = LEN;
var s3 = process.hrtime();
while (i--) {
  array[i] * 2;
}
var forloop = process.hrtime(s3);
console.log('For loop complete in ' + format(forloop) + ', ops/s: ' + ops_per_sec(forloop));


var s5 = process.hrtime();
supped.forEach(function (i) {
  i * 2;
});
var supped_bm = process.hrtime(s5);
console.log('SuppedArray complete in ' + format(supped_bm) + ', ops/s: ' + ops_per_sec(supped_bm));

console.log('---------------------------------------------------------------------------------');
console.log('Supped/ forEach ratio: ' + ops_per_sec(supped_bm) / ops_per_sec(plain));
console.log('---------------------------------------------------------------------------------');
console.log('Supped/ for-loop ratio: ' + ops_per_sec(supped_bm) / ops_per_sec(forloop));
console.log('---------------------------------------------------------------------------------');

console.log('\n\n');
console.log('-------------');
console.log('MAP benchmark');
console.log('-------------')

console.log('Plain Array MAP');
var map = process.hrtime();
array.map(function (i) {
  return i * 2;
});
var mapend = process.hrtime(map);

console.log('SuppedArray MAP');
var supmap = process.hrtime();
supped.map(function (i) {
  return i * 2;
});
var supmapend = process.hrtime(supmap);

console.log();

console.log('Plain Array MAP complete in ' + format(mapend) + ', ops/s: ' + ops_per_sec(mapend));
console.log('---------------------------------------------------------------------------------');
console.log('Supped/Plain Ratio: ' + (ops_per_sec(supmapend) / ops_per_sec(mapend)).toFixed(2));