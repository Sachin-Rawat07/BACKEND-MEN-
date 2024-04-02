const http=require('http');
const url=require('url');
const fs=require('fs');
const path=require('path');
// const { unescape } = require('querystring');

const hostname='127.0.0.1'
const port=5000;

const mimeTypes={
    html:"text/html",
    css:"text/css",
    javascript:"text/javascript",
    png:"image/png",
    jpeg:"image/jpeg",
    jpg:"image/jpg"

};

const createServer=http.createServer((req,res)=>{
    var myuri=url.parse(req.url).pathname
    var filename=path.join(process.cwd(),decodeURIComponent(myuri))

    console.log('File you are looking for is : '+filename);
    var loadFile;

    try {
        loadFile=fs.lstatSync(filename);
    } catch (error) {
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.write('404 page not found');
        res.end();
        return;
        
    }

    if(loadFile.isFile()){
        var extension = path.extname(filename).slice(1);
        var mimeType = mimeTypes[extension] || 'application/octet-stream';
        res.writeHead(200,{'Content-Type':mimeType});
        var filestream=fs.createReadStream(filename);
        filestream.pipe(res);
    }

    else if(loadFile.isDirectory()){
        res.writeHead(302,{'Location':'index.html'});
        res.end();

    }
    else{
        res.writeHead(500,{'Content-Type':'text/plain'});
        res.write('500 Internal Error');
        res.end();
    }

});

createServer.listen(port,hostname,()=>{
    console.log(`Server is running at http://${hostname}:${port}/`);
})