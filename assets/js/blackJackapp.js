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



//create function to shuffle deck 
//
function shuffleDeck() {
    deck.reverse().forEach((array, i) =>{
        console.log(array, i)
  
        // console.log(indexPosition1)
        // console.log(indexPosition2)
    } )
    
}
shuffleDeck()

