# 从输入url到获得页面到过程

#### 1. 构建请求
> 使用浏览器进行请求后，浏览器会先判断地址栏中输入的是 query（关键字）还是URL，
>>   1. 如果是URL，则把URL转发给网络进程，网络进程会构建请求行信息，构建好之后，浏览器就准备发起网络请求
>>   2. 如果是关键字，浏览器会自动生成一个带有我们搜索关键字的 URL，然后向默认的搜索引擎发起连接请求，后面和输入 URL 一样

#### 2. 查找强缓存
> 浏览器在发起真正的网络请求前，会先检查浏览器的强缓存，如果命中，直接返回对应资源文件的副本，否则进入下一步

#### 3. DNS解析
> 发起真正的网络请求前，首先需要进行 DNS 解析，目的就是找到 URL 对应的服务器的 IP 地址

#### 4. 建立 TCP 连接 如果是 HTTP ，三次握手之后便可进行 HTTP 的报文传输，而 HTTPS 在 TCP 三次握手之后，还需要进行 SSL / TSL 的握手过程，然后才可进行加密报文传输
> 建立了 TCP 连接， 浏览器就可以和服务器进行通信了，HTTP 中的数据就是在这个通信过程中传输的

#### 5. 发送请求

#### 6. 查找协商缓存

#### 7. 断开TCP连接

#### 8. 浏览器渲染


