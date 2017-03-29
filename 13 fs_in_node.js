/**
 * File System in Node.js:
 * -----------------------
 * 
 *      fs module to perform file and directory I/o operations.
 *      Both synchronous and async way of performing file and directory I/o operations.
 *      synchronous version have 'sync' prefix and return data immediately. (i.e code is blocked!);
 *      In synchronous file I/O operation,  Node doesn’t execute any other code while the I/O is being performed.
 *      By Default, fs modules are asynchronous, i.e, they return the o/p of I/o operation as a parameter to a callback function.
 *      
 *      
 */

/* Functions for performing I/O operations on a file */

var fs = require('fs');
var path = "./fs.txt";

// open a file at given path in read mode('r' - read mode)
fs.open(path,'r',function(err,fd){
    fs.fstat(fd,function(err,stats){
        var totalBytes = stats.size;
        var bytesRead = 0;
        var buffer = new Buffer(totalBytes);

         // Each call to ensure that chunk size is not too small, not too large
         var chunkSize = Math.min(512,totalBytes);
         while(bytesRead < totalBytes){
             //for reading last chunk
             if((bytesRead + chunkSize) > totalBytes){
                 chunkSize = totalBytes - bytesRead;
             }
             //reading the file byte by bytes
             fs.read(fs,buffer,bytesRead,chunkSize,bytesRead,error);
             bytesRead += chunkSize;
         }

         function error(err){
            if(err){
                console.log('File reading aborted!');
                console.log(err);
                fs.close(fd,function(){
                    console.log('File Closed!');
                });
            }
         }
         fs.close(fd,function(){
            console.log('File Closed!');
         });
         console.log('File reading completed!');
         console.log('Total Bytes read' + totalBytes);
         console.log(buffer.toString());
    });
});
