
// 自动化柯里化函数
function curring(fn) {
  function curried(...args1) {
    if (args1.length >= fn.length) {
      fn.apply(this, args1)
    } else {
      return function(...args2) {
        return curried.apply(this, args1.concat(args2))
      }
    }
  }

  return curried
}