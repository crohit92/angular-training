console.log("Hello");
if (exports === module.exports) {
   console.log("Both are same");
}

// export const x = 12;

// const x = 12;
// exports.x = x;

// const one = "one";
// exports.one = "one";
exports.one = function one() {
   console.log("Hello");
};

var two = "two";
exports.two = two;
const three = "three";
const four = "four";


console.log(exports.one);
console.log(two);

module.exports = {
   one: one,
   two: two,
   three: three
}
// module.exports = {
//    val: (() => {
//       return "25";
//    })()
// }

// exports.val = (() => {
//    return "24";
// })();

if (exports !== module.exports) {
   console.log("Both are different");
}

var module = { exports: {} };
var exports = module.exports;

exports = { ob: 12 };