////Synchronous Write File////


var fs = require('fs');

var readMe = fs.readFileSync('ex.txt', 'utf8');

fs.writeFileSync('ex1.txt', readMe);

console.log(readMe);
