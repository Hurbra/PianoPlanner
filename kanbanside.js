

//Nytt kort i blokk 1

/*
let cardBlock1 = document.querySelector("cardBlock1");

let newCard = document.createElement("div");

let cardBlock1Id = document.getElementById("cardblock1");
*/

function buttonB1OnClick() {

    alert("I funksjon");

    /*
    let newDiv = document.createElement("div");
    newDiv.textContent = "Jeg er en ny div";

    let div = document.getElementsByClassName("cardBlock1");
    div.appendChild(newDiv);
    
    console.log(newDiv);
    
     */
    
    
    var newDiv = document.createElement("Input");
    newDiv.setAttribute("class", "cardBlock1");
    newDiv.setAttribute("id", "cardV3-H1");
    
    
    
    var div = document.createElement("div");
    //div.appendChild(newDiv);
    newDiv.insertAfter(newDiv, div.lastElementChild);
    
    console.log(newDiv);

}