import http from 'http';
import fs from 'fs';

fs.readFile('./index.html', function (err, data) {
	if (err) {
		console.log("Error in retrieving index.html", err);
		throw err;
	}
	console.log(data);
	launchServer(data)
})
function launchServer(html) {
http.createServer((req,res)=>{
res.writeHead(200,{'Content-Type':'text/html'});
res.write(html);
res.end();
}).listen(1880,'127.0.0.1');
}
console.log("Server started at 127.0.0.1:1880");