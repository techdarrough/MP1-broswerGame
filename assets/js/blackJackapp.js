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
            deck.push(card); // pop card object into deck array
        });
        
        
    });
}



//create function to shuffle deck  using sort
let shuffleDeck = () => {deck.sort(() =>{return .05 - Math.random()}) } //shuffles entire the deck once using sort
//  changing the range of math.random by subtracting .05 to randomly return postive and negative values (-.05 to .04999~)
// unamed compare function will then sort implied a before b for postive values 
// b come before a for negative values 

// function that take two parms one being a callback fucntion in which I stick the shuffle sort function 
const times =  numberOfTimes => callback => {
    if (numberOfTimes > 0) {
      callback()
      times (numberOfTimes - 1) (callback)
    }
  }

times(1000) (()=>{shuffleDeck()}) // repeats deck shuffle 1000 times maybe change static value to user input

// console.log(deck)

//create player 

// let players = new Array();
// function createPlayers(numberOfPlayers) {
//     players = new Array(); //clears previous hand
//     let num = [numberOfPlayers]
// num.forEach((element, i)=>{
//         let hand = new Array();
//         let player = {name: 'Player ' + element, ID: i, Score: 0, hand: hand};
//         players.push(player);
//     })
// }

let players = new Array();
function createPlayers(num) {
    players = new Array();
    for (let i = 0; i <= num; i++) {
        let hand = new Array(); // creates hand as empty array
        let player = {name: 'Player ' + i, ID: i, Score: 0, hand: hand}; //creates player object
        players.push(player);
    }
}


console.log(players)






function createPlayerUI() {
    document.querySelector('.players').innerHTML = " "
    players.forEach((value)=>{
        console.log(value.ID);
        console.log(value.Score);
        console.log(value.hand);
        console.log(value.name);
        

        let playerDiv = document.createElement('div');
    
        let playerDivId = document.createElement('div')
       
        let handDiv = document.createElement('div')
        
        let pointsDiv =  document.createElement('div')


        pointsDiv.className ='points'
        pointsDiv.id = `Points ${value.ID}`
        playerDiv.id = (value.ID === 0 )?`Dealer_${value.ID + 1}`:  `Player ${value.ID})`;
        playerDiv.className
        playerDivId.innerHTML = value.Score
        handDiv.id = 'hand_' + value.hand;

        playerDiv.appendChild(playerDivId);
        playerDiv.appendChild(handDiv);
        playerDiv.appendChild(pointsDiv);
        document.getElementById('players').appendChild(playerDiv);

        

    })
   // rerender fucntions  ?
   

}

function startGame() {
    createDeck();
    console.log(deck)
    createPlayers(1)
    createPlayerUI()
    
}
function dealHands() {


}
function hitMe() {

}

function stand() {
    
}











