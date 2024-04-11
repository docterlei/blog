# 原型到原型链

#### prototype

每个函数都有一个prototype属性，这个属性指向了一个对象，这个对象正是用该构造函数创建的实例的原型

```
// prototype 是函数才有的属性
function Person(){

}
Person.prototype.alias = 'monster'
const michael = new Person()
const andrew = new Person()
console.log(michael.alias) // monster
console.log(andrew.alias) // monster
```

#### \_\_proto\_\_

每一个JavaScritp对象(null除外)都有一个__proto__属性，这个属性会指向该对象的原型

```
function Person(){

}
const michael = new Person()
console.log(michael.__proto__ === Person.prototype) // true
```

原型： 每一个JavaScript对象(null除外)在创建的时候会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型继承属性

#### constructor

每个原型都有一个 constructor 属性指向关联的构造函数

```
function Person() {

}
console.log(Person === Person.prototype.constructor); // true
```