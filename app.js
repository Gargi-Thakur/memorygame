//card currently selected
//if the next card selected is === to current selected- then change image to blank 
// else flip them back
//with timer function
//score function


//IMAGE-DATA
var cardImages = []
cardImages[0] = "url('images/naruto.png')";
cardImages[1] = "url('images/sakura.png')";
cardImages[2] = "url('images/sasuke.png')";
cardImages[3] = "url('images/kakashi.png')";
cardImages[4] = "url('images/sasuke.png')";
cardImages[5] = "url('images/neji.png')";
cardImages[6] = "url('images/sakura.png')";
cardImages[7] = "url('images/hinata.png')";
cardImages[8] = "url('images/kakashi.png')";
cardImages[9] = "url('images/neji.png')";
cardImages[10] = "url('images/naruto.png')";
cardImages[11] = "url('images/hinata.png')";

let card = document.querySelectorAll(".card");
let front = document.querySelectorAll(".front");
let back = document.querySelectorAll(".back");
let flip = document.querySelector("#flip");
let timer = document.querySelector("#timer");

var matchedCards

if (card) {
	for (var i=0; i < card.length; i++) {
    	card[i].addEventListener("click", addBack);
      }
};
//card.addEventListener('click' , );

function addBack(){
	//card.classList.add('back');
	alert('clicked');
};


//ASSIGNS IMAGES TO CARDS
for(var i = 0; i < back.length; i++){
	back[i].style.backgroundImage = cardImages[i];
}
