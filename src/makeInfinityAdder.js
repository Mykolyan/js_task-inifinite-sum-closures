'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder(sum = 0) {
  return function (x) {
    if (x === undefined) {
      return sum;
    }

    return makeInfinityAdder(sum + x);
  };
}

module.exports = makeInfinityAdder;
