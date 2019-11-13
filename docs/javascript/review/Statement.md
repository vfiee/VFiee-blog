# 语句和声明


### 变量声明
::: tip 提示
变量声明，无论发生在何处，都在执行任何代码之前进行处理。  
非声明变量只有在执行赋值操作的时候才会被创建。  
:::

#### var 
var 语句声明一个作用域被限制在全局(例如:windows)或函数作用域的变量

1.未声明的变量总是全局变量;
2.声明的变量不可删除,未声明的变量可删除;

::: tip 变量提升
变量声明总是在代码执行前处理,在代码中任意位置声明的变量相当于在代码头部执行,意味着变量可以在声明之前使用.
:::


#### let 
let 语句声明一个作用域被限制在 块级中的变量、语句或者表达式

1.let声明的变量在执行时才初始化.
2.let声明的变量只在其声明的块或子块中可用.
3.函数或代码顶部的var声明会给全局对象新增属性, 而let不会.


```js
var x = "x";
let y = "y";
console.log(this.x);
// "x"
console.log(this.y);
// undefined

```

#### const
const 语句声明一个常量.

1.const 语句声明的变量具有块级作用域
2.const 语句声明的变量不能重新赋值和重新声明.
3.const 声明只是创建一个值的只读引用(变量标识符不能重新分配)



```js
const x = 1;
const obj = {
    y:2,
    z:3
}

x = 10;
// Uncaught TypeError: Assignment to constant variable.

let obj2 = Object.assign(obj);
console.log(obj===obj2);
obj2.y=11;
console.log(obj,obj2);
```