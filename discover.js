function populateWithProcesses(){
    for (let i = 0; i < process.length; i++) {
        console.log(process[i].header.name)
        KanbanTest.addElement("_discover", {
            title: process[i].header.name,
            process: "",
            id: "id",
            process_id: process[i].header.process_id
        });
    }
}

function clearDiscover(){

	for (let i = 0; i < KanbanTest.getBoardElements("_discover").length+8; i++) {
    	KanbanTest.removeElement("id")
  	}

}