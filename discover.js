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
                id: "id",
                bpdl: process[i].header.bpdl,
                process_id: process[i].header.process_id
            });

            elementos[i].addEventListener('dblclick', function(e){
                console.log("DOUBLE CLICK!!");
                console.log(e);
                console.log(this);

                var bpdl = this.getAttribute('data-bpdl');

                console.log(bpdl);

                var div = document.getElementById("hidden-div");

                var link = document.createElement('a');
                link.setAttribute('href', './download/:' + bpdl);
                link.setAttribute("type", "hidden");
                div.appendChild(link);
                
                link.click();
            });
        }
    })

}

function clearDiscover(){

	for (let i = 0; i < KanbanTest.getBoardElements("_discover").length+8; i++) {
    	KanbanTest.removeElement("id")
  	}

}