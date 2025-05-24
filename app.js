const data = require("./xyz"); // one module in to another

const calculateSum = require("./sum");
var name = "Namaste NodeJS";

var a = 10;
var b = 20;

//console.log(a + b);
calculateSum(a, b);
console.log(data);
