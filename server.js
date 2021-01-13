var http = require('http');
var fs = require('fs');

var express = require('express');
var path = require('path');
var app = express();

var multer  = require('multer');
const { MulterError } = require('multer');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

var parseString = require('xml2js').parseString;

//var $ = require('jQuery'); 

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
      if( file.originalname.split('.').pop() == "bpdl"){
        cb(null, './repo/bpdl/');
      }
      else if(file.originalname.split('.').pop() == "xpdl" ){
        cb(null, './repo/xpdl/');
      }
     },
     filename: function (req, file, cb) {
       cb(null, file.originalname);
     }
   });

  var storageBPDL = multer.diskStorage({
    destination: function (req, file, cbBPDL) {
      cbBPDL(null, './repo/bpdl/');
    },
    filename: function (req, file, cbBPDL) {
      cbBPDL(null, file.originalname);
    }
  });
   
   var upload = multer({ storage: storage });
   var uploadBPDL = multer({ storageBPDL: storageBPDL });
   
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

     processos = [];

     if(req.file.filename.split('.').pop() == "bpdl") parseFolder();
     
 });

 app.post('/bpdl', uploadBPDL.single('file'), function(req, res){
  console.log("Salvando arquivo");
  console.log(req.file);
  console.log(typeof req.file);
  console.log(req.body);
  console.log(typeof req.body);
  //parseFolder();

});

 app.get('/ajax', function(req, res) {
     res.send('batata');
 });


 //GERENCIAR ARQUIVOS NO REPOSITORIO
 //LER TODOS OS ARQUIVOS QUANDO INICIA O SERVIDOR
  var processos = [];
  var readXml=null;
  var processName=null;

  var terminouLeitura = false;

  var dirname = './public/';
  var diretorio = './repo/bpdl/';

  function printActivities(value, name){
    if(name != "") console.log("name = "+ name);
    if(value != "") console.log("value = " + value);
  }

  function parseFolder(){
    processos = [];
    var terminouLeitura = false;
    var readXml=null;

    fs.readdir(diretorio, function(err, filenames) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Total de arquivos: "+ filenames.length);
      filenames.forEach(function(filename) {
        fs.readFile(diretorio + filename, 'utf-8', function(err, content) {
          if (err) {
            console.log(err);
            return;
          }
          console.log('--> Lendo o arquivo ' + filename);
          readXml = content;

          const dom = new JSDOM(readXml);

          processName = dom.window.document.querySelector("nome");
          console.log('- Nome do processo: ' + processName.textContent);

          activities = dom.window.document.getElementsByTagName("Atividade");

          console.log(processos.length + 1)

          var novoModelo=
          {
            header: {
              process_id: String(processos.length + 1),
              name: dom.window.document.querySelector("nome").textContent,
              description: dom.window.document.querySelector("descrição").textContent,
              author: dom.window.document.querySelector("autor").textContent,
              date: dom.window.document.querySelector("data").textContent,
              version: dom.window.document.querySelector("versão").textContent,
            },
            steps:[]
          }

          var step = {
            id: "",
            name: "",
            boa: false
          };

          for( let i = 0; i < activities.length; i++){
            console.log( activities[i].getAttribute("nome"));

            var nameP = activities[i].getAttribute("nome");
            var idP = activities[i].getAttribute("id");
            var publicP = activities[i].getAttribute("público") == "true"? true : false;

            if( nameP != ""){
              novoModelo.steps.push({
                id: idP,
                name: nameP,
                boa: publicP
              });
            }
          }
          console.log("terminou leitura");
          processos.push(novoModelo);

          if(filenames[filenames.length-1] == filename){
            console.log("Terminou leitura");
            terminouLeitura = true;
            printProcessos();
          }

        });
      });

    });

  }


  async function printProcessos(){
    console.log("tamanho: " + processos.length);

    for(let i=0; i<processos.length;i++){
      console.log(i);
      console.log(processos[i].header.name);
    }
  }

   parseFolder();
  //  printProcessos();
   
   if(terminouLeitura){
    printProcessos();
   }

   app.get('/processos', function(req, res) {
    res.send(processos);
  });
 


app.listen(8080);

console.log('Servidor rodando');

// function createFile(){
//      console.log('Criando Arquivo');
//      fs = require('fs');
//      fs.writeFile('helloworld.txt', 'Hello World!', function (err) { 
//           if (err) return console.log(err);
//           console.log('Hello World > helloworld.txt');
//      });
// }

// console.log('Criando Arquivo');
// fs = require('fs');
// fs.writeFile('helloworld1.txt', 'Hello World!23123123', function (err) { 
//      if (err) return console.log(err);
//      console.log('Hello World > helloworld.txt');
// });



