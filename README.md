# Wrapper Error Async Function

Wrapper to show error on an async function immediately invoked. This omit the `promise.catch(fn)` expression.

Example with using setinterval.

**without @jondotsoy/wrapperErrorAsyncFunction**

```javascript
async function sayError () {
  throw new Error('Hola :D')
}

setinterval(sayError, 10000)
sayError()
// (node:8612) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): Error: hola :D
// (node:8612) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```

**with @jondotsoy/wrapperErrorAsyncFunction**

```javascript
import wrapperErrorAsyncFunction from '@jondotsoy/wrappererrorasyncfunction'

const sayError = wrapperErrorAsyncFunction(async function sayError () {
  throw new Error('Hola :D')
})

setinterval(sayError, 10000)
sayError()
// Error: hola :D
//     at wrapperErrorAsyncFunction (index.js:106:9)
//     at args (index.js:23:77)
//     at Object.<anonymous> (index.js:109:1)
//     at Module._compile (module.js:573:30)
//     at Module._compile (node_modules\pirates\lib\index.js:88:24)
//     at Module._extensions..js (module.js:584:10)
//     at Object.newLoader [as .js] (node_modules\pirates\lib\index.js:93:7)
//     at Module.load (module.js:507:32)
//     at tryModuleLoad (module.js:470:12)
//     at Function.Module._load (module.js:462:3)
//     at Function.Module.runMain (module.js:609:10)
//     at startup (bootstrap_node.js:158:16)
//     at bootstrap_node.js:578:3
```
