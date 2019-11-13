# Javascript面试指南

## 概念问题

### 😃请先做一下自我介绍~

### Javascript的数据类型都有哪些,有什么区别?
Javascript数据类型有两种:基本类型和引用类型  
基本类型:Boolean Null Undefined String Number Symbol BigInt  
引用类型:Object Array Function Date ...  

堆内存保存引用类型的值.  
栈内存保存基本类型的值和引用类型的指针.  

### 说一下你工作中常用的ES6
解构赋值  
扩展运算符  
Promise  
let const  
async await  
import export  

String [includes]  
Number [isFinite isNaN parseInt parseFloat isInteger]  
Array [from find findIndex keys values entries includes flat flatMap]  
Object [is assign keys values entries fromEntries]  
Function [  
    箭头函数  
    默认参数  
    rest参数  
]  


### 请描述一下ES6中Set,Map,WeakSet,WeakMap,Symbol?
```js
// Symbol
Symbol是一种原始数据类型.
Symbol函数生成的值都是独一无二的.
Symbol函数接受字符串作为参数,如果传的是对象,将调用其toString方法.
Symbol值不能与其他类型的值进行运算.
Symbol可以转为String和Boolean,无法转成Number.
Symbol值作为对象属性名时,不能使用点运算符.
Symbol作为属性名,该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回.
Object.getOwnPropertySymbols()可以获取目标对象所有 Symbol 属性名。Reflect.ownKeys()方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。

```


### let const var之间的区别?
一: var  
存在变量提升
可重复声明
只有函数作用域和全局作用域
绑定全局作用域(不声明变量默认为全局变量,例如a=1)

二: let  const  
不存在变量提升
不可以重复声明(相同作用域)
变量处在一个自块顶部到初始化处理的“暂存死区”中
不绑定全局作用域

三: const  
const声明必须赋值
const声明创建一个值的只读引用(并不意味着值是不可变的,只是变量编标志不能重新分配).



### 为什么var可以重复声明?
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
### 描述一下你对Promise的理解,Promise的原理是什么?
Promise 表示一个异步操作的最终结果.  
Promise 有三种状态 pending fulfilled rejected.  

::: tip 知识点
JavaScript是单线程的语言  
Event Loop是javascript的执行机制  
:::

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


### JS事件循环机制(Event Loop) 

::: tip 知识点
heap：堆  
stack：栈  
synchronous：同步任务  
asynchronous：异步任务(宏任务和微任务都是异步任务)  
monitoring process:监控进程  
execution context stack：执行栈  
task queue/callback queue：任务队列  
micro-task：微任务(原生Promise,process.nextTick, MutationObserver)  
macro-task：宏任务(包括整体代码script,setTimeout,setInterval,setImmediate。)  
:::
1.JS是单线程的,上一个事件没有执行完成就不会执行下一个事件,所以异步函数由此诞生.  
2.事件机制遇到同步函数,直接执行.遇到异步函数会区分异步函数类型并分别加入宏/微任务队列.  
3.同步函数执行完毕,开始执行微任务,微任务执行完毕,再次执行宏任务.  
4.上述过程不断重复形成事件循环.  

### CommonJS中的require/exports 和 ES6中的import/export的区别?
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

### 描述一下this的指向问题?
1，当函数在没有任何修饰的情况下调用，非严格模式下，this指向全局对象，严格模式下this指向undefined。（默认绑定）  
2，当函数由一个对象引导调用时，this指向该对象。（隐式绑定）  
3，函数通过apply,call,bind绑定时，this指向绑定的对象。（显式绑定）  
4，当函数被当做构造函数使用，用new引导调用时，this指向new创建出来的对象。（new绑定）；  
5，箭头函数其this取决于函数定义时所在的上下文。  
其优先级为：new绑定 > 显示绑定 > 隐式绑定 > 默认绑定；  


### 描述一下你对闭包的了解?
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


### == 和 === 有什么区别?
=== 严格相等,判断类型和值是否都相等.  
==  宽松相等,先执行类型转换,在进行比较.  

> **[JS比较表](https://dorey.github.io/JavaScript-Equality-Table/)**

### 什么是跨域? 跨域的解决方法有哪些?
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

### jsonp原理跨域
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

### nginx反向代理跨域
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

### postMessage跨域
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

### CORS(跨域资源共享)跨域
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

### window.name 配合 iframe
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

### 描述一下localstorage sessionStorage cookie以及他们之间的区别?




## 实现问题


### 怎么判断两个对象相等?
```js
// 基本类型只需要判断值是否相等
// 引用类型需要判断键值是否都相等
function deepEqual(l, r) {
  let isObject = value => value instanceof Object;
  let isFunction = value => value instanceof Function;
  if (!isObject(l) || !isObject(r)) {
    return Object.is(l, r);
  } else if (Object.keys(l).length !== Object.keys(r).length) {
    return false;
  } else if (isFunction(l) || isFunction(r)) {
    return l.toString() === r.toString();
  }
  let keys = Object.keys(l);
  for (let i = 0; i < keys.length; i++) {
    let lEl = l[keys[i]];
    let rEl = r[keys[i]];
    if (isObject(lEl)) {
      let result;
      if (isFunction(l) || isFunction(r)) {
        result = l.toString() === r.toString();
      } else {
        result = this.deepEqual(lEl, rEl);
      }
      if (!result) {
        return result;
      }
    } else if (!Object.is(lEl, rEl)) {
      return false;
    }
  }
  return true;
}
```

### 描述一下防抖和节流的区别及应用场景
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
  return function(args) {
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

### 函数内部 arguments 变量有哪些特性,有哪些属性,如何将它转换为数组
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




### call,apply,bind相同点和不同点?
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
function transArgumentsToArray(args=[]){
    args = Array.prototype.slice.call(args,1);
    return args.map(curr=>{
        if(typeof curr === "function"){
            return curr.toString();
        }else if(typeof curr==="undefined"){
            return "undefined";
        }
        return JSON.stringify(curr);
    });
}
function getContext(context) {
    return (context===null||context===undefined) ? window : Object(context);;
}
// call实现
Function.prototype.polyfillCall = function(context) {
    context = getContext(context);
    let args = transArgumentsToArray(arguments);
    context.__fn__ = this;
    let result;
    result = args.length ? eval("context.__fn__("+ args.join() +")") : context.__fn__();
    delete context.__fn__;
    return result;
}

Function.prototype.polyfillCallEs6 = function(context) {
    context = getContext(context);
    let args = transArgumentsToString(arguments);
    context.__fn__ = this;
    let result = args.length?context.__fn__(...args):context.__fn__();
    delete context.__fn__;
    return result;
}

obj.sayArgs.polyfillCall(obj2,[],{},2,'test',null,undefined,test);

// apply实现
Function.prototype.polyfillApply = function(context) {
    context = getContext(context);
    let args = transArgumentsToArray(arguments);
    context.__fn__ = this;
    let result = arguments[1] ? context.__fn__(args) : context.__fn__();
    delete context.__fn__;
    return result;
}

Function.prototype.polyfillApplyES6 = function(context) {
    context = getContext(context);
    context.__fn__ = this;
    let result = args ? context.__fn__([...arguments[1]]) : context.__fn__();
    delete context.__fn__;
    return result;
}


// bind实现
Function.prototype.polyfillBind = function(bThis) {
    let args = Array.prototype.slice.call(arguments,1);
    let context = this;
    let FBlank = function(){};
    let FBind = function(){
        return context.apply(
            this instanceof FBind ? this : bThis,
            args.concat(Array.prototype.slice.call(arguments))
        );
    };
    if(context.prototype) {
        FBlank.prototype = context.prototype;
    }
    FBind.prototype = new FBlank();
    return FBind;
}


```


### 浅拷贝和深拷贝的区别? 分别实现一个深浅拷贝
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
function shadowCopy(target) {
    let isObject = (array) => Object.prototype.toString.call(array)==='[object Array]';
    if(!isObject(target)) return target;
    let result = {};
    for(let key in target) {
        if(target.hasOwnProperty(key)){
            result[key] = target[key];
        }
    }
    return result;
}
``` 
深拷贝实现:  
```js
function deepCopy(value) {
    let isObject = (object)=>(object != null && (typeof object === 'object'));
    let isArray = (array) => Object.prototype.toString.call(array)==='[object Array]';
    if(!isObject(value)) return value;
    // 处理循环引用
    let set = new Set();
    let cpFunc = (target)=>{
        let result = isArray(target) ? []:{};
        for(let key in target) {
            if(target.hasOwnProperty(key)){
                let element = target[key];
                if(isObject(element)){
                    if(set.has(element)){
                        result[key] = element;
                        continue;
                    }
                    set.add(element);
                    result[key] = deepCopy(element);
                }else {
                    result[key] = element;
                }
            }
        }
        return result;
    }
    let result = cpFunc(value);
    set.clear();
    return result;
}
```

### 创建一个长度为5的空数组,生成一个(2~32)之间的随机证书rand,递归将随机整数rand插入arr,如果arr存在则重新生成并插入,输出一个长度为5且内容不重复的arr

```js
// 创建一个长度为5的空数组
let arr = new Array(5);
// 生成一个(2~32)之间的随机证书rand
let randomInt = getRandomInt(2,32);
// 递归将随机整数rand插入arr,如果arr存在则重新生成并插入,输出一个长度为5且内容不重复的arr
insertArr(getRandomInt(2,32));

function getRandomInt(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min)) + min;
}

function insertArr(num){
    arr = arr.flat();
    if(arr.includes(num)){
        insertArr(getRandomInt(2,32));
        return;
    }
    arr.push(num);
    if(arr.length===5){
        return arr;
    }
    inserrtArr(getRandomInt(2,32));
}
```