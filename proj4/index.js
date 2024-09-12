// //TODO: shuffle
// const cards = document.querySelectorAll(".card");
// console.log(cards);

// //variables
// var isFlipped = false;
// var firstCard;
// var secondCard;

// cards.forEach((card) => card.addEventListener("click", flip));

// function flip() {
//   // console.log("Card flipped");
//   this.classList.add("flip");   //adding class of name flip
//   if (!isFlipped) {
//     isFlipped = true
//     firstCard = this;
//   }else{
//     secondCard = this;
//     console.log(firstCard);
//     console.log(secondCard);
//     checkIt();
//   }
// }

// function checkIt() {
//   // console.log("Checking...");
//   if (firstCard.dataset.image === secondCard.dataset.image) {
//     // console.log("Matched");
//     success();
    
//   }else{
//     // console.log("Unmatched");
//     fail();
//   }
  
// }
// function success() { 
//   // console.log("Matched");
//   firstCard.removeEventListener("click", flip);
//   secondCard.removeEventListener("click", flip);
//   reset();
//  }
// function fail() { 
//   // console.log("Unmatched");
//   setTimeout(() => {
//     firstCard.classList.remove("flip");
//     secondCard.classList.remove("flip");
//     reset();
//   }, 500)
//  }
// function reset() {
//   isFlipped=false;
//   firstCard=null;
//   secondCard=null;
// }

// (function shuffle() {
//   cards.forEach((card) =>{
//     let randomPos = Math.floor(Math.random() * 16);
//     card.style.order = randomPos;
//   });
// })();

