print("common-js main");

var cjs = require('./es6-module');
var a = require('./commonjs-module');

print("CJS> a = " + a);
print("CJS> SR = " + cjs.default(20));

print("common-js main end");