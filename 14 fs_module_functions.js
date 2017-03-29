/*  fs module functions:
    --------------------

        fs.open(path, flags, [mode], callback) - Open file and callback will receive any exceptions as first argument and file                                                  descriptor as second argument.
        fs.close(fd, callback) - close a file descriptor. callback receives one argument as exception.
        fs.rename(oldName, newName, callback) 
        fs.unlink(path, callback) - Delete the file at given path. The callback receives one argument as an exception
        fs.truncate(path, len, callback) – Truncate the file at given path by len bytes.
        fs.chmod(path, mode, callback) - Change the mode (permissions) on a file at path.
        fs.chown(path, uid, gid, callback) - Changes the ownership of the file at path . Use this to set whether a user
                                            uid or group gid has access to a file
        fs.stat(path, callback) - Use to read the attributes of a file.
        fs.write(fd, buffer, offset, length, position, callback) - Write a file byte by byte
        fs.writeFile(path, data, [options], callback) - Write a large chunks of data
        fs.appendFile(path, data, [options], callback) - Data is appended to the end
        fs.createWriteStream(path, [options]) - Return a writable stream object for file at path.
        fs.createReadStream(path, [options]) - Return a readable stream object for file at path .  Perform stream operations on the                                         returned object of the file.

        fs.open
        fs.close
        fs.unlink
        fs.truncate
        fs.chmod
        fs.chown
        fs.stat
        fs.write
        fs.writeFile
        fs.appendFile
        fs.createWriteStream
        fs.createReadStream

*/

/* fs functions example */

var fs = require('fs');
var path = './fs.txt';

//read the attribute of a file
fs.stat(path,function(err,stats){
    console.log(stats);
});

//appended
fs.appendFile('./fs-write.txt','\n Appended data',function(err){
    if(err){ throw err;}
    console.log('File Appended');
});

//renamed
fs.rename('./fs-write.txt','./fs-write.bak',function(err){
    if(err){ throw err;}
    console.log('File renamed');
});

//moving file
fs.rename('./fs-write.txt','./content/fs-write.bak',function(err){
    if(err){ throw err;}
    console.log('File Moved!');
});

//deleted
fs.unlink('./fs-write.bak',function(err){
    if (err) throw err;
    console.log('Deleted successfully!');
});

//change permission to readonly
fs.chmod('./fs-write.txt','444',function(err){
    if(err){ throw err; }
    console.log('Change Permission');
});