import{createServer}from'node:http';
import worker from'./dist/server/index.js';
const port=Number(process.env.PORT||8000);
createServer(async(req,res)=>{try{const request=new Request('http://localhost:'+port+req.url,{method:req.method});const response=await worker.fetch(request);res.writeHead(response.status,Object.fromEntries(response.headers));res.end(Buffer.from(await response.arrayBuffer()))}catch{res.writeHead(500,{'content-type':'text/plain'});res.end('Request failed. Please retry.')}}).listen(port,'127.0.0.1',()=>console.log('USA Food Finder: http://localhost:'+port));
