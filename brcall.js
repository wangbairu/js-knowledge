Function.prototype.brcall = function(thisArgs, ...args) {
  
  thisArgs = thisArgs ? Object(thisArgs) : window;
  thisArgs.fn = this;
  args = args || []

  let result = thisArgs.fn(...args);
  delete thisArgs.fn;

  return result
}