---
sidebar: "auto"
---

# 基础回顾

最新的 ECMAScript 标准定义了 8 种数据类型:

    7种原始类型:
        Boolean
        Null
        Undefined
        Number
        BigInt
        String
        Symbol(符号类型)

    Object(引用类型):
        Object
        Array
        RegExp
        Date
        Math
        Function

> 在计算机科学中, 对象是指内存中的可以被标识符引用的一块区域.

## 数据类型的判断

```js
// 原始类型
let bol = true;
// typeof bol = "boolean"
let nul = null;
// typeof nul = "object"
let undefine;
// typeof undefine = "undefined"
let number = 1024;
// typeof number = "number"
let bigInt = 3141592653589793238462643383279n;
// typeof bigInt = "bigint"
let str = "string";
// typeof str = "string";
let symbol = Symbol("symbol");
// typeof symbol = "symbol"

// 引用类型
// instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
// RegExp Date Math Function Object Array
let obj = {};
// typeof obj = "object"
// obj instanceof Object = true
let arr = [];
// typeof arr = "object"
// arr instanceof Array = true
let reg = /[a-zA-z0-0_]/;
// reg instanceof RegExp = true
let func = function() {};
// func instanceof Function = true

function isInstanceOf(left, right) {
  let rightPrototype = right.prototype;
  let leftProto = left.__proto__;
  while (true) {
    if (leftProto === null) {
      return false;
    } else if (leftProto === right.prototype) {
      return true;
    }
    leftProto = leftProto.__proto__;
  }
}
```

::: warning 注意
typeof null = "object" 是 Javascript 历史悠久的一个 bug~
:::
::: tip 总结:
使用 **typeof** 检查除 null 以外的原始类型,使用 **instanceof** 检查引用类型.
或者使用 Object.prototype.toString.call(this)方法判断 [object type] 根据 type
:::

## 数据之间的转换

Javascript 中的类型转换包含三种  
1.转成数字  
2.转成布尔值  
3.转成字符串

<div align="center" >
  <img src="../../assets/images/trans.jpg">
</div>

> 图片来源 **[神三元](https://user-gold-cdn.xitu.io/2019/10/20/16de9512eaf1158a?imageslim)**
