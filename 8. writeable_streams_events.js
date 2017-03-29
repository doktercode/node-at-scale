/**
 *  Writeable Streams:
 * -------------------
 * 
 *  Writeable Streams support 5 events:
 *      
 *      
 *      drain
 *      pipe
 *      unpipe
 *      finish
 *      error
 *  
 *      drain - when a Writeable Stream's internal buffer has been emptied.
 *      pipe - Piping data from readable to Writeable Stream
 *      unpipe - unpipe data from readable by removing this Writeable stream.
 *      finish - called after stream.end() and all data is flushed into the underlying system.
 *      error - This is event is emitted when there is any error while receiving or writing data.
 */


/**
 * Example for Writeable Stream
 */

var fs = require('fs');
var data = 'Some data for Writeable stream';

/* Create a writeable stream */
var ws = fs.createWriteStream('output.txt');

/* Write data to stream with utf8 encoding */
ws.write(data,'utf8');

/* Mark the end of the file: no more data to read */
ws.end();

ws.on('finish',function(){
    console.log('Finished!');
});

ws.on('error',function(err){
    console.log(err.stack);
});








