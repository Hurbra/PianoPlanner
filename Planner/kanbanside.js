
function newCardFunction1() {
	
	alert("I funksjon");
	//
	let newCard1 = document.createElement("div");
	let node = document.createTextNode("This is new.");
	
	newCard1.appendChild(node);
	
	let cardBlock1 = document.getElementById("cardBlock1");
	cardBlock1.appendChild(newCard1);
	
	newCard1.className = "card";
	
	//For-loop som sjekker lengden på cardBlock1
	//og setter en ny ID som er 1 mer enn den siste
	//diven i arrayet (innholdet i cardBlock1)
	let iNr;
	for (let i = 0; i < cardBlock1.children.length; i++) {
		iNr = i;
	}
	let nrOfDivs = iNr - 1;
	let newCardId = nrOfDivs + 1;
	let newCardId1 = "cardV" + newCardId + "-H1";
	
	newCard1.id = newCardId1;
	console.log(newCard1);
	
	
	document.getElementById("cardV3-H1").style.color = "mintcream";
	document.getElementById("cardV3-H1").style.height = "150px";
	document.getElementById("cardV3-H1").style.width = "250px";
	
	
	// Get the reference node
	var referenceNode = document.querySelector('#cardBlock1');

	// Insert the new node before the reference node
	referenceNode.after(newCard1);
	
	
	
	//Dytte ned "add card"-knappen, flytte
	//det nye kortet under det forrige og forlenge bolken
}




