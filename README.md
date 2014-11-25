# PowerArray

Turns out that you can re-write some of the methods of Array to obtain a much better performance than the native methods.
In particular, Array.forEach seems to perform pretty badly.

Based on this [jsPerf](http://jsperf.com/fastest-array-loops-in-javascript/2) , it looks as if 
```javascript
while(len--) {
  someFun(array[len]);
}
```

is the fastest way to iterate an array.
So I rewrote the Array class as PowerArray and implemented the above mechanism in PowerArray.forEach with surprising results.

The results are as follows:
PowerArray.forEach is averagely 10k times faster than native Array.
PowerArray.forEach is averagely 700 times faster than a plain while loop.
PowerArray.map is averagely 1000 times faster than Array.map

This is only a proof of concept, if there's enough feedback, interest and if turns out there aren't too many drawbacks in the PowerArray methods as opposed to the native ones I will rewrite the missing methods.

This is a typical output from benchmark.js

```
Array.forEach
Array.forEach complete in 0.542086324, ops/s: 1.84472464204797e+7
plain for loop
For loop complete in 0.033864642, ops/s: 2.9529324420438284e+8
SuperPowerArray
SuperPowerArray complete in 0.000078083, ops/s: 1.2806884981365982e+11
PowerArray
PowerArray complete in 0.00004868, ops/s: 2.0542317173377158e+11
---------------------------------------------------------------------------------
Power/Plain forEach ratio: 11135.709202958094
---------------------------------------------------------------------------------
Power/ for-loop forEach ratio: 695.6582169268694
---------------------------------------------------------------------------------
SuppedArray
SuppedArray complete in 0.059574822, ops/s: 1.6785614567174032e+8
-------------
MAP benchmark
-------------
PowerArray MAP
PowerArray MAP complete in 0.0008962719999999999, ops/s: 1.1157327239945017e+10
Plain Array MAP
Plain Array MAP complete in 0.977588353, ops/s: 1.022925443957289e+7
---------------------------------------------------------------------------------
Power/Plain Ratio: 1090.73
```
