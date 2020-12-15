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
     parseFolder();
     
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

  function printActivities(value, name){
    if(name != "") console.log("name = "+ name);
    if(value != "") console.log("value = " + value);
  }

  function parseFolder(){
    processos = [];
    fs.readdir(dirname, function(err, filenames) {
      if (err) {
        onError(err);
        return;
      }
      filenames.forEach(function(filename) {
        fs.readFile(dirname + filename, 'utf-8', function(err, content) {
          if (err) {
            console.log(err);
            return;
          }
          console.log('--> Lendo o arquivo ' + filename);
          readXml = content;
          processName = path.basename(filename, '.xpdl');
          console.log('- Nome do processo: ' + processName);

          const dom = new JSDOM(readXml);

          activities = dom.window.document.getElementsByTagName("Activity");

          console.log(processos.length + 1)

          var novoModelo=
          {
            header: {
              process_id: String(processos.length + 1),
              name: path.basename(filename, '.xpdl'),
              description: "Diagrama 1",
              author: "Luciane Meconi",
            },
            steps:[]
          }

          var step = {
            id: "",
            name: "",
            boa: false
          };

          for( let i = 0; i < activities.length; i++){
            console.log( activities[i].getAttribute("Name"));

            var nameP = activities[i].getAttribute("Name");
            var idP = activities[i].getAttribute("Id")

            if( nameP != ""){
              novoModelo.steps.push({
                id: idP,
                name: nameP,
                boa: false
              });
            }
          }
          console.log("terminou leitura");
          processos.push(novoModelo);

          if(filenames[filenames.length-1] == filename){
            console.log("Terminoy leitura");
            terminouLeitura = true;
            printProcessos();
          }

        });
      });

    });

  }

  async function printProcessos(){
    console.log("batata");
    console.log("tamanho: " + processos.length);

    for(let i=0; i<processos.length;i++){
      console.log(i);
      console.log(processos[i].header.name);
    }
  }

   parseFolder();
   
   if(terminouLeitura){
    printProcessos();
   }

   app.get('/processos', function(req, res) {
    res.send(processos);
  });

   

           
  //        console.log(readXml);

  // var parser = new DOMParser();
  // var doc = parser.parseFromString(readXml, "application/xml");
  // console.log(doc);
  // console.log(typeof readXml);
  // console.log(typeof doc);

  // var nodes = doc.getElementsByTagName("Activity");
  // console.log(nodes[0]);
  // console.log(nodes[0].getAttribute("Id"));

  // console.log(processos.length + 1)
  //     var novoModelo=
  //     {
  //   header: {
  //       process_id: String(process.length + 1),
  //       name: fileName,
  //       description: "Diagrama 1",
  //       author: "Luciane Meconi",
  //   },
  //   steps:[]
  // }

  // var step = {
  //       id: "",
  //       name: "",
  //       boa: false
  //   };

  //   for( let i = 0; i < nodes.length; i++){
  //     var n = nodes[i];

  //     if(n.getAttribute("Name") != ""){
  //       step.id = n.getAttribute("Id");
  //       step.name = n.getAttribute("Name");

  //       console.log(i);
  //       console.log(step.id);
  //       console.log(step.name);

  //       novoModelo.steps.push({
  //           id: n.getAttribute("Id"),
  //           name: n.getAttribute("Name"),
  //           boa: false
  //       }
  //       );

  //       console.log(novoModelo.steps[i]);
  //       console.log(novoModelo);
  //       console.log("================");
  //     }

  //   }

  //   console.log("Finalizou parse");

  //   console.log(novoModelo);
  //   console.log(process[0]);

  //   process.push(novoModelo);

  //   console.log(novoModelo);

  //   alert("Publicando processos");
  //     //    }
 


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



