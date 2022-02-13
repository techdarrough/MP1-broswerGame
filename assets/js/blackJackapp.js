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


//create function to shuffle deck 
let shuffleDeck = () => {deck.sort(() =>{return .05 - Math.random()}) } //shuffles the deck once using sort
//  ternary operator resulted in infinite loop
// const times = numberOfTimes => callback => {(numberOfTimes > 0)? times ( numberOfTimes--)(callback) : callback} 

const times =  numberOfTimes => callback => {
    if (numberOfTimes > 0) {
      callback()
      times (numberOfTimes - 1) (callback)
    }
  }

times(1000) (()=>{shuffleDeck()}) // maybe change static value to user input

console.log(deck)

//create player 

// let players = new Array();
// function createPlayers(numberOfPlayers) {
//     players = new Array(); //clears previous hand
//     let num = [numberOfPlayers]
// num.forEach((element, i)=>{
//         let hand = new Array();
//         let player = {name: 'Player ' + i, ID: i, Score: 0, hand: hand};
//         players.push(player);
//     })
// }

let players = new Array();
function createPlayers(num) {
    players = new Array();
    for (let i = 0; i <= num; i++) {
        let hand = new Array();
        let player = {name: 'Player ' + i, ID: i, Score: 0, hand: hand};
        players.push(player);
    }
}

createPlayers(3)
console.log(players)