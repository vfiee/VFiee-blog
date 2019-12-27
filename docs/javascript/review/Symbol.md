# Symbol 符号

语法: Symbol([description])  
使用Symbol()创建新的symbol类型，并用一个可选的字符串作为其描述。  

::: tip 注意点
1.Symbol值无法转换为Number值  
2.Symbol值不能和String值相加  
3.Symbols 在 for...in 迭代中不可枚举  
4.JSON.strIngify()完全忽略symbol  
5.通过Object.getOwnPropertySymbols和Reflect.ownKeys  

:::

## 内置的Symbol

### Symbol.iterator
一个返回一个对象默认迭代器的方法。被 for...of 使用。

### Symbol.asyncIterator 
一个返回对象默认的异步迭代器的方法。被 for await of 使用。


### Symbol.match
一个用于对字符串进行匹配的方法，也用于确定一个对象是否可以作为正则表达式使用。被 String.prototype.match() 使用。


### Symbol.replace
一个替换匹配字符串的子串的方法. 被 String.prototype.replace() 使用。

### Symbol.search
一个返回一个字符串中与正则表达式相匹配的索引的方法。被String.prototype.search() 使用。


### Symbol.split
一个在匹配正则表达式的索引处拆分一个字符串的方法.。被 String.prototype.split() 使用。


### Symbol.hasInstance
一个确定一个构造器对象识别的对象是否为它的实例的方法。被 instanceof 使用。


### Symbol.isConcatSpreadable
一个布尔值，表明一个对象是否应该flattened为它的数组元素。被 Array.prototype.concat() 使用。


### Symbol.unscopables
拥有和继承属性名的一个对象的值被排除在与环境绑定的相关对象外。


### Symbol.species
一个用于创建派生对象的构造器函数。


### Symbol.toPrimitive
一个将对象转化为基本数据类型的方法。


### Symbol.toStringTag
用于对象的默认描述的字符串值。被 Object.prototype.toString() 使用。


## Symbol属性和方法

### Symbol.prototype.constructor
返回创建实例原型的函数. 默认为 Symbol 函数。 

### Symbol.prototype.description
一个包含symbol描述的只读字符串。


### Symbol.prototype[@@toPrimitive] 
返回Symbol对象的初始值。


### Symbol.prototype.valueOf()
返回Symbol对象的初始值。


### Symbol.prototype.toString()
返回包含Symbol描述符的字符串。


### Symbol.for(key)
使用给定的key搜索现有的symbol，如果找到则返回该symbol。否则将使用给定的key在全局symbol注册表中创建一个新的symbol。
```js
let sym = Symbol.for('test');
console.log(sym);
let sym1 = Symbol.for('test');
console.log(sym);

console.log(sym===sym1);
```

### Symbol.keyFor(symbol)
如果全局注册表中查找到该symbol，则返回该symbol的key值，形式为string。如果symbol未在注册表中，返回undefined
```js
let s = Symbol('s');
console.log(Symbol.keyFor(s));

let ss = Symbol.for('s');
console.log(Symbol.keyFor(ss));
```