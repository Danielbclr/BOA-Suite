function populateWithProcesses(){

    $.get('/processos', function(data, status){
        process = [];
        process = data[0];
        services = data[1];

        console.log(status);

        for (let i = 0; i < process.length; i++) {
            console.log(process[i].header.name)

            var elementos = KanbanTest.getBoardElements("_discover");

            KanbanTest.addElement("_discover", {
                title: process[i].header.name,
                process: "",
                id: "discover-item-"+i,
                bpdl: process[i].header.bpdl,
                process_id: process[i].header.process_id,
                index: i,
                class: "discovery-item"
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
                    "<td>"+ strings[langSelector].autor +"</td>" +
                    "<td>" + header.author + "</td>" +
                "</tr>" +
                "<tr>" +
                    "<td> "+ strings[langSelector].description +" </td>" +
                    "<td>" + header.description + "</td>" +
                "</tr>" +
                "<tr>" +
                    "<td> "+ strings[langSelector].data_publi +"</td>" +
                    "<td>" + header.date + "</td>" +
                "</tr>" +
                "<tr>" +
                    "<td> "+ strings[langSelector].versao +" </td>" +
                    "<td>" + header.version + "</td>" +
                "</tr>" +
                "<tr>" +
                    "<td>"+ strings[langSelector].qtd_atv +"</td>" +
                    "<td>" + ativ.length + "</td>" +
                "</tr>" +
                "</table>" +
                '<button type="button" class="btn" onclick="baixarBPDL(\'' + bpdl + '\')">Download BPDL</button>'+
                '<button type="button" class="btn" onclick="baixarXPDL(\'' + xpdl + '\')">Download XPDL</button>'+
                '<button type="button" class="btn cancel" onclick="closeHeaderForm()">'+ strings[langSelector].cancel +'</button>';

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
        alert(string[langSelector].no_xpdl); 
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
    	KanbanTest.removeElement("discover-item-"+i)
  	}

    //   while( KanbanTest.getBoardElements("_discover").length > 0) KanbanTest.removeElement("id");
}