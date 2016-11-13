var http = require('http');

http.createServer(function(req,res){
  res.writeHead(200, { 
  'Content-Type': 'text/plain' });
  res.end('Is this working?');
}).listen(8438);

console.log('Server started on localhost:stuff; press Ctrl-C to terminate....');
