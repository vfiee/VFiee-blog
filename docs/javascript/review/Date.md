# 日期 Date
new Date();
new Date(value);
new Date(dateString);
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
创建一个 JavaScript Date 实例，该实例呈现时间中的某个时刻。Date 对象则基于 Unix Time Stamp，即自1970年1月1日（UTC）起经过的毫秒数。

### UTC
```js
// Date.UTC(year,month[,date[,hrs[,min[,sec[,ms]]]]]) 
// Date.UTC() 方法接受的参数同日期构造函数接受最多参数时一样，返回从1970-1-1 00:00:00 UTC到指定日期的的毫秒数。

let timestamp = Date.UTC(2019,10,7,9);

console.log(timestamp);


```

### now
```js
// let timeInMs = Date.now();
// Date.now() 方法返回自1970年1月1日 00:00:00 UTC到当前时间的毫秒数。
let timestamp = Date.now();
console.log(timestamp);

```

### parse
```js
// Date.parse(dateString)  new Date(dateString).getTime()
// Date.parse() 方法解析一个表示某个日期的字符串，并返回从1970-1-1 00:00:00 UTC 到该日期对象（该日期对象的UTC时间）的毫秒数(日期不合法返回NaN)

let fixedTime = Date.parse('2019/11/07');
let now = Date.now();
console.log(fixedTime,now);
```


### Date  get  Set系列


### getTime  setTime
```js
// dateObj.getTime() 
// getTime 方法的返回一个数值，表示从1970年1月1日0时0分0秒（UTC，即协调世界时）距离该日期对象所代表时间的毫秒数。
let nowDate = new Date();
let nowTimestamp = nowDate.getTime();
console.log(nowTimestamp);

// dateObj.setTime(timeValue)
// setTime() 方法以一个表示从1970-1-1 00:00:00 UTC计时的毫秒数为来为 Date 对象设置时间。
let passDate = new Date(2012,11,12);
let nowDate2 = new Date();
let copyDate = nowDate2.setTime(passDate.getTime());
console.log(passDate,nowDate2,copyDate);
```

### getFullYear  setFullYear  getUTCFullYear setUTCFullYear
```js
let now = new Date();

// dateObj.getFullYear()
// getFullYear() 方法根据本地时间返回指定日期的年份。
let year = now.getFullYear();

// dateObj.setFullYear(yearValue[, monthValue[, dayValue]])
// setFullYear() 方法根据本地时间为一个日期对象设置年份。
now.setFullYear(2012,11,12);
year=now.getFullYear();
let month = now.getMonth()+1;
let day = now.getDate();
console.log(year,month,day);

```
::: tip 提示
getUTCFullYear和getFullYear语法和用法相同
setUTCFullYear和setFullYear语法和用法相同

UTC时间根据世界时间返回,而其它时间根据本地时间返回(以下UTC方法同理)
:::


### getMonth   setMonth   getUTCMonth setUTCMonth
```js
let now = new Date();
// dateObj.getMonth()
// getMonth返回一个0 到 11的整数值(类似数组的下标)。
let month = now.getMonth()+1;
console.log(`当前是${month}月份`);


// dateObj.setMonth(monthValue[, dayValue])
// setMonth() 方法根据本地时间为一个设置年份的日期对象设置月份。
now.setMonth(5,15);
month = now.getMonth()+1;
let day = now.getDate();
console.log(`当前是:${month}月${day}日`);

```

### getDate   setDate  getUTCDate   setUTCDate
```js
let now = new Date();

// dateObj.getDate()
// getDate() 根据本地时间，返回一个指定的日期对象为一个月中的哪一日（从1--31）。
let day = now.getDate();
console.log(`今天是${day}号`);


// dateObj.setDate(dayValue)
// setDate() 方法根据本地时间来指定一个日期对象的天数。
now.setDate(20);
day = now.getDate();
console.log(`现在今天是${day}号`);

```

### getDay   getUTCDay 
```js
let now = new Date();
let weekTransObj = {
  "0":"日",
  "1":"一",
  "2":"二",
  "3":"三",
  "4":"四",
  "5":"五",
  "6":"六",
}

// dateObj.getDay()
// getDay() 方法根据本地时间，返回一个具体日期中一周的第几天，0 表示星期天。
let weekDay = now.getDay();
console.log(`今天是周${weekTransObj[weekDay]}`);

```


### getHours   setHours   getUTCHours   setUTCHours
```js
let now = new Date();

// dateObj.getHours()
// getHours() 方法根据本地时间，返回一个指定的日期对象的小时。
let hours = now.getHours();
console.log(`当前是${hours}点`);

// dateObj.setHours(hoursValue[, minutesValue[, secondsValue[, msValue]]])
// setHours() 方法根据本地时间为一个日期对象设置小时数，返回从1970-01-01 00:00:00 UTC 到更新后的 日期 对象实例所表示时间的毫秒数。
now.setHours(12,0,0,0);
hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let milliseconds = now.getMilliseconds();
console.log(`设置后时间是:${hours}时${minutes}分${seconds}秒${milliseconds}毫秒`);

```

### getMinutes   setMinutes   getUTCMinutes   setUTCMinutes
```js
let now = new Date();

// dateObj.getMinutes()
// getMinutes() 方法根据本地时间，返回一个指定的日期对象的分钟数。
let minutes = now.getMinutes();
console.log(`当前时间的分钟数为${minutes}`);


// dateObj.setMinutes(minutesValue[, secondsValue[, msValue]])
// setMinutes() 方法根据本地时间为一个日期对象设置分钟数。
now.setMinutes(59,59,59);
minutes = now.getMinutes();
let seconds = now.getSeconds();
let milliseconds = now.getMilliseconds();
console.log(`修改后的时间:${minutes}分${seconds}秒${milliseconds}毫秒`);
```

### getSeconds   setSeconds   getUTCSeconds   setUTCSeconds
```js
let now = new Date();

// dateObj.getSeconds()
// getSeconds() 方法根据本地时间，返回一个指定的日期对象的秒数。
let seconds = now.getSeconds();
console.log(`当前时间的秒数为:${seconds}`);

// dateObj.setSeconds(secondsValue[, msValue])
// setSeconds() 方法根据本地时间设置一个日期对象的秒数。
now.setSeconds(50,59);
seconds = now.getSeconds();
let milliseconds = now.getMilliseconds();
console.log(`修改后的时间:${seconds}秒${milliseconds}毫秒`);
```

### getMilliseconds   setMilliseconds   getUTCMilliseconds   setUTCMilliseconds
```js
let now = new Date();

// dateObj.getMilliseconds() 
// getMilliseconds() 方法，根据本地时间，返回一个指定的日期对象的毫秒数(0-999)。
let milliseconds = now.getMilliseconds();
console.log(`当前时间的毫秒数是:${milliseconds}`);

// dateObj.setMilliseconds(millisecondsValue)
// setMilliseconds() 方法会根据本地时间设置一个日期对象的毫秒数。
now.setMilliseconds(59);
milliseconds = now.getMilliseconds();
console.log(`当前时间的毫秒数是:${milliseconds}`);

```

### Date to系列


### toDateString
```js
// dateObj.toDateString()
// toDateString() 方法以美式英语和人类易读的形式返回一个日期对象日期部分的字符串。

let now = new Date();
console.log(now.toDateString());

```

### toISOString 
```js
// dateObj.toISOString()
// toISOString() 方法返回一个 ISO（ISO 8601 Extended Format）格式的字符串： YYYY-MM-DDTHH:mm:ss.sssZ。时区总是UTC（协调世界时），加一个后缀“Z”标识

let now = new Date();
console.log(now.toISOString());

```

### toJSON
```js
// dateObj.toJSON()
// toJSON() 方法返回 Date 对象的字符串形式(内部使用toISOString方法)。

let now = new Date();
console.log(now.toJSON());

```


### toLocaleDateString
```js
// dateObj.toLocaleDateString([locales [, options]])
// toLocaleDateString() 方法返回该日期对象日期部分的字符串，该字符串格式因不同语言而不同.
let now = new Date();
console.log(now.toLocaleDateString())now;

```

### toLocaleTimeString
```js
// dateObj.toLocaleTimeString([locales [, options]])
// toLocaleTimeString() 方法返回该日期对象时间部分的字符串，该字符串格式因不同语言而不同。
let now = new Date();
console.log(now.toLocaleTimeString());

```

### toLocaleString
```js
// obj.toLocaleString();
// toLocaleString() 方法返回一个该对象的字符串表示。

let now = new Date();
console.log(now.toLocaleString());

```

### toString
```js
// dateObj.toString()
// toString() 方法返回一个字符串，表示该Date对象。
let now = new Date();
console.log(now.toString());

```
### toTimeString
```js
// dateObj.toTimeString()
// toTimeString() 方法以人类易读形式返回一个日期对象时间部分的字符串，该字符串以美式英语格式化。
let now = new Date();
console.log(now.toTimeString());
```

### toUTCString
```js
// dateObj.toUTCString()
// toUTCString() 方法把一个日期转换为一个字符串，使用UTC时区。
let now = new Date();
console.log(now.toUTCString());
```