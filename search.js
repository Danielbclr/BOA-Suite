function search(){
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchForm');
  //filter = input.value.toUpperCase();

  var elements = document.querySelectorAll("[data-process]");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < elements.length; i++) {
    var value = input.value + "";
    var currentElement = elements[i].textContent.toUpperCase() + "";
    elements[i].style.display = "none";
    if(currentElement.toUpperCase().includes(value.toUpperCase())){
        elements[i].style.display = "block"
    }
    if(value == ""){
        for (let j = 0; j < elements.length; j++) {
            elements[j].style.display = "none";
        }
    }
  }
}
function hideAll(){
    var elements = document.querySelectorAll("[data-process]");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
      }
}