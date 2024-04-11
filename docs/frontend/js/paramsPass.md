# 参数传递

#### 1.按值传递

ECMAScript中所有函数的参数都是按值传递的 也就是说把函数外部的值复制给函数内部的参数，就是把值从一个变量复制到另一个变量 如下：
  ```
  var a = 1;
  function foo(v) {
      v = 2;
      console.log(v) //2
  }
  foo(a)
  console.log(1) // 1

当传递 a 到函数 foo 中，相当于拷贝量一份 a 的值给了 v 函数中修改的都是 v 的值 而不会影响原来的 a 值

  ```

#### 2. 引用传递

传递给函数的是对象的引用 函数内部对参数任何修改都会影响该对象的值 因为俩者引用的是同一个对象

   ```
    var obj = { a: 1}
    function foo(param) {
        param.a = 2
        console.log(params.a) //2
    }
    foo(obj)
    console.log(obj.a) // 2
    我们上面说 js 是按值传递 现在这种情况 像是按引用传递了 其实这种是按共享传递
   ``` 

#### 按共享传递

按共享传递 传递给函数的是传递对象的引用的副本  如下：
```
var obj = {a: 1}
function foo(param) {
    param = 2
    console.log(param) // 2
}
foo(obj)
console.log(obj) // {a: 1}
```

#### 总结：

参数如果是基本类型是按值传递 如果是引用类型是按共享传递