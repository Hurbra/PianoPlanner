

//Blokk 1 --- venstre
function newCardFunction1() {
	
	//alert("I funksjon");
	//
	let newCard1 = document.createElement("div");
	//let node = document.createTextNode("This is new.");
	
	//newCard1.appendChild(node);
	
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
	console.log("Blokk 1, kort nr: " + newCardId);
	console.log(newCard1);
	
	//Kort nr 3
	if(newCardId === 3) {
		document.getElementById("cardV3-H1").style.backgroundColor = "mintcream";
		document.getElementById("cardV3-H1").style.height = "100px";
		document.getElementById("cardV3-H1").style.width = "250px";
		document.getElementById("cardV3-H1").style.top = "215px";
		document.getElementById("cardV3-H1").style.left = "5px";
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock1").style.height = "360px";
		document.getElementById("addNewCard1").style.top = "320px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard1');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard1);
	}
	//Kort nr 4
	else if(newCardId === 4) {
		document.getElementById("cardV4-H1").style.backgroundColor = "mintcream";
		document.getElementById("cardV4-H1").style.height = "100px";
		document.getElementById("cardV4-H1").style.width = "250px";
		document.getElementById("cardV4-H1").style.top = "320px";
		document.getElementById("cardV4-H1").style.left = "5px";
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock1").style.height = "465px";
		document.getElementById("addNewCard1").style.top = "425px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard1');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard1);
	}
	//Kort nr 5
	else if(newCardId === 5) {
		document.getElementById("cardV5-H1").style.backgroundColor = "mintcream";
		document.getElementById("cardV5-H1").style.height = "100px";
		document.getElementById("cardV5-H1").style.width = "250px";
		document.getElementById("cardV5-H1").style.top = "425px";
		document.getElementById("cardV5-H1").style.left = "5px";
		
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock1").style.height = "570px";
		document.getElementById("addNewCard1").style.top = "530px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard1');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard1);
	}
	
	//Kort nr 6
	else if(newCardId === 6) {
		document.getElementById("cardV6-H1").style.backgroundColor = "mintcream";
		document.getElementById("cardV6-H1").style.height = "100px";
		document.getElementById("cardV6-H1").style.width = "250px";
		document.getElementById("cardV6-H1").style.top = "530px";
		document.getElementById("cardV6-H1").style.left = "5px";
		
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock1").style.height = "675px";
		document.getElementById("addNewCard1").style.top = "635px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard1');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard1);
	}
	
	//Kort nr 7
	else if(newCardId === 7) {
		document.getElementById("cardV7-H1").style.backgroundColor = "mintcream";
		document.getElementById("cardV7-H1").style.height = "100px";
		document.getElementById("cardV7-H1").style.width = "250px";
		document.getElementById("cardV7-H1").style.top = "635px";
		document.getElementById("cardV7-H1").style.left = "5px";
		
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock1").style.height = "780px";
		document.getElementById("addNewCard1").style.top = "740px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard1');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard1);
	}
	
	//Kort nr 8
	else if(newCardId === 8) {
		document.getElementById("cardV8-H1").style.backgroundColor = "mintcream";
		document.getElementById("cardV8-H1").style.height = "100px";
		document.getElementById("cardV8-H1").style.width = "250px";
		document.getElementById("cardV8-H1").style.top = "740px";
		document.getElementById("cardV8-H1").style.left = "5px";
		
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock1").style.height = "885px";
		document.getElementById("addNewCard1").style.top = "845px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard1');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard1);
	}
	
	//Kort nr 9
	else if(newCardId === 9) {
		document.getElementById("cardV9-H1").style.backgroundColor = "mintcream";
		document.getElementById("cardV9-H1").style.height = "100px";
		document.getElementById("cardV9-H1").style.width = "250px";
		document.getElementById("cardV9-H1").style.top = "845px";
		document.getElementById("cardV9-H1").style.left = "5px";
		
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock1").style.height = "990px";
		document.getElementById("addNewCard1").style.top = "950px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard1');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard1);
	}
	
	//Kort nr 10
	else if(newCardId === 10) {
		document.getElementById("cardV10-H1").style.backgroundColor = "mintcream";
		document.getElementById("cardV10-H1").style.height = "100px";
		document.getElementById("cardV10-H1").style.width = "250px";
		document.getElementById("cardV10-H1").style.top = "950px";
		document.getElementById("cardV10-H1").style.left = "5px";
		
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock1").style.height = "1095px";
		document.getElementById("addNewCard1").style.top = "1055px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard1');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard1);
	}
	
	else {
		alert("You can only have a total of 10 cards");
		return;
	}
	
	
}

//----------------------------------------------------------------



//Blokk 2 ---

function newCardFunction2() {
	
	//alert("I funksjon");
	//
	let newCard2 = document.createElement("div");
	//let node = document.createTextNode("This is new.");
	
	//newCard1.appendChild(node);
	
	let cardBlock2 = document.getElementById("cardBlock2");
	cardBlock2.appendChild(newCard2);
	
	newCard2.className = "card";
	
	//For-loop som sjekker lengden på cardBlock1
	//og setter en ny ID som er 1 mer enn den siste
	//diven i arrayet (innholdet i cardBlock1)
	let iNr;
	for (let i = 0; i < cardBlock2.children.length; i++) {
		iNr = i;
	}
	let nrOfDivs = iNr - 1;
	let newCardId = nrOfDivs + 1;
	let newCardId2 = "cardV" + newCardId + "-H2";
	
	newCard2.id = newCardId2;
	console.log("Blokk 2, kort nr: " + newCardId);
	console.log(newCard2);
	
	//Kort nr 3
	if(newCardId === 3) {
		document.getElementById("cardV3-H2").style.backgroundColor = "mintcream";
		document.getElementById("cardV3-H2").style.height = "100px";
		document.getElementById("cardV3-H2").style.width = "250px";
		document.getElementById("cardV3-H2").style.top = "215px";
		document.getElementById("cardV3-H2").style.left = "5px";
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock2").style.height = "360px";
		document.getElementById("addNewCard2").style.top = "320px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard2');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard2);
	}
	//Kort nr 4
	else if(newCardId === 4) {
		document.getElementById("cardV4-H2").style.backgroundColor = "mintcream";
		document.getElementById("cardV4-H2").style.height = "100px";
		document.getElementById("cardV4-H2").style.width = "250px";
		document.getElementById("cardV4-H2").style.top = "320px";
		document.getElementById("cardV4-H2").style.left = "5px";
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock2").style.height = "465px";
		document.getElementById("addNewCard2").style.top = "425px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard2');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard2);
	}
	//Kort nr 5
	else if(newCardId === 5) {
		document.getElementById("cardV5-H2").style.backgroundColor = "mintcream";
		document.getElementById("cardV5-H2").style.height = "100px";
		document.getElementById("cardV5-H2").style.width = "250px";
		document.getElementById("cardV5-H2").style.top = "425px";
		document.getElementById("cardV5-H2").style.left = "5px";
		
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock2").style.height = "570px";
		document.getElementById("addNewCard2").style.top = "530px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard2');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard2);
	}
	
	//Kort nr 6
	else if(newCardId === 6) {
		document.getElementById("cardV6-H2").style.backgroundColor = "mintcream";
		document.getElementById("cardV6-H2").style.height = "100px";
		document.getElementById("cardV6-H2").style.width = "250px";
		document.getElementById("cardV6-H2").style.top = "530px";
		document.getElementById("cardV6-H2").style.left = "5px";
		
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock2").style.height = "675px";
		document.getElementById("addNewCard2").style.top = "635px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard2');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard2);
	}
	
	//Kort nr 7
	else if(newCardId === 7) {
		document.getElementById("cardV7-H2").style.backgroundColor = "mintcream";
		document.getElementById("cardV7-H2").style.height = "100px";
		document.getElementById("cardV7-H2").style.width = "250px";
		document.getElementById("cardV7-H2").style.top = "635px";
		document.getElementById("cardV7-H2").style.left = "5px";
		
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock2").style.height = "780px";
		document.getElementById("addNewCard2").style.top = "740px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard2');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard2);
	}
	
	//Kort nr 8
	else if(newCardId === 8) {
		document.getElementById("cardV8-H2").style.backgroundColor = "mintcream";
		document.getElementById("cardV8-H2").style.height = "100px";
		document.getElementById("cardV8-H2").style.width = "250px";
		document.getElementById("cardV8-H2").style.top = "740px";
		document.getElementById("cardV8-H2").style.left = "5px";
		
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock2").style.height = "885px";
		document.getElementById("addNewCard2").style.top = "845px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard2');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard2);
	}
	
	//Kort nr 9
	else if(newCardId === 9) {
		document.getElementById("cardV9-H2").style.backgroundColor = "mintcream";
		document.getElementById("cardV9-H2").style.height = "100px";
		document.getElementById("cardV9-H2").style.width = "250px";
		document.getElementById("cardV9-H2").style.top = "845px";
		document.getElementById("cardV9-H2").style.left = "5px";
		
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock2").style.height = "990px";
		document.getElementById("addNewCard2").style.top = "950px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard2');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard2);;
	}
	
	//Kort nr 10
	else if(newCardId === 10) {
		document.getElementById("cardV10-H2").style.backgroundColor = "mintcream";
		document.getElementById("cardV10-H2").style.height = "100px";
		document.getElementById("cardV10-H2").style.width = "250px";
		document.getElementById("cardV10-H2").style.top = "950px";
		document.getElementById("cardV10-H2").style.left = "5px";
		
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock2").style.height = "1095px";
		document.getElementById("addNewCard2").style.top = "1055px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard2');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard2);
	}
	
	else {
		alert("You can only have a total of 10 cards");
		return;
	}
}

//----------------------------------------------------------------



//Blokk 3 ---

function newCardFunction3() {
	
	//alert("I funksjon");
	//
	let newCard3 = document.createElement("div");
	//let node = document.createTextNode("This is new.");
	
	//newCard1.appendChild(node);
	
	let cardBlock3 = document.getElementById("cardBlock3");
	cardBlock3.appendChild(newCard3);
	
	newCard3.className = "card";
	
	//For-loop som sjekker lengden på cardBlock1
	//og setter en ny ID som er 1 mer enn den siste
	//diven i arrayet (innholdet i cardBlock1)
	let iNr;
	for (let i = 0; i < cardBlock3.children.length; i++) {
		iNr = i;
	}
	let nrOfDivs = iNr - 1;
	let newCardId = nrOfDivs + 1;
	let newCardId3 = "cardV" + newCardId + "-H3";
	
	newCard3.id = newCardId3;
	console.log("Blokk 3, kort nr: " + newCardId);
	console.log(newCard3);
	
	//Kort nr 3
	if(newCardId === 3) {
		document.getElementById("cardV3-H3").style.backgroundColor = "mintcream";
		document.getElementById("cardV3-H3").style.height = "100px";
		document.getElementById("cardV3-H3").style.width = "250px";
		document.getElementById("cardV3-H3").style.top = "215px";
		document.getElementById("cardV3-H3").style.left = "5px";
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock3").style.height = "360px";
		document.getElementById("addNewCard3").style.top = "320px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard3');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard3);
	}
	//Kort nr 4
	else if(newCardId === 4) {
		document.getElementById("cardV4-H3").style.backgroundColor = "mintcream";
		document.getElementById("cardV4-H3").style.height = "100px";
		document.getElementById("cardV4-H3").style.width = "250px";
		document.getElementById("cardV4-H3").style.top = "320px";
		document.getElementById("cardV4-H3").style.left = "5px";
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock3").style.height = "465px";
		document.getElementById("addNewCard3").style.top = "425px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard3');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard3);
	}
	//Kort nr 5
	else if(newCardId === 5) {
		document.getElementById("cardV5-H3").style.backgroundColor = "mintcream";
		document.getElementById("cardV5-H3").style.height = "100px";
		document.getElementById("cardV5-H3").style.width = "250px";
		document.getElementById("cardV5-H3").style.top = "425px";
		document.getElementById("cardV5-H3").style.left = "5px";
		
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock3").style.height = "570px";
		document.getElementById("addNewCard3").style.top = "530px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard3');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard3);
	}
	
	//Kort nr 6
	else if(newCardId === 6) {
		document.getElementById("cardV6-H3").style.backgroundColor = "mintcream";
		document.getElementById("cardV6-H3").style.height = "100px";
		document.getElementById("cardV6-H3").style.width = "250px";
		document.getElementById("cardV6-H3").style.top = "530px";
		document.getElementById("cardV6-H3").style.left = "5px";
		
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock3").style.height = "675px";
		document.getElementById("addNewCard3").style.top = "635px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard3');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard3);
	}
	
	//Kort nr 7
	else if(newCardId === 7) {
		document.getElementById("cardV7-H3").style.backgroundColor = "mintcream";
		document.getElementById("cardV7-H3").style.height = "100px";
		document.getElementById("cardV7-H3").style.width = "250px";
		document.getElementById("cardV7-H3").style.top = "635px";
		document.getElementById("cardV7-H3").style.left = "5px";
		
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock3").style.height = "780px";
		document.getElementById("addNewCard3").style.top = "740px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard3');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard3);
	}
	
	//Kort nr 8
	else if(newCardId === 8) {
		document.getElementById("cardV8-H3").style.backgroundColor = "mintcream";
		document.getElementById("cardV8-H3").style.height = "100px";
		document.getElementById("cardV8-H3").style.width = "250px";
		document.getElementById("cardV8-H3").style.top = "740px";
		document.getElementById("cardV8-H3").style.left = "5px";
		
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock3").style.height = "885px";
		document.getElementById("addNewCard3").style.top = "845px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard3');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard3);
	}
	
	//Kort nr 9
	else if(newCardId === 9) {
		document.getElementById("cardV9-H3").style.backgroundColor = "mintcream";
		document.getElementById("cardV9-H3").style.height = "100px";
		document.getElementById("cardV9-H3").style.width = "250px";
		document.getElementById("cardV9-H3").style.top = "845px";
		document.getElementById("cardV9-H3").style.left = "5px";
		
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock3").style.height = "990px";
		document.getElementById("addNewCard3").style.top = "950px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard3');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard3);;
	}
	
	//Kort nr 10
	else if(newCardId === 10) {
		document.getElementById("cardV10-H3").style.backgroundColor = "mintcream";
		document.getElementById("cardV10-H3").style.height = "100px";
		document.getElementById("cardV10-H3").style.width = "250px";
		document.getElementById("cardV10-H3").style.top = "950px";
		document.getElementById("cardV10-H3").style.left = "5px";
		
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock3").style.height = "1095px";
		document.getElementById("addNewCard3").style.top = "1055px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard3');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard3);
	}
	
	else {
		alert("You can only have a total of 10 cards");
		return;
	}
	
}

//----------------------------------------------------------------




//Blokk 4 ---

function newCardFunction4() {
	
	//alert("I funksjon");
	//
	let newCard4 = document.createElement("div");
	//let node = document.createTextNode("This is new.");
	
	//newCard1.appendChild(node);
	
	let cardBlock4 = document.getElementById("cardBlock4");
	cardBlock4.appendChild(newCard4);
	
	newCard4.className = "card";
	
	//For-loop som sjekker lengden på cardBlock1
	//og setter en ny ID som er 1 mer enn den siste
	//diven i arrayet (innholdet i cardBlock1)
	let iNr;
	for (let i = 0; i < cardBlock4.children.length; i++) {
		iNr = i;
	}
	let nrOfDivs = iNr - 1;
	let newCardId = nrOfDivs + 1;
	let newCardId4 = "cardV" + newCardId + "-H4";
	
	newCard4.id = newCardId4;
	console.log("Blokk 4, kort nr: " + newCardId);
	console.log(newCard4);
	
	//Kort nr 3
	if(newCardId === 3) {
		document.getElementById("cardV3-H4").style.backgroundColor = "mintcream";
		document.getElementById("cardV3-H4").style.height = "100px";
		document.getElementById("cardV3-H4").style.width = "250px";
		document.getElementById("cardV3-H4").style.top = "215px";
		document.getElementById("cardV3-H4").style.left = "5px";
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock4").style.height = "360px";
		document.getElementById("addNewCard4").style.top = "320px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard4');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard4);
	}
	//Kort nr 4
	else if(newCardId === 4) {
		document.getElementById("cardV4-H4").style.backgroundColor = "mintcream";
		document.getElementById("cardV4-H4").style.height = "100px";
		document.getElementById("cardV4-H4").style.width = "250px";
		document.getElementById("cardV4-H4").style.top = "320px";
		document.getElementById("cardV4-H4").style.left = "5px";
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock4").style.height = "465px";
		document.getElementById("addNewCard4").style.top = "425px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard4');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard4);
	}
	//Kort nr 5
	else if(newCardId === 5) {
		document.getElementById("cardV5-H4").style.backgroundColor = "mintcream";
		document.getElementById("cardV5-H4").style.height = "100px";
		document.getElementById("cardV5-H4").style.width = "250px";
		document.getElementById("cardV5-H4").style.top = "425px";
		document.getElementById("cardV5-H4").style.left = "5px";
		
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock4").style.height = "570px";
		document.getElementById("addNewCard4").style.top = "530px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard4');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard4);
	}
	
	//Kort nr 6
	else if(newCardId === 6) {
		document.getElementById("cardV6-H4").style.backgroundColor = "mintcream";
		document.getElementById("cardV6-H4").style.height = "100px";
		document.getElementById("cardV6-H4").style.width = "250px";
		document.getElementById("cardV6-H4").style.top = "530px";
		document.getElementById("cardV6-H4").style.left = "5px";
		
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock4").style.height = "675px";
		document.getElementById("addNewCard4").style.top = "635px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard4');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard4);
	}
	
	//Kort nr 7
	else if(newCardId === 7) {
		document.getElementById("cardV7-H4").style.backgroundColor = "mintcream";
		document.getElementById("cardV7-H4").style.height = "100px";
		document.getElementById("cardV7-H4").style.width = "250px";
		document.getElementById("cardV7-H4").style.top = "635px";
		document.getElementById("cardV7-H4").style.left = "5px";
		
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock4").style.height = "780px";
		document.getElementById("addNewCard4").style.top = "740px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard4');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard4);
	}
	
	//Kort nr 8
	else if(newCardId === 8) {
		document.getElementById("cardV8-H4").style.backgroundColor = "mintcream";
		document.getElementById("cardV8-H4").style.height = "100px";
		document.getElementById("cardV8-H4").style.width = "250px";
		document.getElementById("cardV8-H4").style.top = "740px";
		document.getElementById("cardV8-H4").style.left = "5px";
		
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock4").style.height = "885px";
		document.getElementById("addNewCard4").style.top = "845px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard4');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard4);
	}
	
	//Kort nr 9
	else if(newCardId === 9) {
		document.getElementById("cardV9-H4").style.backgroundColor = "mintcream";
		document.getElementById("cardV9-H4").style.height = "100px";
		document.getElementById("cardV9-H4").style.width = "250px";
		document.getElementById("cardV9-H4").style.top = "845px";
		document.getElementById("cardV9-H4").style.left = "5px";
		
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock4").style.height = "990px";
		document.getElementById("addNewCard4").style.top = "950px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard4');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard4);
	}
	
	//Kort nr 10
	else if(newCardId === 10) {
		document.getElementById("cardV10-H4").style.backgroundColor = "mintcream";
		document.getElementById("cardV10-H4").style.height = "100px";
		document.getElementById("cardV10-H4").style.width = "250px";
		document.getElementById("cardV10-H4").style.top = "950px";
		document.getElementById("cardV10-H4").style.left = "5px";
		
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock4").style.height = "1095px";
		document.getElementById("addNewCard4").style.top = "1055px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard4');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard4);
	}
	
	else {
		alert("You can only have a total of 10 cards");
		return;
	}
	
	
}

//----------------------------------------------------------------