var http = require('http');
var fs = require('fs');

var express = require('express');
var path = require('path');
var app = express();

var multer  = require('multer');
const { MulterError } = require('multer');

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
		else if(file.originalname.split('.').pop() == "wsdl" ){
			cb(null, './repo/wsdl/');
		}
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	}
});

var upload = multer({ storage: storage });

var cors = require('cors')

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

app.use(express.static(path.join(__dirname, './')));

app.get('/processos', function(req, res) {
	
        //console.log('alface');
        enviarDados = [processos, services];

	console.log(enviarDados);
       // console.log('batata');

	res.send(enviarDados);
});

app.get('/download/:name', function(req, res){
	var fileName = req.params.name.split(':').pop();
	var extensao;

	if( fileName.split('.').pop() == "bpdl" ) extensao = "bpdl";
	else if(fileName.split('.').pop() == "xpdl") extensao = "xpdl";
	else extensao = "wsdl"

	var caminho = path.join(__dirname, '/repo/', extensao, fileName);

	//console.log(caminho);

	res.download(caminho, fileName, (err) => {
	  if (err) {
	    console.log(err);
	    res.status(500).send({
	      message: "Could not download the file. " + err,
	    });
	  }
	});
			
})

app.post('/', upload.single('file'), function(req, res){
	console.log("Salvando arquivo");
	//console.log(req.file);
	//console.log(typeof req.file);
	console.log(req.body);
	//console.log(typeof req.body);

	processos = [];

	if(req.file.filename.split('.').pop() == "bpdl") parseFolder();
});


app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/'));
});

app.get('/', function(req, res) {
    res.redirect('index.html');
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(function( err, req, res, next){
	if( err instanceof multer,MulterError) res.status(500).send(err.message);
	else next(err);
})

//GERENCIAR ARQUIVOS NO REPOSITORIO
//LER TODOS OS ARQUIVOS QUANDO INICIA O SERVIDOR
var processos = [];
var services = [];
var enviarDados = [];

var readXml=null;
var processName=null;

var terminouLeitura = false;

var dirname = './repo/wsdl/';
var diretorio = './repo/bpdl/';


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
			wsdls = dom.window.document.getElementsByTagName("Wsdl");

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
				xpdl: dom.window.document.querySelector("Xpdl").textContent,
				bpdl: filename,
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

			for( let i = 0; i < wsdls.length; i++){
			console.log( wsdls[i].getAttribute("nome"));

			if( nameP != ""){
				services.push({
					service_id: i,
					nome: wsdls[i].getAttribute("nome"),
					atividade: wsdls[i].parentNode.getAttribute("nome"),
					wsdl: wsdls[i].textContent,
					processo: novoModelo.header.name
				});
			}
			}
			console.log("terminou leitura");
			processos.push(novoModelo);

			if(filenames[filenames.length-1] == filename){
			console.log("Terminou leitura");
			terminouLeitura = true;

			enviarDados.push(processos);
			enviarDados.push(services);

			printProcessos();
			}

		});
		});

	});

}


function printProcessos(){
	console.log("tamanho: " + processos.length);

	for(let i=0; i<processos.length;i++){
		console.log(i);
		console.log(processos[i].header.name);
	}
}

parseFolder();



let port = 8080;
app.listen(port, () => {
	console.log(`Running at localhost:${port}`);
});



