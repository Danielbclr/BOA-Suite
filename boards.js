boards = {
    boards: [
        {
          id: "_publish",
          title: "Publicação",
          class: "error",
          dragTo: ["_working"],
          item: [
            {
              title: "<button style=\"text-align:center; margin: 0 auto;\" class=\"btn btn-primary btn-fab btn-round\"> <i class=\"material-icons\">add</i> </button>",
              click: function(el) {
                alert("Processo: \"De venda à entrega\" adicionado!");
              }
            }
          ]
        },
        {
          id: "_discover",
          title: "Descoberta <form style=\"text-align:center; margin: 10px;\" class=\"form ml-auto\"> <div class=\"form-group\"> <input id=\"searchForm\" type=\"text\" class=\"form-control\" onkeyup=\"search()\" placeholder=\"Procurar processo...\"> </div><button type=\"submit\" class=\"btn btn-white btn-raised btn-fab btn-round\"> <i class=\"material-icons\">search</i> </button> </form>",
          class: "warning",
          item: [
            {
              title: "Matheus",
              process : "null"
            },
            {
              title: "Luciene",
              process : "null"
            }
          ]
        },
        {
          id: "_compose",
          title: "Composição",
          class: "success",
          dragTo: ["_working"],
          item: [
            {
              title: "Processo"
            },
            {
              title: "Serviço 1",
              type : "service"
            },
            {
              title: "Serviço 2",
              type : "service"
            },
            {
              title: "Serviço 3",
              type : "service"
            },
            {
              title: "Serviço 3",
              type : "service"
            },
            {
              title: "Processo"
            },
            ,
            {
              title: "Serviço 1",
              type : "service"
            },
            {
              title: "Serviço 2",
              type : "service"
            },
          ]
        }
      ]
}

boards: [
        {
          id: "_publish",
          title: "Publicação",
          class: "error",
          dragTo: ["_working"],
          item: [
            {
              title: "<button style=\"text-align:center; margin: 0 auto;\" class=\"btn btn-primary btn-fab btn-round\"> <i class=\"material-icons\">add</i> </button>",
              click: function(el) {
                alert("Processo: \"De venda à entrega\" adicionado!");
              }
            }
          ]
        },
        {
          id: "_discover",
          title: "Descoberta <form style=\"text-align:center; margin: 10px;\" class=\"form ml-auto\"> <div class=\"form-group\"> <input id=\"searchForm\" type=\"text\" class=\"form-control\" onkeyup=\"search()\" placeholder=\"Procurar processo...\"> </div><button type=\"submit\" class=\"btn btn-white btn-raised btn-fab btn-round\"> <i class=\"material-icons\">search</i> </button> </form>",
          class: "warning",
          item: [
            {
              title: "Matheus",
              process : "null"
            },
            {
              title: "Luciene",
              process : "null"
            }
          ]
        },
        {
          id: "_compose",
          title: "Composição",
          class: "success",
          dragTo: ["_working"],
          item: [
            {
              title: "Processo"
            },
            {
              title: "Serviço 1",
              type : "service"
            },
            {
              title: "Serviço 2",
              type : "service"
            },
            {
              title: "Serviço 3",
              type : "service"
            },
            {
              title: "Serviço 3",
              type : "service"
            },
            {
              title: "Processo"
            },
            ,
            {
              title: "Serviço 1",
              type : "service"
            },
            {
              title: "Serviço 2",
              type : "service"
            },
          ]
        }
      ]

boardsStr = 'boards: [\n        {\n          id: \"_publish\",\n          title: \"Publicação\",\n          class: \"error\",\n          dragTo: [\"_working\"],\n          item: [\n            {\n              title: \"<button style=\\\"text-align:center; margin: 0 auto;\\\" class=\\\"btn btn-primary btn-fab btn-round\\\"> <i class=\\\"material-icons\\\">add</i> </button>\",\n              click: function(el) {\n                alert(\"Processo: \\\"De venda à entrega\\\" adicionado!\");\n              }\n            }\n          ]\n        },\n        {\n          id: \"_discover\",\n          title: \"Descoberta <form style=\\\"text-align:center; margin: 10px;\\\" class=\\\"form ml-auto\\\"> <div class=\\\"form-group\\\"> <input id=\\\"searchForm\\\" type=\\\"text\\\" class=\\\"form-control\\\" onkeyup=\\\"search()\\\" placeholder=\\\"Procurar processo...\\\"> </div><button type=\\\"submit\\\" class=\\\"btn btn-white btn-raised btn-fab btn-round\\\"> <i class=\\\"material-icons\\\">search</i> </button> </form>\",\n          class: \"warning\",\n          item: [\n            {\n              title: \"Matheus\",\n              process : \"null\"\n            },\n            {\n              title: \"Luciene\",\n              process : \"null\"\n            }\n          ]\n        },\n        {\n          id: \"_compose\",\n          title: \"Composição\",\n          class: \"success\",\n          dragTo: [\"_working\"],\n          item: [\n            {\n              title: \"Processo\"\n            },\n            {\n              title: \"Serviço 1\",\n              type : \"service\"\n            },\n            {\n              title: \"Serviço 2\",\n              type : \"service\"\n            },\n            {\n              title: \"Serviço 3\",\n              type : \"service\"\n            },\n            {\n              title: \"Serviço 3\",\n              type : \"service\"\n            },\n            {\n              title: \"Processo\"\n            },\n            ,\n            {\n              title: \"Serviço 1\",\n              type : \"service\"\n            },\n            {\n              title: \"Serviço 2\",\n              type : \"service\"\n            },\n          ]\n        }\n      ]';
function boardsFun(){
    return boards;
}