function addComment(){
    var textValue = document.getElementById("inputText1").value,
        listNode = document.getElementById("commentSection"),
        liNode = document.createElement("li"),
        textNode = document.createTextNode(textValue);
    
    
        liNode.appendChild(textNode);
        listNode.appendChild(liNode);
}









