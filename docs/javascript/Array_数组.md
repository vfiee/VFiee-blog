---
sidebar: "auto"
---

# 数组 Array

## from

```js
// Array.from(arrayLike[, mapFn[, thisArg]])
// Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
let obj = { num: 3 };
let arr = [1, 2, 3];
let arr2 = Array.from(arr, (x) => x * x);
let arr3 = Array.from(arr, (x) => x * this.num, obj);
```

## isArray

```js
// Array.isArray(obj)
// Array.isArray() 用于确定传递的值是否是一个 Array
Array.isArray(true);
// false
Array.isArray(2);
// false
Array.isArray("string");
// false
Array.isArray([1, 2, 3]);
// true
Array.isArray({ x: "num" });
// false
```

## of

```js
// Array.of(element0[, element1[, ...[, elementN]]])
// Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
Array.of(3);
// [3]
Array.of(1, 2, 3);
// [1,2,3]

Array(3);
// [ , , ,];
Array(1, 2, 3);
// [1,2,3]
```

## concat

```js
// let new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
// concat() 方法用于合并两个或多个数组或值(不改变原数组并返回新数组)。
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [].concat(arr1, arr2);
// [1,2,3,4,5,6];
// arr1 [1,2,3]
// arr2 [4,5,6]
```

## copyWithin

```js
// arr.copyWithin(target[, start[, end]])
// copyWithin() 方法浅复制原数组的一部分到同一数组中的另一个位置,保持原数组的长度。
let num = [1, 2, 3, 4, 5];
// 以下方法同样以num=[1,2,3,4,5]为例

num.copyWithin(-2);
// [1, 2, 3, 1, 2]

num.copyWithin(0, 3);
// [4, 5, 3, 4, 5]

num.copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]

num.copyWithin(-2, -3, -1);
// [1, 2, 3, 3, 4]
```

## key values sentries

```js
// arr.keys() arr.values()  arr.entries()
// keys() 方法返回一个包含数组中每个索引键的Array Iterator对象。
// values() 方法返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值
// entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。
let arr = ["a", "b", "c"];
for (let key of arr.keys()) {
  console.log(key);
}
// 0
// 1
// 2

for (let value of arr.values()) {
  console.log(value);
}
// a
// b
// c

for (let i of arr.entries()) {
  console.log(i);
}
// [0, "a"]
// [1, "b"]
// [2, "c"]
```

## every

```js
// arr.every(callback(element[, index][, array]),[, thisArg])
// every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试(返回Boolean)。
let arr = [1,2,3,4,5,6,7];
arr.every(x=>(x>5));
// false
arr.every(x=>(x<10>));
// true
```

## some

```js
// arr.some(callback(element[, index[, array]])[, thisArg])
// some() 方法测试数组中是不是至少有1个元素通过了被提供的函数测试(返回Boolean)。
let arr = [1, 2, 3, 4, 5, 6, 7];
arr.some((x) => x >= 7);
// true
```

## fill

```js
// arr.fill(value[, start=0[, end=arr.length]])
// fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素(不修改数组的长度)。
[1, 2, 3, 4].fill(1);
// [1,1,1,1]
[1, 2, 3, 4].fill(1, 2);
// [1,2,1,1]
[1, 2, 3, 4].fill(1, 2, 3);
// [1,2,1,4]
```

## filter

```js
// let newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
// filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
let arr = [1, true, undefined, null, {}, []];
arr.filter((item) => !!item);
// [1,true,{},[]];
```

## find

```js
// arr.find(callback(element[, index[, array]]),[, thisArg])
// find() 方法返回数组中满足提供的测试函数的第一个元素的值或undefined
let arr = [{ num: 1 }, { num: 2 }, { num: 3 }];
arr.find((item) => item.num >= 2);
// {num:2}
```

## findIndex

```js
// arr.findIndex(callback(element[, index[, array]]),[, thisArg])
// findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
let arr = [1, true, undefined, null, {}, []];
arr.findIndex((item) => item === null);
// 3
```

## flat

```js
// let newArray = arr.flat([depth])
// flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
// flat() 会移除数组中的空项
let arr = [1, 2, [3, 4, 5]];
let arr1 = ["a", "b", [["c", ["d", "e"]]]];
arr.flat();
// [1,2,3,4,5];
arr1.flat();
// ['a','b',['c',['d','e']]];
arr1.flat(2);
// ['a','b','c',['d','e']]
arr1.flat(3);
// ['a','b','c','d','e']
arr1.flat(Infinity);
// ['a','b','c','d','e']
```

## flatMap

```js
// var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
//    返回新数组的元素
// }[, thisArg])
// flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。相当于执行map方法后再执行一次flat
let arr = [1, 2, 3, 4];
arr.map((x) => [x * 2]);
// [[2], [4], [6], [8]]
arr.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]
// 只会将 flatMap 中的函数返回的数组 “压平” 一层
arr1.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]
```

## forEach

```js
// arr.forEach(callback(element[, index[, array]]),[, thisArg]);
// forEach() 方法对数组的每个元素执行一次提供的函数
// 没有办法中止或者跳出 forEach() 循环，除非抛出一个异常
let arr = ["a", "b", "c"];
arr.forEach((item) => console.log(item));
```

## includes

```js
// arr.includes(valueToFind[, fromIndex=0])
// includes() 方法用来判断一个数组是否包含一个指定的值(返回Boolean)
let arr = ["Cat", "Dog", "Bat"];
arr.includes("Cat");
// true
arr.includes("cat");
// false
```

## indexOf

```js
// arr.indexOf(searchElement[, fromIndex=0])
// indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
let arr = ["ant", "bison", "camel", "duck"];
arr.indexOf("bison");
// 1
arr.indexOf("bison", 2);
// -1
```

## lastIndexOf

```js
// lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。
let arr = ["ant", "bison", "camel", "duck"];
arr.lastIndexOf("bison");
// 1
arr.lastIndexOf("bison", 2);
// 1
```

## join

```js
// arr.join([separator=','])
// join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串
let arr = ["Cat", "Dog", "Bat"];
arr.join();
arr.join(",");
arr.join("");
arr.join("_");
```

## map

```js
// let new_array = arr.map(function callback(currentValue[, index[, array]]) {
//     Return element for new_array
// }[, thisArg])
// map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
let arr = [1, 2, 3, 4];
let result = arr.map((item) => Math.pow(item, 2));
// [1,4,9,16]
```

## pop

```js
// arr.pop()
// pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。
// 返回删除元素的下标
let arr = [1, 2, 3, 4];
arr.pop();
// 3
// arr [1,2,3]
```

## push

```js
// arr.push(element1, ..., elementN)
// push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
let arr = [1, 2, 3, 4];
arr.push(5, 6, 7, 8);
// 8
// arr [1,2,3,4,5,6,7,8];
```

## shift

```js
// arr.shift()
// shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
// 返回删除元素的下标
let arr = [1, 2, 3, 4];
arr.shift();
// 0
// arr [2,3,4]
```

## unshift

```js
// arr.unshift(element1, ..., elementN)
// unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)。
let arr = [1, 2, 3, 4];
arr.unshift(5, 6, 7, 8);
// 8
// arr [5,6,7,8,1,2,3,4];
```

## reduce

```js
// arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
// reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
let arr = [5, 6, 7, 8];
let result = arr.reduce((result, value, index) => {
  result[index] = value;
  return result;
}, {});
// {0: 5, 1: 6, 2: 7, 3: 8}
```

## reduceRight

```js
// arr.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])
// reduceRight() 方法接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。
let arr = [5, 6, 7, 8];
let result = arr.reduceRight((result, value, index) => {
  result.push(value);
  return result;
}, []);
// [8,7,6,5]
```

## reverse

```js
// arr.reverse()
// reverse() 方法将数组中元素的位置颠倒，并返回该数组.
let arr = [1, 2, 3, 4];
arr.reverse();
// [4,3,2,1]
```

## slice

```js
// arr.slice([begin[, end]])
// slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）
let arr = [1, 2, 3, 4];
arr.slice();
// [1,2,3,4]
arr.slice(0, 2);
// [1,2]
```

## sort

```js
// arr.sort([compareFunction(firstEl[,secondEl])])
// sort() 方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的
/*
如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；
如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变。
备注： ECMAScript 标准并不保证这一行为，而且也不是所有浏览器都会遵守（例如 Mozilla 在 2003 年之前的版本）
如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前。
*/
let arr = [
  { name: 'Edward', value: 0 },
  { name: 'The', value: 3 },
  { name: 'Magnetic',value:5 },
  { name: 'Sharpe', value: 1 },
  { name: 'Zeros', value: 4 }
  { name: 'And', value: 2 },
];
// 根据name排序
arr.sort((a,b)=>(a.name===b.name?0:a.name>b.name?1:-1));
// [
//   { name: 'And', value: 2 },
//   { name: 'Edward', value: 0 },
//   { name: 'Magnetic' },
//   { name: 'The', value: 3 },
//   { name: 'Sharpe', value: 1 },
//   { name: 'Zeros', value: 4 }
// ]

// 根据value排序
arr.sort((a,b)=>(a.value===b.value?0:a.value>b.value?1:-1));
// [
//   { name: 'Edward', value: 0 },
//   { name: 'Sharpe', value: 1 },
//   { name: 'And', value: 2 },
//   { name: 'The', value: 3 },
//   { name: 'Zeros', value: 4 }
//   { name: 'Magnetic',value:5 },
// ]
```

## splice

```js
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
// 语法:array.splice(startIndex[, deleteCount[, addItem1[, addItem2[, ...]]]])
let arr = ["Jan", "Feb", "March", "April", "June"];
arr.splice(2);
// ['March', 'April', 'June']
// arr ['Jan', 'Feb']

arr.splice(2, 1);
// ['March']
// arr ['Jan', 'Feb','April', 'June'];

arr.splice(2, 0, "Vyron");
// []
// arr ['Jan', 'Feb',"Vyron", 'March', 'April', 'June'];

arr.splice(3, 1, "VFiee");
// ['April']
// arr ['Jan', 'Feb', 'March', 'VFiee', 'June']

arr.splice(1, 1, "Alipay");
// ['Feb']
// arr ['Jan', 'Alipay', 'March', 'April', 'June']
```
