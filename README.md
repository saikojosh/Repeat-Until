# Repeat-Until
A simple utility to repeat a function until a truthy value is encountered.

## Example Usage
This example will repeat the given function every 100ms until a truthy value is passed to the `callback` as the second paremeter.

```javascript
var repeatUntil = require('repeat-until');

repeatUntil(100, function (callback) {

  doSomethingElse(param1, param2, function (err, ready) {
    if (err) { return callback(err); }
    return callback(null, ready, 123, 'xyz', ...);
  });

}, function (err, num, str, ...) {
  // Repeat finished...
});
```

## Parameters
Example method call:
```javascript
repeatUntil(delay, taskFn, finalFn);
```

* **delay** - The number of ms to delay each function call for. The delay is applied before the first call to `taskFn`.
* **taskFn** - The task to perform. It is passed one parameter `callback(err, stop)`.
* **finalFn** - The function to call once repetition has finished or we've encountered an error.
