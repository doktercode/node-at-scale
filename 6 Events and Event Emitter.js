/**
  Events and EventEmitter in Node.js
  ==================================

    * Node.js core API are based on asynchronous event-driven architecture
    * Node.js uses 'events' module for event handling. 
    * The events module exposes EventEmitter class to deal with events.

    * In Node, objects that generate events are called EventEmitter
    * All objects that emit events are instances of the EventEmitter class.
    * EventEmitter are based on Pub/Sub Pattern.
    * EventEmitter class provides

            Listeners   -    to listing events.
            Emitters    -   for emiiting events.
 */

var events = require('events');
var emitter = new events.EventEmitter();

//listening 'docall' event
emitter.on("docall", function () {
 console.log("ring ring ring");
});
//emitting 'docall' event
emitter.emit('docall');