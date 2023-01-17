# HTTP缓存

#### HTTP缓存分为强制缓存和协商缓存

#### 强制缓存
有俩个字段来表明失效规则（Expires / Cache-control）
* Expires的值表示服务端返回的到期时间，即下一次请求，如果时间小于服务器到期时间 直接使用缓存数据 
	1. Expires 是HTTP 1.0的东西，现在默认浏览器均默认使用HTTP 1.1，一般用来向下兼容
    2. 到期时间是由服务端生成的，如果修改了客户端的时间，就会导致缓存命中的误差
* Cache-control 有如下几个值：
	1. private 客户端可以缓存
    2. public 客户端和代理服务器都要缓存
    3. max-age 如果值为 800， 意思就是缓存的内容将在 800 秒后失效
    4. no-cache 需使用协商缓存来验证缓存数据
    5. no-store 所有内容都不会缓存，**强制缓存和协商缓存都不会触发**
    
#### 协商缓存
对比强制缓存，协商缓存会**发送请求**到服务器 
* Last-Modified / If-Modified-Since
	* Last-Modified 服务器在相应请求时，告诉浏览器资源的最后修改时间
    * If-Modified-Since 再次请求服务器时，浏览器会将上次请求到的Last-Modified的值作为 If-Modified-Since值发送给服务器，服务器接受后，发现有If-Modified-Since字段，则与被请求资源的最后修改时间进行对比，如果资源的最后修改时间大于If-Modified-Since的值，说明资源被改动过，则响应整体的资源内容。如果不大于，说明资源无修改 则相应 **HTTP 304**，告诉浏览器继续使用缓存的数据
* Etag / If-None-Match(优先级高于Last-Modified / If-Modified-Since)
	* Etag 服务器响应请求时，告诉浏览器当前资源在服务器的唯一标识（生成规则由服务器决定）
    * If-None-Match 再次请求服务器时，浏览器会将上次请求到的Etag的值作为 If-None-Match值发送给服务器，服务器接受后，发现有If-None-Match字段，则与被请求资源的最后修改时间进行对比，不同，说明资源被改动过，则响应整体的资源内容。相同，说明资源无修改 则相应 **HTTP 304**，告诉浏览器继续使用缓存的数据
    
#### 参考文章
1. [彻底弄懂HTTP缓存机制及原理](https://www.cnblogs.com/chenqf/p/6386163.html)
