# Promise

Promise 对象用于表示一个异步操作的最终完成 (或失败), 及其结果值.

一个 Promise有三种状态:(fulfilled和rejected又被成为resolved状态)
    pending: 初始状态，既不是成功，也不是失败状态
    fulfilled: 意味着操作成功完成
    rejected: 意味着操作失败


### Promise.all
Promise.all返回一个新的promise对象，该promise对象在iterable参数对象里所有的promise对象都成功的时候才会触发成功并返回包含iterable里所有promise返回值的数组，一旦有任何一个iterable里面的promise对象失败则立即触发该promise对象的失败并返回iterable里第一个触发失败的promise对象的错误信息。

### Promise.race
当iterable参数里的任意一个子promise被成功或失败后，父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，并返回该promise对象。

### Promise.resolve
返回一个状态由给定value决定的Promise对象.
如果value是thenable(带有then方法的对象)，返回的Promise对象的最终状态由then方法执行决定.
否则(value为空，基本类型或者不带then方法的对象),返回的Promise对象状态为fulfilled，并且将该value传递给对应的then方法。

### Promise.reject
返回一个状态为失败的Promise对象，并将给定的失败信息传递给对应的处理方法


### Promise.prototype.then(onFulfilled, onRejected)
添加解决(fulfillment)和拒绝(rejection)回调到当前 promise, 返回一个新的 promise, 将以回调的返回值来resolve.

### Promise.prototype.catch(onRejected)
添加一个拒绝(rejection) 回调到当前 promise, 返回一个新的promise。当这个回调函数被调用，新 promise 将以它的返回值来resolve，否则如果当前promise 进入fulfilled状态，则以当前promise的完成结果作为新promise的完成结果.

### Promise.prototype.finally(onFinally)
添加一个事件处理回调于当前promise对象，并且在原promise对象解析完毕后，返回一个新的promise对象。回调会在当前promise运行完毕后被调用，无论当前promise的状态是完成(fulfilled)还是失败(rejected)