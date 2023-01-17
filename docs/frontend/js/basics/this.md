# this指向

#### 浏览器环境

#### 1. 函数外面的 this，即全局作用域的 this 指向 window， 严格模式下，函数里面的 this 指向 undefined, 函数外面的 this 还是指向

#### 2. 函数内部的 this 总是指向直接调用者，如果没有直接调用者，隐含调用者是 window

#### 3. 使用 new 调用一个函数，函数里面的 this 指向实例对象

#### 4. DOM事件回调里面，this指向绑定事件的对象

```
function func(e) {
  console.log(this === e.currentTarget);   // 总是true
  console.log(this === e.target);          // 如果target等于currentTarget,这个就为true
}

const ele = document.getElementById('test');

ele.addEventListener('click', func);

currentTarget指的是绑定事件的DOM对象，target指的是触发事件的对象。DOM事件回调里面this总是指向currentTarget，如果触发事件的对象刚好是绑定事件的对象，即target === currentTarget，this也会顺便指向target。如果回调是箭头函数，this是箭头函数申明时作用域的this。

```

#### 5. 箭头函数本身没有 this，箭头函数在被声明时确定 this，会把当前作用域的 this 作为自己的 this

```
1.  var name = "monster";

    var obj = {
      name: "andrew",
      func: () => {
        console.log(this.name);
      }
    }

    var anotherFunc = obj.func;

    obj.func();      // monster
    anotherFunc();   // monster
    上述代码里面的obj.func()输出也是“monster”，是因为obj在创建时申明了箭头函数，这时候箭头函数会去寻找当前作用域，因为obj是一个对象，并不是作用域，所以这里的作用域是window，this也就是window了。

2.  var name = "monster";

    var obj = {
      name: "andrew",
      func: function () {
        return {
          getName: () => {
            console.log(this.name);
          }
        }
      }
    }

    var anotherFunc = obj.func().getName;

    obj.func().getName();      // andrew
    anotherFunc();   // andrew
    
    obj.func().getName()输出andrew，这里箭头函数是在obj.func()的返回值里申明的，
    这时他的this其实就是func()的this，因为他是被obj调用的，所以this指向obj。

    那为什么anotherFunc()输出也是“小小飞”呢？这是因为anotherFunc()输出的this，
    其实在anotherFunc赋值时就确定了：

    1var anotherFunc = obj.func().getName;其实是先执行了obj.func()
    2执行obj.func()的时候getName箭头函数被申明
    3这时候箭头函数的this应该是当前作用域的this，也就是func()里面的this
    4func()因为是被obj调用，所以this指向obj
    5调用anotherFunc时，其实this早就确定了，也就是obj，最终输出的是obj.myName。
    
3.  var name = "monster";

    function func() {
      this.name = "andrew";

      const getName = () => {
        console.log(this.name);
      }

      getName();
    }

    new func(); // 输出啥？
    这里输出的是“andrew”，原理还是一样的，箭头函数在申明时this确定为当前作用域的this，在这里就是func的作用域，跟func的this一样指向new出来的实例。如果不用new，而是直接调用，这里的this就指向window。


```


