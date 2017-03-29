/**
 *  Stream Piping:
 * -----------------
 * 
 *   Stream Piping is the process of passing O/P of one stream as input of another stream.
 *   Node.js provided pipe() for this purpose.
 *   pipe() attaches a readable stream to a writeable stream for passing of data from one stream to another.
 *   
 * 
 */

/* Example of  Piping in streams */

var fs = require('fs');

var rs = fs.createReadStream('input.txt');
var ws = fs.createWriteStream('output.txt');

rs.pipe(ws); // piping


//handling events: end and error
rs.on('end',function(){
    console.log("copy has been completed.");
    ws.end();
});

rs.on('error',function(err){
    console.log(err.stack);
});