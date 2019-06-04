/*
addNewCard1.addEventListener("click", e => {
		newCardFunction1();
	}
});

 */

let cardsArray = [];

/*
let btn = document.getElementById("addCardButton");
if (btn ) {
	btn.addEventListener("click", addBlankCard)
}
*/

let id;

function addBlankCard() {
	console.log("I funksjon");
	
	if (cardBox.children.length < 1) {
		console.log("I if");
		let newCard = document.createElement("div");
			
		newCard.className = "card";
		newCard.style.backgroundColor = "green";
		newCard.style.height = "80%";
		newCard.style.width = "90%";
		newCard.style.top = "0%";
		newCard.style.position = "absolute";
		newCard.setAttribute('draggable', true);
		newCard.style.display = "block";
		console.log("div opprettet");
		// for (let i = 1; i >= cardsArray; i++) {
		// 	id = (i - 1);
		// 	console.log("id i loop " + id);
		// }
		// console.log("id etter loop " + id);
		let uniqId = 'id' + (new Date()).getTime();
		
		newCard.id = uniqId;
		
		let cardBox = document.getElementById("cardBox");
		cardBox.appendChild(newCard);
		
		cardsArray.push(newCard);
		console.log(newCard);
		console.log("" + cardsArray);
	}
	else {
		alert("Det finnes allerede et kort i boksen. Dra det over i en av bolkene, og trykk på knappen igjen.");
	}
	
}

if(cardsArray.length > 0) {
	
	let card = document.querySelector(".card");
//let cardField = document.querySelectorAll(".cardField");
	
	card.addEventListener("dragstart", dragStart);
	card.addEventListener("dragend", dragEnd);
	
	
	function dragStart() {
		console.log("start");
		this.className += " hold";
		setTimeout(() => (this.className = " invisible"), 0);
	}
	
	function dragEnd() {
		console.log("end");
		this.className = "card";
	}
	
}

else {
	console.log("");
	console.log("Arrayet er tomt.");
}
/*


//Blokk 1 ---
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
		document.getElementById("cardV3-H1").style.backgroundColor = "blue";
		document.getElementById("cardV3-H1").style.height = "150px";
		document.getElementById("cardV3-H1").style.width = "250px";
		document.getElementById("cardV3-H1").style.top = "315px";
		document.getElementById("cardV3-H1").style.left = "5px";
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock1").style.height = "510px";
		document.getElementById("addNewCard1").style.top = "470px";
		document.getElementsById('cardV3-H1').setAttribute('draggable', true);
		
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
		document.getElementById("cardV4-H1").style.height = "150px";
		document.getElementById("cardV4-H1").style.width = "250px";
		document.getElementById("cardV4-H1").style.top = "470px";
		document.getElementById("cardV4-H1").style.left = "5px";
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock1").style.height = "665px";
		document.getElementById("addNewCard1").style.top = "625px";
		
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
		document.getElementById("cardV5-H1").style.height = "150px";
		document.getElementById("cardV5-H1").style.width = "250px";
		document.getElementById("cardV5-H1").style.top = "625px";
		document.getElementById("cardV5-H1").style.left = "5px";
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock1").style.height = "820px";
		document.getElementById("addNewCard1").style.top = "780px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard1');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard1);
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
		document.getElementById("cardV3-H2").style.height = "150px";
		document.getElementById("cardV3-H2").style.width = "250px";
		document.getElementById("cardV3-H2").style.top = "315px";
		document.getElementById("cardV3-H2").style.left = "5px";
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock2").style.height = "510px";
		document.getElementById("addNewCard2").style.top = "470px";
		
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
		document.getElementById("cardV4-H2").style.height = "150px";
		document.getElementById("cardV4-H2").style.width = "250px";
		document.getElementById("cardV4-H2").style.top = "470px";
		document.getElementById("cardV4-H2").style.left = "5px";
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock2").style.height = "665px";
		document.getElementById("addNewCard2").style.top = "625px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard2');
	
		referenceNode.before(newCard2);
	}
	//Kort nr 5
	else if(newCardId === 5) {
		document.getElementById("cardV5-H2").style.backgroundColor = "mintcream";
		document.getElementById("cardV5-H2").style.height = "150px";
		document.getElementById("cardV5-H2").style.width = "250px";
		document.getElementById("cardV5-H2").style.top = "625px";
		document.getElementById("cardV5-H2").style.left = "5px";
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock2").style.height = "820px";
		document.getElementById("addNewCard2").style.top = "780px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard2');
		
		
		referenceNode.before(newCard2);
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
		document.getElementById("cardV3-H3").style.height = "150px";
		document.getElementById("cardV3-H3").style.width = "250px";
		document.getElementById("cardV3-H3").style.top = "315px";
		document.getElementById("cardV3-H3").style.left = "5px";
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock3").style.height = "510px";
		document.getElementById("addNewCard3").style.top = "470px";
		
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
		document.getElementById("cardV4-H3").style.height = "150px";
		document.getElementById("cardV4-H3").style.width = "250px";
		document.getElementById("cardV4-H3").style.top = "470px";
		document.getElementById("cardV4-H3").style.left = "5px";
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock3").style.height = "665px";
		document.getElementById("addNewCard3").style.top = "625px";
		
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
		document.getElementById("cardV5-H3").style.height = "150px";
		document.getElementById("cardV5-H3").style.width = "250px";
		document.getElementById("cardV5-H3").style.top = "625px";
		document.getElementById("cardV5-H3").style.left = "5px";
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock3").style.height = "820px";
		document.getElementById("addNewCard3").style.top = "780px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard3');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard3);
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
		document.getElementById("cardV3-H4").style.height = "150px";
		document.getElementById("cardV3-H4").style.width = "250px";
		document.getElementById("cardV3-H4").style.top = "315px";
		document.getElementById("cardV3-H4").style.left = "5px";
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock4").style.height = "510px";
		document.getElementById("addNewCard4").style.top = "470px";
		
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
		document.getElementById("cardV4-H4").style.height = "150px";
		document.getElementById("cardV4-H4").style.width = "250px";
		document.getElementById("cardV4-H4").style.top = "470px";
		document.getElementById("cardV4-H4").style.left = "5px";
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock4").style.height = "665px";
		document.getElementById("addNewCard4").style.top = "625px";
		
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
		document.getElementById("cardV5-H4").style.height = "150px";
		document.getElementById("cardV5-H4").style.width = "250px";
		document.getElementById("cardV5-H4").style.top = "625px";
		document.getElementById("cardV5-H4").style.left = "5px";
		//Dytte ned "add card"-knappen, flytte
		//det nye kortet under det forrige og forlenge bolken
		document.getElementById("cardBlock4").style.height = "820px";
		document.getElementById("addNewCard4").style.top = "780px";
		
		// Get the reference node
		var referenceNode = document.querySelector('#addNewCard4');
		//var card2 = document.getElementById("cardV2-H1");
		
		//card2.insertAfter(newCard1, card2.nextSibling);
		// Insert the new node before the reference node
		referenceNode.before(newCard4);
	}
	
	
}

//----------------------------------------------------------------

 */