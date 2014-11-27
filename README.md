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
PowerArray.forEach is averagely 5 times faster than native Array.

This is only a proof of concept, future steps are re-creating Harmony 6 methods that depend on loops to improve speed.

Install with `npm install powerarray`

## Proposed Usage

Particularly useful for arrays that need processing on all elements often, or for numeric arrays utilized as indexes for Collections of data.

## Methods

All Array native methods are available through PowerArray. The following methods are either extending or overriding the native Array class.

`PowerArray.forEach`: utilizes a for loop for iteration, takes a callback which receives an element and the index of that element.

`PowerArray.map`: utilizes a for loop to return a PowerArray of mapped values, takes a callback processing function argument.

`PowerArray.binarySearch`: performs a binary search on the elements of the array, only relevant if the array only consists of numbers. Thanks to [Oliver Caldwell's post](http://oli.me.uk/2013/06/08/searching-javascript-arrays-with-a-binary-search/) for a quick version of the algorithm. Also note the contribution of Yehonatan and other authors of comments to the post which helped to optimise the implementation of binary search further. 

`PowerArray.numericSort`: sorts array (if array only contains integers), useful for utilizing `binarySearch`. Optional sorting function argument.

`PowerArray.addhAndSort`: adds a new value and sorts the array automatically
