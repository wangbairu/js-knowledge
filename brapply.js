
Function.prototype.brapply = function(thisArg, args) {
  thisArg = thisArg ? Object(thisArg) : window;
  thisArg.fn = this;
  args = args || [];

  let result = thisArg.fn(...args);
  delete thisArg.fn;

  return result;
}