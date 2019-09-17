////Synchronous Read File//

var fs = require('fs');

var readMe = fs.readFileSync('ex.txt', 'utf8');
console.log(readMe);
