var http = require('http');
var fs = require('fs');

var express = require('express');
var path = require('path');
var app = express();

//var busboy = require('connect-busboy');

var multer  = require('multer');
const { MulterError } = require('multer');

//app.use(busboy()); 
app.use(express.static(path.join(__dirname, './')));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/'));
});

app.get('/', function(req, res) {
    res.redirect('index.html');
});

// MANAGE AN UPLOADED FILE
//CONFIGURAÇÃO MULTER
var storage = multer.diskStorage({
     destination: function (req, file, cb) {
       cb(null, './public/');
     },
     filename: function (req, file, cb) {
       cb(null, file.originalname);
     }
   });
   
   var upload = multer({ storage: storage });
   
   app.use(express.static(path.join(__dirname, 'public')));
   
   app.post('/upload', upload.single('file'), function (req, res) {
     var imagePath = req.file.path.replace(/^public\//, '');
     console.log(req.file);
     console.log(typeof req.file);
     //res.redirect(imagePath);
   });

   app.use(function( err, req, res, next){
        if( err instanceof multer,MulterError) res.status(500).send(err.message);
        else next(err);

   })

app.post('/', upload.single('file'), function(req, res){
     console.log("Salvando arquivo");
     console.log(req.file);
     console.log(typeof req.file);
     console.log(req.body);
     console.log(typeof req.body);

     res.send(req.file);

     //var filePath = req.file.path.replace(/^public\//, '');
     
     // fs.writeFile('./public'+ req.file.originalname, req.file, function(err){
     //      if(err) throw err;
     //      console.log("Arquivo Salvo");
     // });
     
 });


app.listen(8080);

function createFile(){
     console.log('Criando Arquivo');
     fs = require('fs');
     fs.writeFile('helloworld.txt', 'Hello World!', function (err) { 
          if (err) return console.log(err);
          console.log('Hello World > helloworld.txt');
     });
}

console.log('Criando Arquivo');
fs = require('fs');
fs.writeFile('helloworld1.txt', 'Hello World!23123123', function (err) { 
     if (err) return console.log(err);
     console.log('Hello World > helloworld.txt');
});



/*
http.createServer(function(request, response) {
    if(request.url=='/'){
        fs.readFile('./index.html', function (err, html) {
             if (err) {
                  res.send(500,{error: err});
             }
             response.writeHeader(200, {"Content-Type": "text/html"});
             response.write(html);
             response.end();
        });
    } else if(request.url=='/process.js'){
        fs.readFile('./process.js', function (err, jsFile) {
             if (err) {
                  res.send(500,{error: err});
             }
             response.writeHeader(200, {"Content-Type": "text/javascript"});
             response.write(jsFile);
             response.end();
        });
    } else if(request.url=='/search.js'){
        fs.readFile('./search.js', function (err, jsFile) {
             if (err) {
                  res.send(500,{error: err});
             }
             response.writeHeader(200, {"Content-Type": "text/javascript"});
             response.write(jsFile);
             response.end();
        });
    } else if(request.url=='/boards.js'){
        fs.readFile('./boards.js', function (err, jsFile) {
             if (err) {
                  res.send(500,{error: err});
             }
             response.writeHeader(200, {"Content-Type": "text/javascript"});
             response.write(jsFile);
             response.end();
        });
    } else if(request.url=='/discover.js'){
        fs.readFile('./discover.js', function (err, jsFile) {
             if (err) {
                  res.send(500,{error: err});
             }
             response.writeHeader(200, {"Content-Type": "text/javascript"});
             response.write(jsFile);
             response.end();
        });
    } else if(request.url=='/compose.js'){
        fs.readFile('./compose.js', function (err, jsFile) {
             if (err) {
                  res.send(500,{error: err});
             }
             response.writeHeader(200, {"Content-Type": "text/javascript"});
             response.write(jsFile);
             response.end();
        });
    } else if(request.url=='/vendor/jkanban/jkanban.min.js'){
        fs.readFile('./vendor/jkanban/jkanban.min.js', function (err, jsFile) {
             if (err) {
                  res.send(500,{error: err});
             }
             response.writeHeader(200, {"Content-Type": "text/javascript"});
             response.write(jsFile);
             response.end();
        });
    } else if(request.url=='/services.js'){
        fs.readFile('./services.js', function (err, jsFile) {
             if (err) {
                  res.send(500,{error: err});
             }
             response.writeHeader(200, {"Content-Type": "text/javascript"});
             response.write(jsFile);
             response.end();
        });
    }
    

}).listen(8080);
*/