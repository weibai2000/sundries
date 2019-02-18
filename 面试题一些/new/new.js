// 实现一个new

"use strict";
var Dog = function(name) {
  this.name = name
  this.arr = [1, 3, 4]
}
Dog.prototype.bark = function() {
  console.log('wangwang')
}
Dog.prototype.sayName = function() {
  console.log('my name is ' + this.name)
}
Dog.prototype.printArr = function() {
  console.log(this.arr)
}
Dog.prototype.constructor = Dog
let sanmao = new Dog('三毛')
sanmao.sayName()
sanmao.bark()
  // new 的作用
  // 创建一个新对象obj
  // 把obj的__proto__指向Dog.prototype 实现继承
  // 执行构造函数，传递参数，改变this指向 Dog.call(obj, ...args)
  // 最后把obj赋值给sanmao
var _new = function() {
    let constructor = Array.prototype.shift.call(arguments)
    let args = arguments
    const obj = new Object()
    obj.__proto__ = constructor.prototype
    constructor.call(obj, ...args)
    return obj
  }
  // function _new(fn, ...arg) {
  //   var obj = Object.create(fn.prototype);
  //   fn.call(obj, ...arg);
  //   return obj;
  // }
var simao = _new(Dog, 'simao')
var wumao = _new(Dog, 'wumao')
wumao.arr.push(30)
simao.bark()
simao.sayName()
simao.printArr()
wumao.printArr()
const flatten = (arr) => [].concat(...arr.map(item => Array.isArray(item) ? flatten(item) : item))
console.log(flatten([1, [2],
  [
    [3], 4
  ], 5
])); // [1,2,3,4,5])flatten