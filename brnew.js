function Person(name, age) {
    this.name = name;
    this. age = age;
}

// new例子
const p1 = new Person("王佰如1", 18)
console.log(p1);

function brNew(fn, ...args) {
  // 1.基于fn的原型创建一个新的对象,让新的对象的隐式原型指向fn的显示原型
  const newObj = Object.create(fn.prototype);

  // 2.添加属性到新创建的newObj对象上,并获取fn函数执行的结果
  const result = fn.apply(newObj, args)

  // 3.如果执行函数有返回值,并且是一个对象,则返回该值;否则,返回新创建的对象 newObj
  return typeof result === 'object'? result : newObj;
}

// brNew例子
const p2 = brNew(Person, "王佰如2", 20)
console.log(p2);