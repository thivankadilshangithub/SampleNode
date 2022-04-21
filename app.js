// var first_Name = 'Nodejs';
// console.log(first_Name);

// function sayFunction(name){
//     return 'Hello'+" "+name;
// }
// console.log(sayFunction('Kasun'));

// var sayHello = function(name){
//     return 'Hello' + " "+name+ " "+ '!!!';
// }

// console.log(sayHello('lakmal'));

// var student ={
//     name:'Ravi',
//     email:'ravi@gmail.com'
// };
// console.log(student.email)

// var fs = require('fs');

// fs.writeFile('./hello.txt','How are you ?', function(err){
//     if(!err){
//         fs.readFile('./hello.txt',function(err,data){
//             if(!err){
//                 console.log(data.toString());
//             }
//         });
//     }
// });


var http = require('http');
var events = require('events');

var eventEmitter = new events.EventEmitter();

var server = http.createServer(function(req,res){
    eventEmitter.emit('thivanka','Test'); //Event Trigger
    res.end("Server is working !")
});

eventEmitter.on('thivanka', function(data){
    console.log('A request has been done on the server!',data);
}); //Event Listner

server.listen(3000,'localhost',function(){
    console.log('Server stands on port : 3000');
});



