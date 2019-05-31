function addLi(){
    var textValue = document.getElementById("textBox2").value,
        listNode = document.getElementById("listUsers"),
        liNode = document.createElement("LI"),
        textNode = document.createTextNode(textValue);
    
    
        liNode.appendChild(textNode);
        listNode.appendChild(liNode);
}


function addName(){
    var nameValue = document.getElementById("textBox1").value,
        nameNode = document.getElementById("listedPname"),
        liNameNode = document.createElement("LI"),
        textNameNode = document.createTextNode(nameValue);
    
        liNameNode.appendChild(textNameNode);
        nameNode.appendChild(liNameNode);
}


var input = document.getElementById("textBox1");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("addProjectName").click();
     event.currentTarget.value = "";
  }
});

var input = document.getElementById("textBox2");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("addUserButton").click();
      event.currentTarget.value = "";
  }
});


function removeAll1(){
    document.getElementById("listUsers").innerHTML = "";
}

function removeAll(){
    document.getElementById("listedPname").innerHTML = "";
}


//localStorage.setItem("tBox", document.getElementById("textBox1"));

