/*
 * REPEAT UNTIL.
 * A simple utility to repeat a function until a truthy value is encountered.
 */

function RepeatUntil (delay, taskFn, finalFn) {

  var runFn = function () {

    // Run the user's task.
    return taskFn(function (err, stop) {

      if (err) { return finalFn(err); }

      // Repeat if we haven't received a truthy value yet.
      if (!stop) { return setTimeout(runFn, delay); }

      // Remove the first 2 arguments (err & success).
      var args = Array.prototype.slice.call(arguments);
      args.splice(0, 2);

      // Add back the err argument (to ensure it's Null).
      args.unshift(null);

      return finalFn.apply(this, args);

    });

  };

  // Start the first iteration.
  return setTimeout(runFn, delay);

};