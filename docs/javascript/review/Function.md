# 函数 Function

### apply
```js
// func.apply(thisArg, [argsArray])
// 方法调用一个具有给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数。
function getType(arg) {
  return Object.prototype.toString.call(arg).match(/^\[object\s([a-zA-Z]+)]$/)[1];
}
console.log(getType(1));
// Number

console.log(getType('1'));
// String

console.log(getType(true));
// Boolean

console.log(getType({x:1}));
// Object

console.log(getType([1]));
// Array

console.log(getType(null));
// Null

console.log(getType(undefined));
// Undefined

console.log(getType(Symbol('1')));
// Symbol

console.log(getType(function(){}));
// Function

```

### bind
```js
// function.bind(thisArg[,arg1[,arg2[, ...]]])
// bind()方法创建一个新的函数，在bind()被调用时，这个新函数的this被bind的第一个参数指定，其余的参数将作为新函数的参数供调用时使用。
function getType(arg) {
  return Object.prototype.toString.bind(arg)().match(/^\[object\s([a-zA-Z]+)]$/)[1];
}
```

### call
```js
// fun.call(thisArg, arg1, arg2, ...)
// call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。
function getType(arg) {
  return Object.prototype.toString.call(arg).match(/^\[object\s([a-zA-Z]+)]$/)[1];
}
```

::: tip 提示
  func.apply和func.call会调用函数  
  func.bind方法只会返回创建的新函数并不会调用函数  
  func.apply第一个参数是thisArg,第二个参数为数组.  
  func.bind和func.call除了第一个参数是thisArg外,其余参数均会传递到函数体  
:::

