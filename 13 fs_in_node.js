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
/* fs in read mode */

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


/* fs in write mode */

var fs = require("fs");
//Fetching an entire file at once
fs.readFile("./text.txt","utf8",function(err, data) {
 if(err) {
 console.write(err);
 }
 else{
 console.log(data);
 }
});
//open file and write to it byte by byte
fs.open("fs-write.txt", "w", function (err, fd) {
    var buffer = new Buffer('This is a File System write operation');
    var totalBytes = buffer.length;
    var bytesWrite = 0;
    //Each call to ensure that chunk size is not too small; not too large
    var chunkSize = Math.min(15, totalBytes);
    while (bytesWrite < totalBytes) {
        //for writing last chunk
        if ((bytesWrite + chunkSize) > totalBytes) {
            chunkSize = Math.min(512, (totalBytes - bytesWrite));
        }
        //writing the file byte by byte
        fs.write(fd, buffer, bytesWrite, chunkSize, bytesWrite, error);
        bytesWrite += chunkSize;
    }
    function error(err) {
        if (err) {
            console.log("File write aborted!!");
            console.log(err.stack);
            fs.close(fd);
        }
    }
    fs.close(fd);
    console.log("File write completed!!");
    console.log("Total bytes written: " + totalBytes);
});

/* Write file at once */

fs.writeFile('fs-write.txt','fs write operation','utf8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log('File has been written');
    }
});

var fs = require('fs');
var path = './input.txt';
