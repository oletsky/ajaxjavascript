let http = require('http');
let express = require('express');

let server=express();
server.listen(8888);
console.log('Server is running on port 8888');


server.use(express.static(__dirname));


let arr=[];
let i=0;
function add(){
    if (++i>200) process.exit();
    arr.push(i);
    console.log(arr);
}

setInterval(add,5000);

server.get('/', function(req, res){
    res.sendFile(__dirname+"/ajaxjquery.html");
});

server.get('/data', function(req, res){
    console.log("Got request");
    res.send(JSON.stringify(arr));
});