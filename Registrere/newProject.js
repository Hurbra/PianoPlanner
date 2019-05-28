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


function removeAll1(){
    document.getElementById("listUsers").innerHTML = "";
}

function removeAll(){
    document.getElementById("listedPname").innerHTML = "";
}