/**
  Streams in Node.js:
  ==================

  * Streams are mechanism for transferring data between two endpoints
  * Node.js provides you streams to read data from the source or to write data to the destination.
  * Streams are

            * readable  - Used for read operation
            * writeable - Used for write operation
            * duplex    - Used for both read and write operations. Both operations are independent and each have
                          separate internal buffer.
                          
            * transform - A type of duplex stream where the output is computed based on input. Both operations are
                            linked via some transform.
  * Streams are instances of EventEmitter.

 */

var http = require('http');
var server = http.createServer(function(req,res){
    // here, req is a readable stream
    // here, res is a writable stream
});