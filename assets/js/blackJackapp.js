// code inspiration from that software dude content from https://www.thatsoftwaredude.com/content/6417/how-to-code-blackjack-using-javascript
const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let deck = new Array();
// function  to create deck
function createDeck () {
    deck = new Array();    //clears previous array data 
    values.forEach(value => {suits.forEach((suit) => {      //for each loops to populate deck array
    let weight = parseInt(value);  // sets weight var to int to be able to assign nurmeric value to all cards
    weight = (value === 'J' || value == 'Q' || value === 'K') ? weight = 10 :  (value === 'A') ? weight = 11:  value // ternary operators conditionals used to set value of faces cards 
            // if (value === "J" || value=== "Q" || value === "K")  {weight = 10;} else if (value === "A")  {weight = 11}  ;  //   couldn't get the ternary work going back to if statment
            let card = { Value: value, Suit: suit, Weight: weight  };
            deck.push(card); // pop  card into deck array
        });
        

    });
}
createDeck();
// console.log(deck)

console.log(deck)

//create function to shuffle deck 
let shuffleDeck = () => {


    deck.sort(() =>{return .05 - Math.random()}) //shuffle the deck once

}
// 

const times = numberOfTimes => callback => {
    if (numberOfTimes > 0) {
      callback()
      times (numberOfTimes - 1) (callback)
    }
  }
// function times(numberOfTimes) {
//     return callback => {
//         if (numberOfTimes > 0) {
//             callback();
//             times(numberOfTimes - 1)(callback);
//         }
//     };
// }
times(1000) (()=>{shuffleDeck()})
// function shuffleDeck(array) {
//     deck.reverse().forEach((array, i) =>{
       
//        let swap = Math.floor(Math.random() * i)
//            deck.sort(() =>{return .05 - Math.random()}) 
    // deck.sort(() =>{return .05 - Math.random()}) 
    // deck.sort(() =>{return .05 - Math.random()}) 
    // deck.sort(() =>{return .05 - Math.random()}) 
//     //    console.log(i)


  
       
//     } )
    
// }

// function shuffleArray (array) {
//     for (let i = array.lenght -1; i > 0;  i--) {
//         const j = Math.floor(Math.random() * (i * 1) );
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }
// shuffleArray(deck)
// shuffleDeck()
// shuffleDeck()
console.log(deck)

