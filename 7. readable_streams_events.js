/**
 * Readable stream support 5 events:
 * --------------------------------
 *  
 *      data
 *      readable
 *      end
 *      close
 *      error
 * 
 *  data -          Event is emitted when data is read in flowing mode. In Flowing mode, you can pause and resume streams.
 *  readable -      Data is read in non-flowing mode.
 *  end      -      No more data to read.
 *  close    -      Stream and any of its underlying resources are closed. No events will be emitted.
 *  error    -      Emitted when there is any error while receiving or writing data.
 *
 */


/* Readable stream in non-flowing mode */

var fs = require("fs");
var stream = fs.createReadStream('./input.txt');

//non-flowing mode: stream pause is not possible
stream.on('readable',function(){
    var chunk;
    while ((chunk = stream.read()) !== null) {
        console.log(chunk);
    }
}); 

stream.on('end',function(){
    console.log('finished'); //no more data to read
});

stream.on('close',function(){
    console.log('closed'); //file has been closed
}); 

stream.on('error',function(err){
    console.log(err.stack);
});


/* Readable stream in flowing mode */

var fs = require('fs');
var stream = fs.createReadStream('./input.txt');

stream.on('data',function(chunk){
    console.log(chunk);
    stream.pause();
    console.log('Waiting for 1 second ...');
    setTimeout(function(){
        stream.resume();
    },1000);
});

stream.on('end',function(){
    console.log('Finished!');
});

stream.on('close',function(){
    console.log('closed!');
});

stream.on('error',function(err){
    console.log(err.stack);
});



