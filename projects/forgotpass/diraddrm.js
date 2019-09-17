/*var fs = require('fs');

/* Synchronous mkdir

fs.mkdirSync('sample');*/

/* Synchronous rmdir

fs.rmdirSync('sample'); */

fs.mkdir('sample1', function(){
  fs.readFile('ex.txt', 'utf8', function(err, data) {
    fs.writeFile('./sample1/write.txt', err);
   });
});
