

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
	
	// Dobbeltklikk på kortet fører til removeCard():
	//card.setAttribute("ondblclick", "removeCard();");
	
	
	let nodeP = document.createElement("p");
	nodeP.className = "pCard";
	let nodeID = document.createElement("p");
	nodeID.className = "pCard";
	
	let input = prompt("Write the title of the card: ");
/*	blockSpecialChar();
	
	function blockSpecialChar(e) {
		let k = e.keyCode;
		return ((k > 64 && k < 91) || (k > 96 && k < 123) || k === 8   || (k >= 48 && k <= 57));
	}*/
	
	if (input) {
		if (input.match(/^[0-9a-zA-Z]+$/)) {
		}
		/*else if (input === null) {
			alert("You have to give the card a title. Try again.");
			return;
		}*/
		else {
			alert("You can only type in numbers and letters. Try again.");
			counter --;
			return;
		}
		dragDrop();
	}
	
	
	let inputPlusTitle = "Title: " + input;
	
	let textNode = document.createTextNode(inputPlusTitle);         // Create a text node
	
	let id = "card" + counter;
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
		let deleteOrNot = prompt("Do you want to delete this card?" + "\nWrite yes or no").toLowerCase();
		
		let cardIDOfCard = document.getElementById(deleteCardID);
		let dropParent = cardIDOfCard.parentNode;
		
		if (deleteOrNot === "yes") {
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
	}
	else {
		alert("You haven't added any cards yet!");
		return;
	}
	
	dragDrop();
}
//-----


