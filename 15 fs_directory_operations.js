/**
 *  fs directory operations:
 *  -------------------------
 * 
 *      fs.readdir()
 *      fs.mkdir()
 *      fs.rmdir()
 * 
 */

var fs = require('fs');

//reading directory attributes
var path = 'C:\Downloads';
fs.readdir(path,function(err,files){
    if(err){
        console.log(err);
    }else{
        files.forEach(function(file){
            var filepath = path + '/' + file;
            fs.stat(filepath,function(err,stats){
                console.log(filepath);
                console.log(stats);
            });
        }); 
    }
});

// make a new directory
var path = 'C:/test';
fs.mkdir(path,0666,function(err){
    if(err){
        console.log(err);
    }else{
        console.log('Created test dir');
    }
});

//remove directory at given path

var path2 = 'C:\mytest';
fs.rmdir(path,function(err){
    if(err){
        console.log(err.stack);
    }else{
        console.log('Removed test dir');
    }
});


