# 计算机网络

OSI七层协议模型
| 层级 | 作用 | 协议 |
| ---- | ----| ---- |
| 应用层 | 对应用程序的通信提供服务 | 1.FTP协议<br> 2.SMTP,POP3协议<br> 3.HTTP协议<br> 4.DNS<br> |
| 表示层 | |
| 会话层 | |
| 传输层 | 提供进程间逻辑通信+可靠或不可靠的传输功能 | 1.UDP(User Datagram Protocol)用户数据报协议: <br> ①UDP是无连接的<br> ②UDP使用最大努力交付<br> ③UDP是面向报文的,适合一次性传输少量数据<br> ④UDP没有拥塞控制,适合实时应用<br> ⑤UDP首部较少<br> 2.TCP(Transmission Control Protocol)传输控制协议<br> ①TCP是面向连接的<br> ②TCP可靠有序,不丢不重<br> ③TCP提供全双工通信<br> ④TCP面向字节流<br> |
| 网络层 | 1.分组交换<br>2.IP分片<br>  3.网络地址转换(Network Address Translation)<br>  4.子网划分和子网掩码<br>  | 1.ARP(Address Resolution Protocol)地址解析协议<br> 2.DHCP(Dynamic Host Configuration Protocol)动态主机配置协议<br> 3.ICMP(Internet Control Message Protocol)互联网控制消息协议<br> |
| 数据链路层 | 1.封装成帧<br> 2.透明传输<br>  3.差错控制<br>  4.差错纠正<br>  5.流量控制<br>  |
| 物理层 | 定义物理设备层面的传输标准 |