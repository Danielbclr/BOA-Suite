function populateWithProcesses(){

    $.get('/processos', function(data, status){
        process = [];
        process = data[0];
        services = data[1];

        for (let i = 0; i < process.length; i++) {
            console.log(process[i].header.name)

            var elementos = KanbanTest.getBoardElements("_discover");

            KanbanTest.addElement("_discover", {
                title: process[i].header.name,
                process: "",
                id: "discover-item-"+i,
                bpdl: process[i].header.bpdl,
                process_id: process[i].header.process_id,
                index: i
            });

            elementos[i].addEventListener('dblclick', function(e){
                console.log("DOUBLE CLICK!!");
                // console.log(e);
                // console.log(this);

                var bpdl = this.getAttribute('data-bpdl');

                // console.log(bpdl);

                // var div = document.getElementById("hidden-div");

                // var link = document.createElement('a');
                // link.setAttribute('href', './download/:' + bpdl);
                // link.setAttribute("type", "hidden");
                // div.appendChild(link);
                
                // link.click();

                var headerForm = document.getElementById('form-header');
                var headerDiv = document.getElementById('div-header');
                var proc = process[this.getAttribute('data-index')];
                var header = proc.header;
                var ativ = proc.steps;
                var xpdl = header.xpdl;

                console.log(proc.header.author);

                headerForm.innerHTML =
                "<h1>" + header.name + "</h1>" +
                "<table>" +
                "<tr>" +
                    "<td> Autor </td>" +
                    "<td>" + header.author + "</td>" +
                "</tr>" +
                "<tr>" +
                    "<td> Descrição </td>" +
                    "<td>" + header.description + "</td>" +
                "</tr>" +
                "<tr>" +
                    "<td> Data de Publicação </td>" +
                    "<td>" + header.date + "</td>" +
                "</tr>" +
                "<tr>" +
                    "<td> Versão </td>" +
                    "<td>" + header.version + "</td>" +
                "</tr>" +
                "<tr>" +
                    "<td> Quantidade de Atividades </td>" +
                    "<td>" + ativ.length + "</td>" +
                "</tr>" +
                "</table>" +
                '<button type="button" class="btn" onclick="baixarBPDL(\'' + bpdl + '\')">Baixar BPDL</button>'+
                '<button type="button" class="btn" onclick="baixarXPDL(\'' + xpdl + '\')">Baixar XPDL</button>'+
                '<button type="button" class="btn cancel" onclick="closeHeaderForm()">Cancelar</button>';

                headerDiv.style.display = "block";


            });
        }
    })

}

function closeHeaderForm(){
    var headerDiv = document.getElementById('div-header');
    headerDiv.style.display = "none";
}

function baixarBPDL(bpdl){

    console.log(bpdl);

    var div = document.getElementById("hidden-div");

    var link = document.createElement('a');
    link.setAttribute('href', './download/:' + bpdl);
    link.setAttribute("type", "hidden");
    div.appendChild(link);

    link.click();               

}

function baixarXPDL(xpdl){

    console.log(xpdl);

    if( xpdl == "undefined" ){
        alert("O Processo em questão não possui um XPDL"); 
        return;
    }

    var div = document.getElementById("hidden-div");

    var link = document.createElement('a');
    link.setAttribute('href', './download/:' + xpdl);
    link.setAttribute("type", "hidden");
    div.appendChild(link);

    link.click();  
                

}

function clearDiscover(){

    var discoverLength = KanbanTest.getBoardElements("_discover").length;

	for (let i = 0; i < discoverLength; i++) {
    	KanbanTest.removeElement("discover-item"+i)
  	}

    //   while( KanbanTest.getBoardElements("_discover").length > 0) KanbanTest.removeElement("id");
}