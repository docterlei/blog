# 类数组对象与arguments

#### 类数组对象
> 拥有一个 length 属性和若干个索引属性的对象

```
var arr = ['name','age','sex']

var arrLike = {
    0: 'name',
    1: 'age',
    2: 'sex',
    length: '3'
}
为什么交类数组对象？ 因为它的读写，获取长度，for 遍历和数组都一样，区别是不能用数组的方法
```

#### 类数组调用数组方法
```
var arrLike = {
    0: 'name',
    1: 'age',
    2: 'sex',
    length: '3'
}

Array.prototype.join.call(arrLike, '&') // name&age&sex

// 1. slice类数组转数组
Array.prototype.slice.call(arrayLike); // ["name", "age", "sex"] 
// 2. splice类数组转数组
Array.prototype.splice.call(arrayLike, 0); // ["name", "age", "sex"] 
// 3. ES6 Array.from
Array.from(arrayLike); // ["name", "age", "sex"]
// 4. concat结合apply
Array.prototype.concat.apply([], arrayLike) // ["name", "age", "sex"]

Array.prototype.map.call(arrayLike, function(item){
    return item.toUpperCase();
}); 
// ["NAME", "AGE", "SEX"]

Arguments对象就是类素组对象，在客户端 JavaScript 中，一些 DOM 方法也返回类数组对象

```

#### Arguments对象

> Arguments 对象只定义在函数体中，包括了函数的参数和其它属性，在函数体中，arguments 指代该函数的 Arguments 对象

```
function foo(name, age, sex) {
    console.log(arguments);
}

foo('name', 'age', 'sex') // ['name', 'age', 'sex', callee: ƒ, Symbol(Symbol.iterator): ƒ]
```

#### length 属性
```
Arguments对象的length属性，表示实参的长度，举个例子：

function foo(b, c, d){
    console.log("实参的长度为：" + arguments.length)
}

console.log("形参的长度为：" + foo.length)

foo(1)

// 形参的长度为：3
// 实参的长度为：1

```

#### callee 属性 指向调用函数自身

#### Symbol(Symbol.iterator) 它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）

#### Argument和对应参数的绑定
```
function foo(name, age, sex, hobbit) {

    console.log(name, arguments[0]); // name name

    // 改变形参
    name = 'new name';

    console.log(name, arguments[0]); // new name new name

    // 改变arguments
    arguments[1] = 'new age';

    console.log(age, arguments[1]); // new age new age

    // 测试未传入的是否会绑定
    console.log(sex); // undefined

    sex = 'new sex';

    console.log(sex, arguments[2]); // new sex undefined

    arguments[3] = 'new hobbit';

    console.log(hobbit, arguments[3]); // undefined new hobbit

}

foo('name', 'age')
传入的参数，实参和 arguments 的值会共享，当没有传入时，实参与 arguments 值不会共享

除此之外，以上是在非严格模式下，如果是在严格模式下，实参和 arguments 是不会共享的。
```