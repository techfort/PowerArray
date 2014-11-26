function loop(fun) {
  var i = 0,
    len = this.length;

  for (i; i < len; i += 1) {
    fun(this[i], i);
  }
}

// PowerArray
function PowerArray() {}
PowerArray.prototype = new Array;
PowerArray.prototype.forEach = loop.bind(this);
PowerArray.prototype.map = function (fun) {
  var results = new PowerArray();
  this.forEach(function (elem) {
    results.push(fun(elem));
  });
  return results;
};
PowerArray.prototype.filter = function (filterFun) {
  var results = new PowerArray();
  this.forEach(function (elem) {
    if (filterFun(elem)) {
      results.push(elem);
    }
  });
  return results;
};
PowerArray.prototype.contains = function (elem) {
  var i = 0,
    len = this.length,
    found = false;
  for (i; i < len; i += 1) {
    if (this[i] === elem) {
      found = true;
      break;
    }
  }
  return found;
};

module.exports = PowerArray;