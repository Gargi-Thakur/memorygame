//card currently selected
//if the next card selected is === to current selected- then show them
// else flip them back
//with timer function
//score function


//IMAGE-DATA
var cardImages = []
cardImages[0] = 'images/naruto.png';
cardImages[1] = 'images/sakura.png';
cardImages[2] = 'images/sasuke.png';
cardImages[3] = 'images/kakashi.png';
cardImages[4] = 'images/sasuke.png';
cardImages[5] = 'images/neji.png';
cardImages[6] = 'images/sakura.png';
cardImages[7] = 'images/hinata.png';
cardImages[8] = 'images/kakashi.png';
cardImages[9] = 'images/neji.png';
cardImages[10] = 'images/naruto.png';
cardImages[11] = 'images/hinata.png';

let card = document.querySelectorAll(".card");
let front = document.querySelectorAll(".front");
let back = document.querySelectorAll(".back");
let flip = document.querySelector("#flip");
let timer = document.querySelector("#timer");
var pickedCard = cardImages[5];

for(var i = 0; i < cards.length; i++){
	cards[i].style.backgroundImage = cardImages[i];
}

//Scorekeeping
cards.addEventListener("click", function(){
	alert("clicked")
})

//ASSIGNS IMAGES TO CARDS
for(var i = 0; i < back.length; i++){
	back[i].style.backgroundImage = cardImages[i];
}



