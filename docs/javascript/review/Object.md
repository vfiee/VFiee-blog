# 对象 Object

```js
  构造函数,原型和实例的关系
  !!!!! 
  1.每个构造函数(constructor)都有一个原型对象(prototype),原型对象都包含一个指向构造函数的指针  
  2.每个构造函数(constructor)都有一个__proto__属性,指向构造该构造函数(构造函数的构造函数)的原型对象的内部指针
  3.构造函数实例(instance)都包含一个指向原型对象的内部指针__proto__  
  
  constructor  指向构造函数
  __proto__    指向构造函数的原型对象(只有每个构造函数实例[函数对象]拥有的属性,指向构造函数constructor的prototype属性)
  prototype    构造函数constructor的属性prototype
```
![jsobj_full](~@IMAGES/jsobj_full.jpg);

### assign
```js
// Object.assign(target, ...sources)
// Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象

// 复制对象
let obj ={x:1,y:2};
let copyObj = Object.assign({},obj);
// {x:1,y:2};

// 合并对象
let obj2 = {y:3,z:4};
let combineObj = Object.assign({},obj,obj2);
// {x: 1, y: 3, z: 4}
```

### create
```js
// Object.create(proto[, propertiesObject])
// Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
let person = {
  sayName:function(){
    console.log(`My name is ${this.name}`);
  }
};

let LiMing = Object.create(person);
let XiaoHua = {};
console.log(LiMing.__proto__)
console.log(XiaoHua.__proto__);

```
### keys values  entries
```js
// Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组
// Object.values()方法返回一个给定对象自身的所有可枚举属性值的数组
// Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组
let obj = {x:1,y:2,z:3};
let keys = Object.keys(obj);
// ["x", "y", "z"]
let values = Object.values(obj);
// [1, 2, 3]
let kvs = Object.entries(obj);
// [["x":1],["y":2],["z",3]]
```

### freeze
```js
// Object.freeze() 冻结一个对象的属性和原型.
// 一个对象是冻结的是指它不可扩展，所有属性都是不可配置的，且所有数据属性（即没有getter或setter组件的访问器的属性）都是不可写的。
let obj = {x:1};
Object.freeze(obj);
obj.x=2;// 无法设置成功

```

### isFrozen
```js
// Object.isFrozen()方法判断一个对象是否被冻结。
let obj = {};
Object.freeze(obj);
let isF = Object.isFrozen(obj);
// isF =  true
```

### is
```js
// Object.is() 方法判断两个值是否是相同的值。
// 判断成立的条件
// 两个值都是 undefined
// 两个值都是 null
// 两个值都是 true 或者都是 false
// 两个值是由相同个数的字符按照相同的顺序组成的字符串
// 两个值指向同一个对象
// 两个值都是数字并且
// 都是正零 +0
// 都是负零 -0
// 都是 NaN
// 都是除零和 NaN 外的其它同一个数字
let obj1 = {x:1,y:2};
let obj2 = {y:2,x:1};
Object.is('test','test') // true
Object.is('test','text') // false
Object.is(null,null)// true 
Object.is(null,undefined)// false
Object.is(obj1,obj2) // false
Object.is(obj1,obj1) // true

Object.is(0,-0);// false
Object.is(0,+0);// true
Object.is(-0,-0);// true
Object.is(NaN,0/0);// true
```

### Object.hasOwnProperty
```js
//  hasOwnProperty()方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性并忽略从原型链上继承的属性.
let obj = {
  z:1,
  y:null,
  x:undefined,
};
obj.hasOwnProperty('test'); // false
obj.hasOwnProperty('z'); // true
obj.hasOwnProperty('y'); // true
obj.hasOwnProperty('x'); // true
obj.hasOwnProperty('toString'); // false

```

### Object.isPrototypeOf
```js
// isPrototypeOf() 方法用于测试一个对象是否存在于另一个对象的原型链上。
function Obj1(){}
function Obj2(){}
function Obj3(){}

Obj2.prototype = Object.create(Obj1.prototype);
Obj3.prototype = Object.create(Obj2.prototype);

let newObj = new Obj3();

Obj1.prototype.isPrototypeOf(newObj);
Obj2.prototype.isPrototypeOf(newObj);
Obj3.prototype.isPrototypeOf(newObj);
Object.prototype.isPrototypeOf(newObj);

```

### Object.toString
```js
// toString() 方法返回一个表示该对象的字符串。
let obj = {};
obj.toString();// [object Object]

// toString方法可以用来检测对象类型  默认返回[object Type]
const toString = Object.prototype.toString;
toString.apply(new Date); // "[object Date]"
toString.apply(new RegExp);// "[object RegExp]"
toString.apply(new String);// "[object String]"
toString.apply(new Number);// "[object Number]"
toString.apply(Math);// "[object Math]"
toString.apply(null);// "[object Null]"
toString.apply(undefined);// "[object Undefined]"
toString.apply(new Object);// "[object Object]"

```
### Object.valueOf
不同类型对象的valueOf()方法的返回值
| 对象|返回值|
| --------- | -----|
| Array | 返回数组对象本身|
| Boolean | 布尔值|
| Date | 存储的时间是从 1970 年 1 月 1 日午夜开始计的毫秒数 UTC |
| Function | 函数本身| 
| Number | 数字值 |   
| Object| 对象本身这是默认情况 |  
| String| 字符串值|  
| 	     | Math 和 Error 对象没有 valueOf 方法|  
