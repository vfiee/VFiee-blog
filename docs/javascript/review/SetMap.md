# Set和Map数据结构


## Set和WeakSet
Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。  
WeakSet 对象允许你将弱保持对象存储在一个集合中。  

语法: new Set/WeakSet([iterable]);  
iterable  
如果传递一个可迭代对象，它的所有元素/迭代值将不重复地被添加到新的 Set/WeakSet 中。  
如果不指定此参数或其值为null，则新的 Set/WeakSet 为空。  
Set对象是值的集合，WeakSet对象是对象值的集合,且按照插入的顺序迭代它的元素。  
Set/WeakSet中的元素/对象值只会出现一次。  

区别:  
WeakSet 对象中只能存放对象引用, 不能存放值, 而 Set 对象都可以. 
WeakSet 对象中存储的对象值都是被弱引用的, 如果没有其他的变量或属性引用这个对象值, 则这个对象值会被当成垃圾回收掉. 正因为这样, WeakSet 对象是无法被枚举的, 没有办法拿到它包含的所有元素.  



### has(value)  add(value)  delete(value)  clear  
> add(value) 在Set/WeakSet对象尾部添加一个元素。返回该Set对象。  
> delete(value) 移除Set/WeakSet的中与这个值相等的元素，返回Set/WeakSet.prototype.has(value).  
> has(value) 返回一个布尔值，表示该值在Set/WeakSet中存在与否。  


```js
// set
let obj = {x:1,y:2,z:3};
let arr = [1,[2,3],{x:1,y:2,z:3}];
let set = new Set(arr);
console.log(set);
set.add(obj);
console.log(set);
set.has(obj);

set.delete(arr[0]);
console.log(set);

set.clear();
console.log(set);

// weakSet  has no clear method
let arr = [1,null,undefined,{x:1}];
let obj = {x:1,y:2,z:3};
let arr2 = [obj,arr];
let weakSet = new WeakSet(arr2);
console.log(weakSet);

weakSet.has(arr);

weakSet.delete(arr);
console.log(weakSet);

weakSet.add(arr);
console.log(weakSet);

```

### keys values  entries
> keys() values() entries() 返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值。  
```js
let set = new Set([1,2,3,4]);
console.log(set);
console.log([...set.keys()]);
console.log([...set.values()]);
console.log([...set.entries()]);
```

### forEach(callbackFn(currValue[,currKey,set,thisArg]))
> 按照插入顺序，为Set对象中的每一个值调用一次callBackFn。如果提供了thisArg参数，绑定thisArg为当前函数作用域。
```js
let arr = [1,null,undefined,new Date(),function test(){console.log(this)},{x:12}];
let set = new Set(arr);
set.forEach((item,set)=>{
    console.log(item,set);
});
```




## Map和WeakMap  
Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。  
WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。  

语法:new Map([iterable])  
Iterable 可以是一个数组或者其他 iterable 对象，其元素为键值对.  
每个键值对都会添加到新的 Map/WeakMap。null 会被当做 undefined。  
Map/WeakMap 对象在迭代时会根据对象中元素的插入顺序来进行 for...of 循环在每次迭代后会返回一个形式为[key，value]的数组。 


区别:  
WeakMap 的 key 只能是 Object 类型。而 Met 对象都可以.   
WeakMap 持有的是每个键或值对象的“弱引用”，这意味着在没有其他引用存在时垃圾回收能正确进行。 


Map与Object的区别  
1.Object的键只能是字符串或者 Symbols，但一个 Map 的键可以是任意值，包括函数、对象、基本类型。  
2.Map 中的键值是有序的，而添加到对象中的键则不是。因此，当对它进行遍历时，Map 对象是按插入的顺序返回键值。  
3.你可以通过 size 属性直接获取一个 Map 的键值对个数，而 Object 的键值对个数只能手动计算。  
4.Map 可直接进行迭代，而 Object 的迭代需要先获取它的键数组，然后再进行迭代。  
5.Object 都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。  
6.Map 在涉及频繁增删键值对的场景下会有些性能优势。  


### has(key) get(key) set(key,value) delete(key) clear
> has(key) 返回一个布尔值，表示Map实例是否包含键对应的值。  
> get(key) 返回键对应的值，如果不存在，则返回undefined。  
> set(key,value) 设置Map对象中键的值。返回该Map对象。  
> delete(key) 如果 Map 对象中存在该元素，则移除它并返回 true；否则如果该元素不存在则返回 false  
> clear() 移除Map对象的所有键/值对 。  
```js
let obj = {x:1};
let obj2 = {x:null,y:undefined,z:function(){console.log(this)}};
let map = new Map();
map.set(obj,obj2);
console.log(map);

map.has(obj);
map.has(obj2)

let m = map.get(obj);
console.log(m,m===obj2);


map.set(obj,111);
console.log(map);

map.delete(obj);
console.log(map);


// WeakMap没有clear方法
map.clear();
console.log(map);
```



### keys values entries
> keys() 返回一个新的 Iterator对象，按插入顺序包含了Map对象中每个元素的键   
> values() 返回一个新的Iterator对象，按插入顺序包含了Map对象中每个元素的值  
> entries() 返回一个新的Iterator对象，按插入顺序包含了Map对象中每个元素的 [key, value] 数组。
```js
let obj = {x:1};
let obj2 = {x:null,y:undefined,z:function(){console.log(this)}};
let map = new Map();
map.set(obj,obj2);

console.log([...map.keys()],[...map.values()],[...map.entries()]);
```

### forEach(callbackFn([value,key,Map][,thisArg]))
> forEach() 方法将会以插入顺序对 Map 对象中的每一个键值对执行一次参数中提供的回调函数。
```js
let obj = {x:1};
let obj2 = {x:null,y:undefined,z:function(){console.log(this)}};
let map = new Map();
map.set(obj,obj2);
map.forEach((value,key,map)=>{
    console.log(key,value,map);
});

```