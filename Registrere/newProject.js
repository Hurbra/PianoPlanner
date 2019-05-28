function addLi(){
    var textValue = document.getElementById("textBox2").value,
        listNode = document.getElementById("listUsers"),
        liNode = document.createElement("LI"),
        textNode = document.createTextNode(textValue);
    
    
        liNode.appendChild(textNode);
        listNode.appendChild(liNode);
}