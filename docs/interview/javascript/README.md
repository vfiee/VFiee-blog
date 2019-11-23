---
sidebar: "auto"
---

# Javascript面试指南

## 😃请先做一下自我介绍~
额~,自己对着墙联系哈~😃😃😃

## Javascript的数据类型都有哪些,有什么区别?
Javascript数据类型有两种:基本类型和引用类型  
基本类型:Boolean Null Undefined String Number Symbol BigInt  
引用类型:Object Array Function Date ...  
::: tip 提示
堆内存保存引用类型的值.  
栈内存保存基本类型的值和引用类型的指针. 
:::
 

## 说一下你工作中常用的ES6
解构赋值  
扩展运算符  
```Promise```  
```let const```  
```async await```    
```import export```  
```String [includes]```  
```Number [isFinite isNaN parseInt parseFloat isInteger]```  
```Array [from find findIndex keys values entries includes flat flatMap]```  
```Object [is assign keys values entries fromEntries]```  
```Function [ 箭头函数 默认参数 rest参数 ]```  


## 请描述一下ES6中Set,Map,WeakSet,WeakMap,Symbol?

Symbol可以保证对象的每个属性名都是独一无二的,避免了为新对象添加方法时key名称相同;
Symbol是一种原始数据类型.  
Symbol函数生成的值都是独一无二的.  
Symbol函数接受字符串作为参数,如果传的是对象,将调用其toString方法.  
Symbol值不能与其他类型的值进行运算.  
Symbol可以转为String和Boolean,无法转成Number.  
Symbol值作为对象属性名时,访问时不能使用点运算符.  
Symbol作为属性名,该属性不会出现在```for...in```、```for...of```循环中，也不会被```Object.keys()```、```Object.getOwnPropertyNames()```、```JSON.stringify()```返回.  
```Object.getOwnPropertySymbols()```可以获取目标对象所有 Symbol 属性名。  
```Reflect.ownKeys()```方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。  
```Symbol.keyFor()``` 方法返回以key命名的且注册的Symbol类型的值,没有则返回undefined。  
```Symbol.for(key)``` 搜索全局有没有以key命名的Symbol值,如果有则返回,没有则新建并注册到全局.  


Set     对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用  
WeakSet 对象允许你将[弱保持对象]存储在一个集合中。  
::: tip Set和WeakSet的区别
WeakSet 对象中只能存放对象引用, 不能存放值, 而 Set 对象都可以.  
WeakSet 对象中存储的对象值都是被弱引用的, 如果没有其他的变量或属性引用这个对象值, 则这个对象值会被当成垃圾回收掉. 
:::

```Set.size``` 返回当前set实例的成员总数;  
```Set/WeakSet.add(value)``` 添加value,返回set本身  
```Set/WeakSet.delete(value)``` 删除value,返回Boolean表示是否删除成功.  
```Set/WeakSet.has(value)``` 判断set实例是否含有value成员,返回Boolean表示是否是Set成员.  
```Set/WeakSet.clear()``` 清除所有成员;  
```Set.keys()``` 返回set键名的遍历器;  
```Set.values()``` 返回键值的遍历器;  
```Set.entries()``` 返回键值对的遍历器;  
```Set.forEach(callbackFn([value,key,set]),[,thisArgs])``` 使用回调函数遍历每个成员;  

Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。  
WeakMap 对象是一组键值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。
::: tip  Map与Object的区别
一个Object的键只能是字符串或者 Symbols，但一个 Map 的键可以是任意值，包括函数、对象、基本类型。   
Map 中的键值是有序的，而添加到对象中的键则不是。  
Map的size属性表示Map的键值对个数,而Object键值个数需要计算.  
Map 可直接进行迭代，而 Object 的迭代需要先获取它的键数组，然后再进行迭代。  
Map 在涉及频繁增删键值对的场景下会有些性能优势.  
Object 都有自己的原型，原型链上的键名有可能和你在对象上的设置的键名产生冲突。
:::

```Map.size``` Map对象的键值对的数量。   
```Map/WeakMap.set(key,value)``` 设置Map对象中键的值并返回该Map对象  
```Map/WeakMap.get(key)```  返回键对应的值，如果不存在，则返回undefined。  
```Map/WeakMap.delete(key)```  如果 Map 对象中存在该元素，则移除它并返回 true；否则如果该元素不存在则返回 false  
```Map/WeakMap.has(key)```    返回一个布尔值，表示Map实例是否包含键对应的值。  
```Map.clear()```     移除Map对象的所有键/值对 。  
```Map.keys()```      返回一个新的 Iterator对象， 它按插入顺序包含了Map对象中每个元素的键 。  
```Map.values()```    返回一个新的Iterator对象，它按插入顺序包含了Map对象中每个元素的值 。  
```Map.entries()```   返回一个新的 Iterator 对象，它按插入顺序包含了Map对象中每个元素的 [key, value] 数组。  
```Map.forEach(callbackFn([value,key,map]),[,thisARg])```     按插入顺序，为 Map对象里的每一键值对调用一次callbackFn函数。如果为forEach提供了thisArg，它将在每次回调中作为this值。  

## let const var之间的区别?
一: var  
可重复声明  
存在变量提升  
只有函数作用域和全局作用域  
绑定全局作用域(不声明,变量默认为全局变量,例如a=1)  

二: let  const   
不存在变量提升  
不可以重复声明(相同作用域)  
变量处在一个自块顶部到初始化处理的“暂存死区”中  
不绑定全局作用域  

三: const  
const声明必须赋值  
const声明创建一个值的只读引用(并不意味着值是不可变的,只是变量编标志不能重新分配).  



## 为什么var可以重复声明?
::: tip JS运行时
编译器：负责语法分析和代码生成.  
引擎:负责整个过程中JavaScript的编译及执行过程。例如:V8引擎.  
作用域：负责收集并维护所有的标识符（变量）.  
:::
```js
var num = 1;
var num = 2;
/*
代码分析:
1.
编译器遇到var num;
编译器询问作用域:当前作用域是否有变量num? 
作用域回答:当前没有变量num,我马上生成一个变量num!
编译器回答:好的.然后生成为num赋值1的代码供引擎运行.

2.
引擎运行代码num=1;
引擎问作用域:当前作用域存在num变量么?
作用域回答:存在.
引擎为变量num赋值为1.

3.
编译器遇到var num;
编译器询问作用域:当前作用域是否有变量num? 
作用域回答:有的!
编译器忽略var num,然后生成为num赋值2的代码供引擎运行.

4.
引擎运行代码num=2;
引擎问作用域:当前作用域存在num变量么?
作用域回答:存在.(如果不存在则抛出异常)
引擎为变量num赋值为1.
*/

```
## 描述一下你对Promise的理解,Promise的原理是什么?
Promise 表示一个异步操作的最终结果.  
Promise 有三种状态 pending fulfilled rejected.  

::: tip 知识点
JavaScript是单线程的语言  
Event Loop是javascript的执行机制  
:::

1. new Promise时，需要传递一个 executor 执行器，执行器立刻执行.  
2. executor 接受两个参数，分别是 resolve 和 reject.  
3. promise 只能从 pending 到 rejected, 或者从 pending 到 fulfilled.  
4. promise 的状态一旦确认，就不会再改变.  
5. promise 都有 then 方法，then 接收两个参数，分别是 promise 成功的回调 onFulfilled, 和 promise 失败的回调 onRejected.  
6. 如果调用 then 时，promise已经成功，则执行 onFulfilled，并将promise的值作为参数传递进去。  
   如果promise已经失败，那么执行 onRejected, 并将 promise 失败的原因作为参数传递进去。  
   如果promise的状态是pending，需要将onFulfilled和onRejected函数存放起来，等待状态确定后，再依次将对应的函数执行(发布订阅)  
7. then 的参数 onFulfilled 和 onRejected 可以缺省  
8. promise 可以then多次，promise 的then 方法返回一个 promise  
9. 如果 then 返回的是一个结果，那么就会把这个结果作为参数，传递给下一个then的成功的回调(onFulfilled)  
10. 如果 then 中抛出了异常，那么就会把这个异常作为参数，传递给下一个then的失败的回调(onRejected)  
11. 如果 then 返回的是一个promise,那么需要等这个promise，那么会等这个promise执行完，promise如果成功，  
  就走下一个then的成功，如果失败，就走下一个then的失败  

优点:  
1.Promise对象的状态只有异步操作的结果可以决定.  
2.一旦状态改变,不会再变.  
3.Promise对象可以将异步操作以同步的流程变现出来,避免了回调地狱.  
缺点:  
1.一旦创建立即执行,无法取消.  
2.如果不设置回调,Promise内部的错误无法被外部捕获.  
3.Promise处于pending状态时,无法得知是刚刚开始还是即将结束.  

Promise.prototype.then()  
为Promise实例添加状态改变时的回调函数,第一个参数为resolved状态的回调,第二个参数为rejected状态的回调.  
then方法返回的是一个新的Promise实例,因此可以采用链式写法.  


Promise.prototype.catch()  
Promise.prototype.catch方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数。  


Promise.prototype.finally()  
Promise.prototype.finally不管 Promise 对象最后状态如何，都会执行的操作  


Promise.all()  
接受一个可迭代的接口  
当其中有一个状态变为rejected时,Promise的状态就变为rejected;  
当所有状态变为fulfilled时,Promise的状态就变为fulfilled;  

Promise.race()  
接受一个可迭代的接口  
当其中有一个状态改时,Promise的状态就变为该状态;  

Promise.allSettled()  
接受一个可迭代的接口  
只有当所有参数实例都改变状态,Promise才会改变状态.  
Promise实例一旦结束,状态总是fulfilled,不会变成rejected;  

Promise.any()  
接受一个可迭代的接口  
当其中有一个状态变为fulfilled时,Promise的状态就变为fulfilled;  
当所有状态变为rejected时,Promise的状态就变为rejected;  

Promise.resolve()  
返回一个状态为fulfilled的Promise对象.  

Promise.reject()  
返回一个状态为rejected的Promise对象.  


## JS事件循环机制(Event Loop) 

::: tip 知识点
heap：堆  
stack：栈  
synchronous：同步任务  
asynchronous：异步任务(宏任务和微任务都是异步任务)  
monitoring process:监控进程  
execution context stack：执行栈  
task queue/callback queue：任务队列  
micro-task：微任务(原生Promise,process.nextTick, MutationObserver)  
macro-task：宏任务(包括整体代码script,setTimeout,setInterval,setImmediate,I/O,UI rendering。)  
:::
1.JS是单线程的,上一个事件没有执行完成就不会执行下一个事件,所以异步函数由此诞生.  
2.事件机制遇到同步函数,直接执行.遇到异步函数会区分异步函数类型并分别加入宏/微任务队列.  
3.同步函数执行完毕,开始执行微任务,微任务执行完毕,再次执行宏任务.  
4.上述过程不断重复形成事件循环.  

## CommonJS中的require/exports 和 ES6中的import/export的区别?
1.输出结果不同  
CommonJS模块输出的是一个值的复制，ES6模块输出的是值的引用    

2.加载机制不同  
CommonJS模块是运行时加载，ES6模块是编译时输出接口  
CommonJS模块加载的是一个对象(module.exports属性),该对象只有在脚本运行结束时才会生成.  
ES6模块加载是对外接口的一种静态定义,在代码静态解析阶段就会生成.

```js
// utils.js
exports.num=0;
setTimeout(function(){
    console.log(`utilsJs:${++exports.num}`);
},100);

// common.js
const {num} = require('./utils');
setTimeout(function(){
    console.log(`commonJs:${num}`);
},500);

// es6.js
import {num} from './utils';
setTimeout(function(){
    console.log(`commonJs:${num}`);
},500);


```

## 描述一下this的指向问题?
1，当函数在没有任何修饰的情况下调用，非严格模式下，this指向全局对象，严格模式下this指向undefined。（默认绑定）  
2，当函数由一个对象引导调用时，this指向该对象。（隐式绑定）  
3，函数通过apply,call,bind绑定时，this指向绑定的对象。（显式绑定）  
4，当函数被当做构造函数使用，用new引导调用时，this指向new创建出来的对象。（new绑定）；  
5，箭头函数其this取决于函数定义时所在的上下文。  
其优先级为：new绑定 > 显示绑定 > 隐式绑定 > 默认绑定；  


## 描述一下你对闭包的了解?
::: tip 提示
正常情况下,函数的执行上下文在出栈后,内部的变量失去引用并等待垃圾回收机制回收,  
闭包保留了对函数上下文的引用,导致变量没有被回收,容易引发内存泄漏.  
:::

闭包:函数与对其状态的引用共同构成闭包,也就是说,闭包可以让你从内部函数访问外部函数作用域.  

作用:闭包可以模拟私有函数和变量.  
```js
function fn(){
  let counter = 1;
  let getCounter = function(){
    return counter;
  }
  let addCounter = function(){
    return ++counter;
  }
  let reduceCounter = function(){
    return --counter;
  }
  return {
    add:addCounter,
    reduce:reduceCounter,
    getValue:getCounter,
  }
}
let Counter = fn();
console.log(Counter.getValue());
console.log(Counter.add());
console.log(Counter.reduce());

```


## == 和 === 有什么区别?
=== 严格相等,判断类型和值是否都相等.  
==  宽松相等,先执行类型转换,在进行比较.  

> **[JS比较表](https://dorey.github.io/JavaScript-Equality-Table/)**

## 什么是跨域? 跨域的解决方法有哪些?
同源策略(Same Origin Policy):协议,域名,端口三者相同称之为同源.(目的是为了防止浏览器遭受XSS,CSFR攻击)

同源策略限制行为:  
Ajax请求无法发送.  
Dom,JS对象无法获得.  
Cookie,LocalStorage,IndexDB无法读取.  

解决方案:  
jsonp  
nginx代理  
postMessage  
WebSocket协议  
CORS(跨域资源共享)  
window.name + iframe  

## jsonp原理跨域
原理:为减轻Web服务器的负担,浏览器允许JS,CSS,IMG等静态资源的动态加载,  
通过创建```<script /> <link /> <img />``` 标签并赋值,从而加载不同域名下的静态资源.  
达到跨域的目的.  

缺点:不能使用post请求  
```js
// 客户端
let script = document.createElement("script");
script.type = "text/javascript";
// jsonpCallback是前后端协定的一个变量key
script.src = `http://localhost:1011/jsonp?name=vyron&id=964769&jsonpCallback=jsonpCallback`;
// 服务器返回调用的全局函数
document.head.appendChild(script);

function jsonpCallback(data){
  console.log(data);
}

// nodejs
let http = require('http');
http.createServer().on("request", function (req, res) {
    console.log(req.params);
    res.writeHead(200, { "Content-type": "text/javascript" });
    res.write(`jsonpCallback(${JSON.stringify(req.url.split('?')[1])})`);
    res.end();
}).listen(1011);
console.info(`now, server is running on port 1011....`); 

```

## nginx反向代理跨域
原理:客户端发起的请求由反向代理服务器转发给内部网络上的服务器,并将内部网络的返回值返回给客户端,  
此时代理服务器对外表现为一个反向代理服务器.  

```nginx
# nginx服务器配置
server {
    listen       7777;
    server_name  www.vfiee.cn;

    location / {
        proxy_pass   http://www.vyron.cn:7777;
        proxy_cookie_domain www.vfiee.cn www.vyron.cn; #修改cookie里域名
        index  index.html index.htm;
        add_header Access-Control-Allow-Origin http://www.vfiee.cn;
        add_header Access-Control-Allow-Credentials true;
    }
}
```
```js
// js发起请求
let XHR = new XMLHttpRequest();
XHR.withCredentials = true;
XHR.open("get", "www.vfiee.cn:7777?name=vyron", true);
XHR.onreadystatechange(function() {
  if (XHR.readyState === XMLHttpRequest.DONE && XHR.status === 200) {
    console.log(XHR.response);
  }
});
```

## postMessage跨域
postMessage是HTML5提供的API,用于安全地实现跨源通信.  
```js
// 窗口1
export default {
  name: "HelloWorld",
  data: () => ({
    window: null
  }),
  mounted() {
    window.addEventListener("message", this.onReceiveMsg, false);
  },
  methods: {
    openWindow: function() {
      if (this.window) {
        this.sendMessage(JSON.stringify({ data: "来源于A页面的消息" }));
      } else {
        this.window = window.open("http://localhost:8081");
        this.sendMessage(JSON.stringify({ data: "来源于A页面的消息" }));
      }
    },
    sendMessage: function(msg) {
      this.window.postMessage(msg, "http://localhost:8081");
    },
    onReceiveMsg: function(data) {
      this.origin = data.origin;
      if (this.origin !== "http://localhost:8081") return;
      console.log("我接收到消息了~");
      console.log(data.data);
    }
  }
};

// 窗口二
export default {
  name: "HelloWorld",
  data: () => ({
    window: null
  }),
  mounted() {
    window.addEventListener("message", this.onReceiveMsg, false);
  },
  methods: {
    onReceiveMsg: function(data) {
      if (data.origin !== "http://localhost:8080") return;
      this.window = event.source;
      console.log(data.data);
      this.sendMessage(JSON.stringify("来源于B的消息"));
    },
    sendMessage: function(msg) {
      this.window && this.window.postMessage(msg, "http://localhost:8080");
    }
  }
};

```

## CORS(跨域资源共享)跨域
```js
let XHR = new XMLHttpRequest(); // IE8/9需用window.XDomainRequest兼容
// 前端设置是否带cookie
XHR.withCredentials = true;
XHR.open('post', 'http://www.vfiee.cn', true);
XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
XHR.send('name=vyron');
XHR.onreadystatechange = function() {
    if (XHR.readyState ===XMLHttpRequest.done && xhr.status == 200) {
        console.log(XHR.response);
    }
};
// 前端设置withCredentials,后台Response Headers中也要携带Access-Control-Allow-Credentials
```

## window.name 配合 iframe
```js
function crossOriginByWindowNameAndIframe(targetUrl,callback) {
  let onLoadCounter = 0;
  let selfLocation = window.location.href;
  let iframe = document.createElement("iframe");
  iframe.src = targetUrl;
  iframe.height = 0;
  iframe.width = 0;
  iframe.onload = function() {
    if (state === 0) {
      iframe.contentWindow.location = selfLocation;
      state = 1;
    } else if (state === 1) {
      callback(iframe.contentWindow.name);
      destoryIframe();
    }
  };
  document.body.appendChild(iframe);
  let destoryIframe = function() {
    iframe.contentWindow.document.write("");
    iframe.contentWindow.close();
    document.body.removeChild(iframe);
  }
}

let targetUrl = "http://localhost:8081";
crossOriginByWindowNameAndIframe(targetUrl,onWindowNameChange);

function onWindowNameChange(data) {
  console.log(data);
}
```

## 描述一下localstorage sessionStorage cookie以及他们之间的区别?
生命周期:  
cookie:可设置失效时间,不设置关闭浏览器后失效.   
localStorage:除非手动清除,否则永久保存.  
sessionStorage:仅在当前网页会话下有效,关闭网页或浏览器被清除.  

数据大小限制:  
cookie:4KB  
localStorage: 微信2.5M  PC5M  
sessionStorage: 微信unlimited  PC5M  
**[测试Storage大小限制](http://dev-test.nemikor.com/web-storage/support-test/)**  

网络请求:  
cookie:每次网络请求都会携带在HTTP头部,携带过多数据会引发性能问题.  
localStorage:不主动参与和服务器通信.  
sessionStorage:不主动参与和服务器通信. 



# 实现问题

## 怎么判断两个对象相等?
```js
// 基本类型只需要判断值是否相等
// 引用类型需要判断键值是否都相等
function isDeepEqual(l, r) {
    const isObject = obj => typeof obj === "object";
    const getObjLen = obj => Object.keys(obj).length;
    if (l === r) {
        return true;
    } else if (!isObject(l) || !isObject(r)) {
        return Object.is(l, r);
    } else if (getObjLen(l) !== getObjLen(r)) {
        return false;
    }
    for (let key in l) {
        if (r.hasOwnProperty(key)) {
            if (!isDeepEqual(l[key], r[key])) {
                return false;
            }
        } else {
            return false;
        }
    }
}
```

## 描述一下防抖和节流的区别及应用场景
```js
// 函数防抖:设定一个倒计时-间隔,在倒计时-间隔内再次触发该函数,时间重置并重新倒计时,倒计时完毕,执行回调函数.
// 函数节流:设定一个倒计时-间隔,在倒计时间隔内多次触发该函数,只会执行最后一次触发函数.
// 假设不停点击一个按钮,防抖函数永远不会执行(每次点击都重置倒计时),节流函数会每隔一段时间执行一次.

function debounce(fn, delay) {
  return function(args) {
    let _this = this;
    fn.__id__ && clearTimeout(fn.__id__);
    fn.__id__ = setTimeout(function() {
      fn.call(_this, args);
      clearTimeout(fn.__id__);
    }, delay);
  };
}

function throttle(fn, delay) {
  let lastTime, timer;
  return function() {
    let _this = this;
    let _args = arguments;
    let now = +new Date();
    if (lastTime && lastTime + delay > now) {
      timer && clearTimeout(timer);
      timer = setTimeout(function() {
        lastTime = now;
        fn.apply(_this, _args);
      }, delay);
    } else {
      lastTime = now;
      fn.apply(_this, _args);
    }
  };
}

```

## 函数内部 arguments 变量有哪些特性,有哪些属性,如何将它转换为数组
特性:  
arguments是一个类数组对象.  
arguments 对象总会被创建，除非作为局部变量声明和作为形式参数。  
arguments 对象为其内部属性以及函数形式参数创建 getter 和 setter 方法。形参的值和arguments对象的值相互关联.  

```js
// arguments的值和形参的值相互关联
function test(a,b,c){
  arguments[0] = 1;
  arguments[1] = "string";
  arguments[2] = function(){
    console.log(this);
  };
  console.log(a,b,c);
}
test("I'm string",10,null);
```

属性:  
callee属性指向当前执行的函数  
length属性指向传递给当前函数的参数数量  

```js
// arguments转换为数组
Array.prototype.slice.call(arguments);
arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);

[...arguments];
Array.from(arguments);

```




## call,apply,bind相同点和不同点?
相同点:  
call,apply,bind方法允许传参绑定函数执行的this指向.  
call,apply,bind方法的第一个参数都是在函数运行时使用的 this 值.  

执行机制不同:  
call,apply方法直接执行函数.  
bind方法不执行函数,而是创建并返回一个新的函数.  

绑定语法不同:  
apply方法除第一个参数外,接受一个参数数组.  
call,bind方法除第一个参数外,接受参数列表.  

```js
let obj = {
	name:'xiaoming',
	sayArgs:function(args){
        console.log(this);
        console.log(args);
        console.log(arguments);
	}
}
let obj2 = {
	name:'xiaohua',
    sex:'gril',
	sayArgs:function(args){
        console.log(this);
        console.log(args);
		console.log(arguments);
	}
}
function test(){
    console.log(this);
}
// call实现
Function.prototype.polyfillCall = function(context){
    context = context === null || context === undefined ? window : Object(context);
    let args = Array.prototype.slice.call(arguments, 1);
    context.__fn__ = this;
    let result = args.length ? context.__fn__(...args) : context.__fn__();
    delete context.__fn__;
    return result;
}

obj.sayArgs.polyfillCall(obj2,[],{},2,'test',null,undefined,test,/[a-zA-Z0-9_]/,new Date());

// apply实现
Function.prototype.polyfillApply = function(context) {
    context = context === null || context === undefined ? window : Object(context);
    context.__fn__ = this;
    let args = Array.prototype.slice.call(arguments, 1);
    let result = args ? context.__fn__([...arguments[1]]) : context.__fn__();
    delete context.__fn__;
    return result;
}


// bind实现
/*
bind() 方法会创建一个新函数  
新函数被调用时，新函数的this指向bind()函数的第一个参数  
之后的参数(从第二个算起)将以参数列表的形式传递到新函数
新函数作为构造函数时,bind绑定的作用域将失效,但传入的参数依然生效.
*/
Function.prototype.polyfillBind = function(context) {
  if (typeof this !== 'function') {
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }
    let _this = this;
    let args = Array.prototype.slice.call(arguments,1);
    let FBlank = function(){};
    let FBind = function(){
      // this instanceof FBind === true时,说明返回的fBound被当做new的构造函数调用
        return _this.apply(
            this instanceof FBind ? this : context,
            args.concat(Array.prototype.slice.call(arguments))
        );
    };
    // 维护原型关系
    if(this.prototype) {
      // 当执行Function.prototype.bind()时, this为Function.prototype 
      // this.prototype(即Function.prototype.prototype)为undefined
        FBlank.prototype = this.prototype;
    }
    FBind.prototype = new FBlank();
    return FBind;
}


```


## 浅拷贝和深拷贝的区别? 分别实现一个深浅拷贝
数据类型分为基本类型和引用类型  
基本类型存储在栈内存中.  
引用类型存储在堆内存中,变量的值存储的是堆内存的指针.  
基本类型:Number String Boolean Null Undefined Symbol BigInt  
引用类型:Object Array Function Date ...  

浅拷贝拷贝基本类型的值和引用类型的指针.  
深拷贝拷贝一个和拷贝对象完全一样的数据,并且不共享一个指针.  

浅拷贝的原生方法:  
```js
{...object}
Object.assign();

[...array]
Array.prototype.concat();
Array.prototype.slice();
```

深拷贝的原生方法:  
JSON.parse(JSON.stringify());  
原理:  
JSON.stringify将对象转成字符串  
JSON.parse将字符串生成新的对象,开辟新的栈  
缺点:无法处理函数  

浅拷贝实现:  
 ```js
export function clone(target) {
    let isObject = target instanceof Object;
    if (!isObject) return target;
    let result = {};
    for (let key in target) {
        if (target.hasOwnProperty(key)) {
            result[key] = target[key];
        }
    }
    return result;
}
``` 
深拷贝实现:  
```js
export function cloneDeep(target) {
    let isObject = value => value instanceof Object;
    let getType = value => {
        let type = Object.prototype.toString.call(value);
        return type.match(/^\[object\s([a-zA-Z]+)\]$/)[1];
    }
    let isArray = array => getType(array) === "Array";
    let getExtraObj = (value) => {
        let type = getType(value);
        if (type === "RegExp") {
            let reg = new RegExp(value.source, value.flags);
            if (value.lastIndex) {
                reg.lastIndex = value.lastIndex;
            }
            return reg;
        } else if (type === "Date") {
            return new Date(value.getTime());
        } else if (type === 'Function') {
            return value;
        }
    }
    if (!isObject(target)) return target;
    let extraResult = getExtraObj(target);
    if (extraResult) {
        return extraResult;
    }
    let set = new Set();
    let cloneFunc = function (value) {
        let result = isArray(value) ? [] : {};
        for (let key in value) {
            if (value.hasOwnProperty(key)) {
                let ele = value[key];
                if (isObject(ele)) {
                    if (set.has(ele)) {
                        result[key] = ele;
                        continue;
                    }
                    set.add(ele);
                    result[key] = cloneDeep(ele);
                } else {
                    result[key] = ele;
                }
            }
        }
        return result;
    }
    let result = cloneFunc(target);
    set.clear();
    return result;
}
```

## 创建一个长度为5的空数组,生成一个(2~32)之间的随机证书rand,递归将随机整数rand插入arr,如果arr存在则重新生成并插入,输出一个长度为5且内容不重复的arr

```js
export const randomRange = (min, max) => {
    min = parseInt(min);
    max = parseInt(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
export function archiveThat() {
    let arr = new Array(5);
    let mathRandom = randomRange.bind(null, 2, 32);
    let insertArr = (randFunc, arr) => {
        let randNum = randFunc();
        arr = arr.flat();
        if (arr.includes(randNum)) {
            return insertArr(randFunc, arr);
        }
        arr.push(randNum);
        if (arr.length === 5) {
            return arr;
        }
        return insertArr(randFunc, arr);
    }
    return insertArr(mathRandom, arr);
}
```


## 实现一个new运算符
new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例.  
new进行了一下操作:  
1.创建了一个空的对象.  
2.设置空对象的构造函数.  
3.将空对象作为this的上下文.  
4.如果函数没有返回对象,则返回this.  

```js
function polyfillNew(fn) {
  let obj = Object.create(fn.prototype);
  let ret = fn.apply(obj,Array.prototype.slice.call(arguments,1));
  return ret instanceof Object ? ret : obj;
}

function Person(name,sex){
  this.name = name;
  this.sex = sex;
}

let polyMing = polyfillNew(Person,"ming","男");
console.log(polyMing);
console.log(polyMing instanceof Person);

let ming = new Person('ming','男');
console.log(ming);
console.log(ming instanceof Person);
```


## 实现一个JSON.stringify JSON.parse
```js
// 来源于MDN,并做了丢丢优化
JSON.polyfillStringify = function(value) {
  let toString = Object.prototype.toString;
  let isArray =
    Array.isArray ||
    function(arr) {
      return toString.call(arr) === "[object Array]";
    };
  let escMap = {
    '"': '\\"',
    "\\": "\\\\",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t"
  };
  let escFunc = function(m) {
    return (
      escMap[m] || "\\u" + (m.charCodeAt(0) + 0x10000).toString(16).substr(1)
    );
  };
  let escRE = /[\\"\u0000-\u001F\u2028\u2029]/g;
  let isIgnore = value =>
    value === void 0 ||
    typeof value === "symbol" ||
    toString.call(value) === "[object Function]";
  let throwErr = () => {
    throw new TypeError("Converting circular structure to JSON");
  };
  let wkSet = new WeakSet();
  return function stringify(value) {
    if (value === null) {
      return "null";
    } else if(isIgnore(value)) {
      return void 0;
    }else if (typeof value === "number") {
      return isFinite(value) ? value.toString() : "null";
    } else if (typeof value === "boolean") {
      return value.toString();
    } else if (typeof value === "object") {
      if (typeof value.toJSON === "function") {
        // 处理Date
        wkSet.has(value) && throwErr();
        wkSet.add(value);
        return stringify(value.toJSON());
      } else if (isArray(value)) {
        // 处理数组
        wkSet.has(value) && throwErr();
        var res = "[";
        for (var i = 0; i < value.length; i++) {
          res +=
            (i ? ", " : "") + (isIgnore(value[i]) ? null : stringify(value[i]));
        }
        wkSet.add(value);
        return res + "]";
      } else if (toString.call(value) === "[object Object]") {
        // 处理对象
        wkSet.has(value) && throwErr();
        var tmp = [];
        for (var k in value) {
          if (value.hasOwnProperty(k) && !isIgnore(value[k])) {
            tmp.push(stringify(k) + ": " + stringify(value[k]));
          }
        }
        wkSet.add(value);
        return "{" + tmp.join(", ") + "}";
      }
    }
    return '"' + value.toString().replace(escRE, escFunc) + '"';
  };
  return result;
}

JSON.polyfillParse = function(json,type='function'){
  return type === "function"
    ? new Function("return " + json)()
    : eval("(" + json + ")");
}
```


## 实现一个柯里化函数
柯里化:将使用多个参数的函数转换成一系列使用一个参数的函数，并且返回接受余下的参数而且返回结果的新函数的技术。  
实现原理:「用闭包把传入参数保存起来，当传入参数的数量足够执行函数时，就开始执行函数, 否则继续返回函数」  
```js
const curry = function(fn,length){
  let length = length || fn.length;
  const _slice = Array.prototype.slice;
  return function(){
    let args = _slice.call(arguments);
    return args.length>=length ? fn.apply(this,args) : curry(fn.bind(this,...args),length-args.length)
  }
}

const curryEs6 = (fn, ...args) =>
  args.length >= fn.length ? fn(...args) : curryEs6.bind(null, fn, ...args);
```


## 实现一个Promise

```js
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function Promise(executor) {
    let _self = this;
    // Promise的状态
    _self.status = PENDING;
    // Promise的返回值
    _self.value = void 0;
    // resolved的回调函数
    _self.onFulfilled = [];
    // rejected的回调函数
    _self.onRejected = [];

    function onResolve(value) {
        if (_self.status !== PENDING) return;
        _self.status = FULFILLED;
        _self.value = value;
        _self.onFulfilled.forEach(fn => fn());
    }

    function onReject(reason) {
        if (_self.status !== PENDING) return;
        _self.status = REJECTED;
        _self.value = reason;
        _self.onRejected.forEach(fn => fn());
    }

    try {
        executor(onResolve, onReject);
    } catch (err) {
        onReject(err);
    }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : value => value;
    onRejected = typeof onRejected === "function" ? onRejected : reason => { throw reason };
    let _self = this;
    let promiseThen = new Promise((resolve, reject) => {
        switch (_self.status) {
            case FULFILLED: {
                setTimeout(() => {
                    try {
                        let value = onFulfilled(_self.value);
                        handlePromise(promiseThen, value, resolve, reject);
                    } catch (err) {
                        reject(err);
                    }
                });
                break;
            }
            case REJECTED: {
                setTimeout(() => {
                    try {
                        let reason = onRejected(_self.value);
                        handlePromise(promiseThen, reason, resolve, reject);
                    } catch (err) {
                        reject(err);
                    }
                });
                break;
            }
            default: {
                _self.onFulfilled.push(() => {
                    setTimeout(() => {
                        try {
                            let value = onFulfilled(_self.value);
                            handlePromise(promiseThen, value, resolve, reject);
                        } catch (err) {
                            reject(err);
                        }
                    });
                });
                _self.onRejected.push(() => {
                    setTimeout(() => {
                        try {
                            let reason = onRejected(_self.value);
                            handlePromise(promiseThen, reason, resolve, reject);
                        } catch (err) {
                            reject(err);
                        }
                    });
                });
                break;
            }
        }
    });
    return promiseThen;
}
function handlePromise(promiseIns, value, resolve, reject) {
    if (promiseIns === value) {
        reject(new TypeError('Chaining cycle detected for promise'));
    }
    if (value && typeof value === 'object' || typeof value === 'function') {
        let isUsed;
        try {
            let valueThen = value.then;
            if (typeof valueThen === 'function') {
                valueThen.call(value,
                    (res) => {
                        if (isUsed) return;
                        isUsed = true;
                        handlePromise(promiseIns, res, resolve, reject);
                    },
                    (err) => {
                        if (isUsed) return;
                        isUsed = true;
                        reject(err);
                    },
                );
            } else {
                if (isUsed) return;
                isUsed = true;
                resolve(value);
            }
        } catch (err) {
            if (isUsed) return;
            isUsed = true;
            reject(err);
        }
    } else {
        resolve(value);
    }
}

Promise.defer = Promise.deferred = function () {
    let def = {};
    def.promise = new Promise((resolve, reject) => {
        def.resolve = resolve;
        def.reject = reject;
    });
    return def;
}

/**
1.如果传入的value本身就是promise对象，那么Promise.resolve将不做任何修改、原封不动地返回这个promise对象。
2.如果 value 是个 thenable 对象，返回的promise会“跟随”这个thenable的对象，采用它的最终状态
3.其他情况，直接返回以该值为成功状态的promise对象。
 */
Promise.resolve = function (value) {
    if (value instanceof Promise) {
        return value;
    }
    return new Promise((resolve, reject) => {
        if (value && value.then && typeof value.then === 'function') {
            setTimeout(() => {
                value.then(resolve, reject);
            });
        } else {
            resolve(value);
        }
    })
}
// Promise.reject()方法的参数，会原封不动地作为reject的理由，变成后续方法的参数。
Promise.reject = function (reason) {
    return new Promise((resolve, reject) => {
        reject(reason);
    })
}

// Promise.prototype.catch 用于指定出错时的回调，是特殊的then方法，catch之后，可以继续then
Promise.prototype.catch = function (onReject) {
    return this.then(null, onReject);
}
// 不管成功还是失败，都会走到finally中,并且finally之后，还可以继续then。
// 并且会将值原封不动的传递给后面的then.
Promise.prototype.finally = function (onFinally) {
    return this.then((value) => {
        return Promise.resolve(onFinally())
            .then(() => {
                return value;
            });
    }, (err) => {
        return Promise.resolve(onFinally())
            .then(() => {
                throw (err);
            });
    });
}


/**
1.如果传入的参数是一个空的可迭代对象，那么此promise对象回调完成(resolve),只有此情况，是同步执行的，其它都是异步返回的。
2.如果传入的参数不包含任何 promise，则返回一个异步完成.
3.promises 中所有的promise都promise都“完成”时或参数中不包含 promise 时回调完成。
4.如果参数中有一个promise失败，那么Promise.all返回的promise对象失败
5.在任何情况下，Promise.all 返回的 promise 的完成状态的结果都是一个数组
 */
Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        let index = 0;
        let result = [];
        let proLen = promises.length;
        if (proLen === 0) {
            resolve(result);
        } else {
            for (let i = 0; i < proLen; i++) {
                Promise.resolve(promises[i])
                    .then((data) => {
                        result[i] = data;
                        ++index;
                        if (index === proLen) {
                            resolve(result);
                        }
                    }).catch((err) => {
                        reject(err);
                        return;
                    });
            }
        }
    });
}

/**
1.race 函数返回一个 Promise，它将与第一个传递的 promise 相同的完成方式被完成。它可以是完成（ resolves），也可以是失败（rejects），这要取决于第一个完成的方式是两个中的哪个。
2.如果传的迭代是空的，则返回的 promise 将永远等待。
3.如果迭代包含一个或多个非承诺值和/或已解决/拒绝的承诺，则 Promise.race 将解析为迭代中找到的第一个值。
 */
Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        let proLen = promises.length;
        if (proLen === 0) {
            return;
        } else {
            for (let i = 0; i < proLen; i++) {
                Promise.resolve(promises[i])
                    .then((data) => {
                        resolve(data);
                        return;
                    }, (err) => {
                        reject(err);
                        return;
                    });
            }
        }
    });
}

Promise.allSettled = function (promises) {
    return new Promise((resolve) => {
        let index = 0;
        let result = [];
        let _self = this;
        let proLen = promises.length;
        function handResult(i, data) {
            result[i] = data;
            ++index;
            if (index === proLen) {
                resolve(result);
            }
        }
        if (proLen === 0) {
            resolve(result);
        } else {
            for (let i = 0; i < proLen; i++) {
                Promise.resolve(promises[i])
                    .then((data) => {
                        handResult(i, {
                            status: _self.status,
                            value: data,
                        });
                    }).catch((err) => {
                        handResult(i, {
                            status: _self.status,
                            reason: err
                        });
                    });
            }
        }
    });
}

module.exports = Promise;
```
>  参考资料 **[Promise/A+](https://promisesaplus.com/)**  **[刘小夕](https://promisesaplus.com/)**  **[MDN Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)**