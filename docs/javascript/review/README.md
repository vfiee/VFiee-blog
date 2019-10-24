# 基础回顾
## 数据类型

最新的 ECMAScript 标准定义了 8 种数据类型:

    7种原始类型:
        Boolean
        Null
        Undefined
        Number
        BigInt
        String
        Symbol 
    
    Object(引用类型):
        Object
        Array
        RegExp
        Date
        Math
        Function
        Set
        WeakSet
        Map
        WeakMap

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
let symbol = Symbol('symbol');
// typeof symbol = "symbol"

// 引用类型
// RegExp Date Math Function Set WeakSet Map WeakMap 都是Javascript(内置的)函数
let obj = {}; 
// typeof obj = "object"
// obj instanceof Object = true
let arr = [];
// typeof arr = "object"
// arr instanceof Array = true
let reg = /[a-zA-z0-0_]/;
// reg instanceof RegExp = true
let func = function(){};
// func instanceof Function = true
```
::: warning 注意
typeof null = "object" 是Javascript历史悠久的一个bug~
:::
::: tip 总结:
使用 **typeof** 检查除null以外的原始类型,使用 **instanceof** 检查引用类型.
:::