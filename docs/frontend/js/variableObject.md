# 变量对象

变量对象是与执行上下文有关的数据域，存储了栈上下文中定义的变量和函数

#### 全局上下文

全局上下文中的变量对象就是全局对象，全局对象是作用域链的头

#### 函数上下文

在函数上下文中，我们用活动对象(activation object, AO)来表示变量对象。

活动对象和变量对象其实是一个东西，只是变量对象是规范上的或者说是引擎实现上的，不可在 JavaScript 环境中访问，
只有到当进入一个执行上下文中，这个执行上下文的变量对象才会被激活，所以才叫 activation object，
而只有被激活的变量对象，也就是活动对象上的各种属性才能被访问。

活动对象是在进入函数上下文时刻被创建的，它通过函数的 arguments 属性初始化。arguments 属性值是 Arguments 对象

#### 执行过程

执行上下文代码会分成俩个阶段进行处理
1. 进入执行上下文

    当进入执行上下文时，这时候还没有执行代码，

    变量对象会包括：

    1. 函数的所有形参 (如果是函数上下文)

    * 由名称和对应值组成的一个变量对象的属性被创建
    * 没有实参，属性值设为 undefined
    
    2. 函数声明

    * 由名称和对应值（函数对象(function-object)）组成一个变量对象的属性被创建
    * 如果变量对象已经存在相同名称的属性，则完全替换这个属性
    
    3. 变量声明

    * 由名称和对应值（undefined）组成一个变量对象的属性被创建；
    * 如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性

2. 代码执行

在代码执行阶段，会顺序执行代码，根据代码，修改变量对象的值

#### 思考

```
1.第一题

function foo() {
    console.log(a);
    a = 1;
}

foo(); // ???

function bar() {
    a = 1;
    console.log(a);
}
bar(); // ???
第一段会报错：Uncaught ReferenceError: a is not defined。

第二段会打印：1。

这是因为函数中的 "a" 并没有通过 var 关键字声明，所有不会被存放在 AO 中。

第一段执行 console 的时候， AO 的值是：

AO = {
    arguments: {
        length: 0
    }
}
没有 a 的值，然后就会到全局去找，全局也没有，所以会报错。

当第二段执行 console 的时候，全局对象已经被赋予了 a 属性，这时候就可以从全局找到 a 的值，所以会打印 1。

2.第二题

console.log(foo);

function foo(){
    console.log("foo");
}

var foo = 1;
会打印函数，而不是 undefined 。

这是因为在进入执行上下文时，首先会处理函数声明，其次会处理变量声明，
如果如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性。
```