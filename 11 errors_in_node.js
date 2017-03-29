/* Handling errors in Node.js */

/* Try/catch block */

try{
    throw new Error('throw error');
}catch(e){
    console.log(e);
}


/* Callbacks */

app.get('/',function(req,res){
    db.query('sql_query',function(err,result){
        if(err){
            res.writeHead(500);
            res.end();
            console.log(err);
        }else{
            console.log(result);
        }
    });
});

/* EventEmitters */

var events = require('events');
var emitter = new events.EventEmitter();

function async(){
    process.nextTick(function(){
        emitter.emit('error',new Error('something went wrong'));
    });
    return emitter;
}

//calling async
var event = async();
event.on('error',function(error){
    console.log(error)
});

