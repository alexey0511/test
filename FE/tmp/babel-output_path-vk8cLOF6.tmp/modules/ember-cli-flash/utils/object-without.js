export default objectWithout;

function objectWithout() {
  var originalObj = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var keysToRemove = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

  var newObj = {};

  for (var key in originalObj) {
    if (keysToRemove.indexOf(key) === -1) {
      newObj[key] = originalObj[key];
    }
  }

  return newObj;
}