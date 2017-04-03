/**
 * Blocking code
 */
var fs = require('fs');
var data = fs.readFileSync('text.txt','utf-8');
console.log(data);
console.log(done);


/**
 * Non-blocking code
 */

var fs = require('fs');
fs.readFile('text.txt','utf-8',function(err,data){
    console.log(data);
});
console.log('done');
