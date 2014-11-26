# PowerArray

Turns out that you can re-write some of the methods of Array to obtain a much better performance than the native methods.
In particular, Array.forEach seems to perform pretty badly.

It looks as if a for loop with cached length is the fastest way of iterating.
```javascript
var i, len = array.length;
for (i = 0; i < len; i += 1) {
  someFun(array[len]);
}
```

So I rewrote the Array class as PowerArray and implemented the above mechanism in PowerArray.forEach with surprising results.

The results are as follows:
PowerArray.forEach is averagely 5~10,000 times faster than native Array.
PowerArray.forEach is averagely 700 times faster than a plain for loop.
PowerArray.map is averagely more than 10,000 times faster than Array.map

This is only a proof of concept, future steps are re-creating Harmony 6 methods that depend on loops to improve speed.

## Proposed Usage

Particularly useful for arrays that need processing on all elements often, or for numeric arrays utilized as indexes for Collections of data.

## Methods

`PowerArray.forEach`: utilizes a for loop for iteration, takes a callback which receives an element and the index of that element.

`PowerArray.map`: utilizes a for loop to return a PowerArray of mapped values, takes a callback processing function argument.

`PowerArray.binarySearch`: performs a binary search on the elements of the array, only relevant if the array only consists of numbers. Thanks to [Oliver Caldwell's post](http://oli.me.uk/2013/06/08/searching-javascript-arrays-with-a-binary-search/) for a quick version of the algorithm.

`PowerArray.numericSort': sorts array (if array only contains integers), useful for utilizing `binarySearch`.

This is a typical output from benchmark.js (over 10,000,000 size arrays)

```
Array.forEach complete in 0.531276637, ops/s: 1.8822585642891727e+7
For loop complete in 0.033897401, ops/s: 2.950078680073437e+8
SuppedArray complete in 0.000090165, ops/s: 1.1090778018077968e+11
---------------------------------------------------------------------------------
Supped/ forEach ratio: 5892.271247157988
---------------------------------------------------------------------------------
Supped/ for-loop ratio: 375.9485498807741
---------------------------------------------------------------------------------


-------------
MAP benchmark
-------------
Plain Array MAP
SuppedArray MAP

Plain Array MAP complete in 1.09191071, ops/s: 9.158258004448e+6
---------------------------------------------------------------------------------
Supped/Plain Ratio: 10292.40
```
