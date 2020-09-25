function populateCompositionListWithProcess(process, services){
  // KanbanTest.addElement("_compose", {
  //   title: process.header.name,
  // });
  for (let i = 0; i < process.steps.length; i++) {
      if(process.steps[i].boa == true){
        KanbanTest.addElement("_compose", {
          id: "id",
          title: process.steps[i].name,
        });
        for (let j = 0; j < services.length; j++) {
          if(process.steps[i].name == services[j].description){
            KanbanTest.addElement("_compose", {
              id: "id",
              title: services[j].name,
              type1 : "",
              wsdl:  services[j].wsdl
            });
          }
          //console.log(process.steps[i].name);
          //console.log(services[j].description)
          
          //const element = services[j];
          
        }
      }
  }
  KanbanTest.addElement("_compose", {
    id: "id",
    title: "null",
    type1 : ""
  });
}
function populateProcessListWithProcess(process, services){
  // KanbanTest.addElement("_compose", {
  //   title: process.header.name,
  // });
  for (let i = 0; i < process.steps.length; i++) {
    KanbanTest.addElement("_full_process", {
      id: "id",
      title: process.steps[i].name,
    });
    // for (let j = 0; j < services.length; j++) {
    //   if(process.steps[i].name == services[j].description){
    //     KanbanTest.addElement("_full_process", {
    //       id: "id",
    //       title: services[j].name,
    //       type2 : ""
    //     });
    //   }
    //   //console.log(process.steps[i].name);
    //   //console.log(services[j].description)
      
    //   //const element = services[j];
      
    // }
  }
  KanbanTest.addElement("_full_process", {
    id: "id",
    title: "null",
    type2 : ""
  });
}

function decorateList(){
    var a = document.querySelectorAll('[data-type1]');
    for (let i = 0; i < a.length; i++) {
      a[i].classList.add("warning");
      a[i].classList.add("width80");
    }
    a[a.length - 1].classList.add("hidden");

    a = document.querySelectorAll('[data-type2]');
    for (let i = 0; i < a.length; i++) {
      a[i].classList.add("warning");
      a[i].classList.add("width80");
    }
    a[a.length - 1].classList.add("hidden");
}

function getProcessById(id){
  for (let j = 0; j < process.length; j++) {
    if(process[j].header.process_id == id) return process[j];  
  }
}

function clearBoard(){
  console.log("aaaaaa")
  console.log(KanbanTest.getBoardElements("_compose"));
  for (let i = 0; i < KanbanTest.getBoardElements("_compose").length + 8; i++) {
    KanbanTest.removeElement("id")
  }
  for (let i = 0; i < KanbanTest.getBoardElements("_full_process").length + 6; i++) {
    KanbanTest.removeElement("id")
  }
  
  // KanbanTest.removeBoard("_compose");
  // KanbanTest.addBoards([{
  //   id: "_compose",
  //   title: "Composição",
  //   class: "success",
  //   item: []
  // }]);
}

