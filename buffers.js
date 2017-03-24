/*
  Buffers in Node.js
  =================
   
   * JS has no mechanism for reading and manipulating streams of binary data.
   * Buffers are Node.js special data type to work with binary data.
   * A Buffers length is specified in bytes.
   * By default, buffers are returned in data events by all Stream classes.
   * Buffers are very fast and light objects as compared to strings
   * A buffer act like an array of integers, but cannot be resized.

 */

//creating buffer from size=2

var buf = new Buffer(2);
buf[0] = 1;
buf[1] = 2;
console.log(buf);
console.log(buf.length);

//creating buffer from array

var arr = [1,2,3,4];
var buff = new Buffer(arr);
console.log(buff);

//creating buffer from string
var buffer = new Buffer('hello world!');
console.log(buffer);
console.log(buffer.length);

//Decode Buffers
var buffer = new Buffer('hello world!');
console.log(buffer);
console.log(buffer.toString()); //Hello World!
console.log(buffer.toString('ascii')); //Hello World!
console.log(buffer.toString('binary')); //Hello World!
console.log(buffer.toString('hex')); //48656c6c6f20576f726c6421
console.log(buffer.toString('base64')); //SGVsbG8gV29ybGQh




