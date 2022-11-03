Function.prototype.brbind = function(thisArg, ...argArray) {
  thisArg = thisArg ? Object(thisArg) : window
  thisArg.fn = this

  return function(...newArray) {
    let args = [...argArray, ...newArray];
    return thisArg.fn(...args)
  }
}