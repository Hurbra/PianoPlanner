
let addCardButton = document.getElementById("addCardButton");

addCardButton.addEventListener("click", e => {
	addCard();
});


function addCard(qualifiedName, value) {
	console.log("I funksjon");
	let card = document.createElement("li");
	
	card.setAttribute("draggable", true);
	card.className = "card";
	
	let drop = document.getElementById("drop1");
	
	let nodeP = document.createElement("p");                 // Create a <li> node
	let input = prompt("Write the title of the card: ");
	var textNode = document.createTextNode(input);         // Create a text node
	
	nodeP.appendChild(textNode);
	card.appendChild(nodeP);
	drop.appendChild(card);
	
	console.log("Nytt kort opprettet: " + card);
	
	dragDrop();
	
}


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
		//if this element is a drop target, move the item here
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





