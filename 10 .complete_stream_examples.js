/* Complete stream example */

var events =  require('events');
var emitter = events.EventEmitter();

emitter.on('docall',function(){
    console.log('Ring Ring Ring');
});

emitter.emit('docall');


/* Readable stream events in non flowing mode */

var fs = require('fs');
var stream = fs.createReadStream('./input.txt');

stream.on('readable',function(){
    console.log(chunk);
    while((chunk == stream.read()) !== null){
        console.log(chunk);
    }
});

stream.on('end',function(){
    console.log('Finished');
});

stream.on('close',function(){
    console.log('Closed!');
});

stream.on('error',function(err){
    console.log(err.stack);
});


/* Readable stream in flowing mode */

var fs = require('fs');
var stream = fs.createReadStream('./input.txt');

stream.on('data',function(){
    console.log(chunk);
    stream.pause();
    console.log('Waiting for 1 second');
    setTimeout(function(){
        stream.resume();
    },1000);    
});

stream.on('end',function(){
    console.log('Finished');
});

stream.on('close',function(){
    console.log('Closed!');
});

stream.on('error',function(err){
    console.log(err.stack);
});

/* Writeable stream example */

var fs = require('fs');
var data = 'Some data';

var ws = fs.createWriteStream('output.txt');

ws.write(data,'utf8');
ws.end();
ws.on('finish',function(){
    console.log('Finished!');
});

ws.on('error',function(err){
    console.log(err.stack);
});


/* Stream Piping */

var fs = require('fs');
var rs = fs.createReadStream('input.txt');
var ws = fs.createWriteStream('output.txt');

rs.pipe(ws);

rs.on('end',function(){
    console.log('copy has been completed!');
    ws.end();
});

rs.on('error',function(err){
    console.log(err.stack);
});

