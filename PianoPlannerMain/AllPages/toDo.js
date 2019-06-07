

dragDrop();
function dragDrop() {
	
	let cards = document.getElementsByClassName("card");
	let len;
	len = cards.length;
	
	
	
	
	//get the collection of draggable items and add their draggable attribute
	for ( i = 0; i < len; i++) {
		
		cards[i].setAttribute('draggable', 'true');
	}
	
	//variable for storing the dragging item reference
	//this will avoid the need to define any transfer data
	//which means that the elements don't need to have IDs
	let card = null;
	
	//dragstart event to initiate mouse dragging
	document.addEventListener('dragstart', function (e) {
		//set the item reference to this element
		card = e.target;
		
		//we don't need the transfer data, but we have to define something
		//otherwise the drop action won't work at all in firefox
		//most browsers support the proper mime-type syntax, eg. "text/plain"
		//but we have to use this incorrect syntax for the benefit of IE10+
		e.dataTransfer.setData('text', '');
		
	}, false);
	
	//dragover event to allow the drag by preventing its default
	//ie. the default action of an element is not to allow dragging
	document.addEventListener('dragover', function (e) {
		if (card) {
			e.preventDefault();
			
		}
		
	}, false);
	
	
	//drop event to allow the element to be dropped into valid targets
	document.addEventListener('drop', function (e) {
		//if this element is a drop zone, move the item here
		//then prevent default to allow the action (same as dragover)
		
		if(e.target.className === "dropZone") {
			
			e.target.appendChild(card);
			
			e.preventDefault();
			
			getCount1();
			getCount2();
			getCount3();
			getCount4();
			
		}
		
	}, false);
	
	//dragend event to clean-up after drop or abort
	//which fires whether or not the drop target was valid
	document.addEventListener('dragend', function () {
		card = null;
		
	}, false);
	
	
}
//-----

let cardArray = [];


let addCardButton = document.getElementById("addCardButton");

//Counter til ID. Til senere bruk
let counter = 0;

//-----
addCardButton.addEventListener("click", e => {
	counter ++;
	addCard();
});

//-----
let buttonRemove = document.getElementById("buttonRemove");

buttonRemove.addEventListener("click", e => {
	counter --;
	removeCard();
});
//-----



function addCard() {
	
	//console.log("I funksjon");
	
	let card = document.createElement("li");
	let drop = document.getElementById("drop1");
	card.setAttribute("draggable", true);
	card.className = "card";
	
	
	card.setAttribute("ondblclick", "setImportant();");
	
	
	let nodeP = document.createElement("p");
	nodeP.className = "pCard";
	let nodeID = document.createElement("p");
	nodeID.className = "pCard";
	
	//Endring
	let input = prompt("Write the title of the card: ");
	//Slutt pÂ endringer
	
    nodeP.style.fontSize = "x-large";
    nodeP.style.top = "-20% ";
    nodeID.style.fontSize = "small";
    nodeID.style.top = "5%";
	
	if (input) {
		if (input.match(/^[0-9a-zA-Z]+$/)) {
		}
		else if (input.event.keyCode === 32) {
			alert("You have to give the card a title. Try again.");
			return;
		}
		else {
			alert("You can only type in numbers and letters. Try again.");
			counter --;
			return;
		}
		dragDrop();
	}
	
	//Endring
	let textNode = document.createTextNode(input);         // Create a text node
	
	let important = prompt("Is this task important? Write 'y' for yes or 'n' for no").toLowerCase();
	if(important === "y" || important === "yes") {
		textNode.nodeValue = (input + " (!)");
	}
	else if(important === "n" || important === "no"){
		textNode.nodeValue = input;
	}
	else {
		textNode.nodeValue = input;
	}
	
	if (important) {
		if (important.match(/^[0-9a-zA-Z]+$/)) {
		}
		/*else if (input === null) {
			alert("You have to give the card a title. Try again.");
			return;
		}*/
		else {
			alert("You can only type in numbers and letters. Try again.");
			counter--;
			return;
		}
		dragDrop();
		
	}
	
	
	// Slutt pÂ endring
	
	//Endring
	let id = "card" + counter;
	//Slutt pÂ endring
	card.id = id;
	
	
	//Add to array:
	cardArray.push(card + "" + id);
	
	
	let cardNodeID = "ID: " + id;
	
	let textNodeID = document.createTextNode(cardNodeID);
	
	nodeP.appendChild(textNode);
	card.appendChild(nodeP);
	nodeID.appendChild(textNodeID);
	card.appendChild(nodeID);
	drop.appendChild(card);
	
	console.log("Nytt kort opprettet: " + cardNodeID);
	
	//console.log(cardArray);
	
	getCount1();
	getCount2();
	getCount3();
	getCount4();
	dragDrop();
	
	
}
//-----



function removeCard() {
	
	if(cardArray.length > 0) {
		
		let deleteCardID = prompt("Write the ID of the card you want to delete (e.g. --> card1): ").toLowerCase();
		if (deleteCardID) {
			if (deleteCardID.match(/^[0-9a-zA-Z]+$/)) {
			}
			/*else if (deleteCardID === null) {
				alert("You have to write an ID. Try again.");
				return;
			}*/
			else {
				alert("You can only type in numbers and letters. Try again.");
				return;
			}
		}
		
		let deleteOrNot = prompt("Do you want to delete this card?" + " Write 'y' for yes or 'n' for no").toLowerCase();
		
		let cardIDOfCard = document.getElementById(deleteCardID);
		let dropParent = cardIDOfCard.parentNode;
		
		if (deleteOrNot === "y" || deleteOrNot === "yes") {
			dropParent.removeChild(cardIDOfCard);
			
			//Delete from array
			/*let searchVar = '[object HTMLLIElement]' + deleteCardID + '';
			console.log("Search: " + searchVar);
			cardArray = cardArray.filter(e => e !== '"' + searchVar + '"');
			console.log(cardArray);*/
			
		} else if (deleteOrNot === null) {
			return;
		} else {
			return;
		}
		
		if (deleteOrNot) {
			if (deleteOrNot.match(/^[0-9a-zA-Z]+$/)) {
			}
			/*else if (deleteCardID === null) {
				alert("You have to write an ID. Try again.");
				return;
			}*/
			else {
				alert("You can only type in numbers and letters. Try again.");
				return;
			}
		}
	}
	else {
		alert("You haven't added any cards yet!");
		return;
	}
	
	getCount1();
	getCount2();
	getCount3();
	getCount4();
	dragDrop();
	
}


// --- Funksjoner for å vise hvor mange kort det er i hver blokk/dropzone ---


let parent1;
let toDoCount;
let user1ToDo;
toDoCount = document.getElementById("toDoActivity").innerHTML = "0";
user1ToDo = document.getElementById("userToDo-1").innerHTML = "0";

function getCount1 (parent1) {
	
	parent1 = document.getElementById("drop1");
	
	
	let children = parent1.childNodes, cnt = 0;
	for (let i = 0, len = children.length; i < len; i++) {
		if (children[i].nodeType === 1) {
			++cnt;
		}
	}
	console.log("***********************");
	console.log("I drop1  " + cnt);
	console.log("---------------");
	
	let cntToString = cnt.toString() ;
	toDoCount = document.getElementById("toDoActivity").innerHTML = cntToString;
	user1ToDo = document.getElementById("userToDo-1").innerHTML = cntToString;
	console.log(toDoCount + " toDoCount ");
	console.log(user1ToDo + " user1ToDo ");
	return;
	
}
//-----

let parent2;
let assistanceActivity;
let user1Assistance;
assistanceActivity= document.getElementById("assistanceActivity").innerHTML = "0";
user1Assistance = document.getElementById("userAssistance-1").innerHTML = "0";

function getCount2 (parent2) {
	
	parent2 = document.getElementById("drop2");
	
	let children = parent2.childNodes, cnt = 0;
	for (let i = 0, len = children.length; i < len; i++) {
		if (children[i].nodeType === 1) {
			++cnt;
		}
	}
	console.log("I drop2 " + cnt);
	console.log("---------------");
	
	let cntToString = cnt.toString() ;
	assistanceActivity = document.getElementById("assistanceActivity").innerHTML = cntToString;
	user1Assistance = document.getElementById("userAssistance-1").innerHTML = cntToString;
	
	console.log(assistanceActivity + " assistanceActivity");
	console.log(user1Assistance + " user1Assistance");
	return;
	
}
//-----

let parent3;
let inProgressActivity;
let user1InProgress;
inProgressActivity = document.getElementById("inProgressActivity").innerHTML = "0";
user1InProgress = document.getElementById("userInProgress-1").innerHTML = "0";

function getCount3 (parent3) {
	
	parent3 = document.getElementById("drop3");
	
	let children = parent3.childNodes, cnt = 0;
	for (let i = 0, len = children.length; i < len; i++) {
		if (children[i].nodeType === 1) {
			++cnt;
		}
	}
	console.log("I drop3 " + cnt);
	console.log("---------------");
	
	let cntToString = cnt.toString() ;
	inProgressActivity = document.getElementById("inProgressActivity").innerHTML = cntToString;
	user1InProgress = document.getElementById("userInProgress-1").innerHTML = cntToString;
	console.log(inProgressActivity + " inProgressActivity");
	console.log(user1InProgress + " user1InProgress");
	return;
	
}
//-----

let parent4;
let finishedActivity;
let user1Finished;
finishedActivity = document.getElementById("finishedActivity").innerHTML = "0";
user1Finished = document.getElementById("userFinished-1").innerHTML = "0";

function getCount4 (parent4) {
	
	parent4 = document.getElementById("drop4");
	
	let children = parent4.childNodes, cnt = 0;
	for (let i = 0, len = children.length; i < len; i++) {
		if (children[i].nodeType === 1) {
			++cnt;
		}
	}
	console.log("I drop4 " + cnt);
	console.log("---------------");
	
	let cntToString = cnt.toString() ;
	finishedActivity = document.getElementById("finishedActivity").innerHTML = cntToString;
	user1Finished = document.getElementById("userFinished-1").innerHTML = cntToString;
	console.log(finishedActivity + " finishedActivity");
	console.log(user1Finished + " user1Finished");
	return;
	
}
//-----
