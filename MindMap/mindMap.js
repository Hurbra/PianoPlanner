function addIdeaName(){
    var textValue = document.getElementById("newField1").value,
        listNode = document.getElementById("showIdeaName"),
        liNode = document.createElement("p"),
        textNode = document.createTextNode(textValue);
    
    
        liNode.appendChild(textNode);
        listNode.appendChild(liNode);
    
}

var input = document.getElementById("newField1");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("addButton1").click();
     event.currentTarget.value = "";
  }
});


function addIdea(){
    var textValue = document.getElementById("newField2").value,
        listNode = document.getElementById("showIdea"),
        liNode = document.createElement("LI"),
        textNode = document.createTextNode(textValue);
    
    
        liNode.appendChild(textNode);
        listNode.appendChild(liNode);
    
}

var input = document.getElementById("newField2");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("addButton2").click();
      event.currentTarget.value = "";
  }
});

function addIdea1(){
    var textValue = document.getElementById("newField3").value,
        listNode = document.getElementById("showIdea1"),
        liNode = document.createElement("LI"),
        textNode = document.createTextNode(textValue);
    
    
        liNode.appendChild(textNode);
        listNode.appendChild(liNode);
}

var input = document.getElementById("newField3");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("addButton3").click();
     event.currentTarget.value = "";
  }
});


function removeAll(){
    document.getElementById("showIdea").innerHTML = "";
}

function removeAll1(){
    document.getElementById("showIdea1").innerHTML = "";
}