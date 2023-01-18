# DNS域名解析 

#### DNS 域名的层级关系树一个树状结构

* 根 DNS 服务器
* 顶级域 DNS 服务器（.com,.cn...）
* 权威 DNS 服务器（163.com）


#### DNS 域名查找过程
> 根域的 DNS 服务器信息保存在互联网所有的 DNS 服务器中

1. 在客户端输入 URL 后， 会有一个查找过程， 这个过程中任何一步找到了都会结束查找流程
    1. 浏览器缓存
    2. 本地 hosts 文件
    3. 本地 DNS 服务器缓存查找

2. 如果上一步没找到 会进行如下查找：
    1. 本地 DNS 服务器会去问它的根域名服务器，“老大，能告诉我 www.server.com 的 IP 地址吗？“ 
        根域名服务器不直接用于域名解析，但它能指明一条道路
    2. 根 DNS 服务器发现后置是 .com 后，会把 .com 顶级域名服务器 IP 地址返回回来
    3. 本地 DNS 收到顶级域名服务器 IP 后， 发起请求问 “老二， 能告诉我 www.server.com 的 IP地址吗”
    4. 顶级域名服务器会返回权威服务器 IP 地址
    5. 本地 DNS 收到权威 IP 后，发起请求问 “老三， 能告诉我 www.server.com 的 IP地址吗”
    6. 权威 DNS 服务器查询后将对应的 IP 地址告诉本地 DNS
    7. 本地 DNS 再将 IP 地址返回客户端，然后客户端和目标建立连接