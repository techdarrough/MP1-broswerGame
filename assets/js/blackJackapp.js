
// code inspiration from that software dude content 6417 
var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let deck = new Array();






// function  to create deck

function createDeck () {
//clears previous array data 
    deck = new Array();
    //for each loops to populate deck array logic refactored from https://www.thatsoftwaredude.com/content/6417/how-to-code-blackjack-using-javascript
    values.forEach(value => {
        
        suits.forEach((suit) => {
           
            // console.log(suit)
            // sets weight var to be able to assign nurmeric value to all cards
            let weight = parseInt(value);
            // ternary operators conditionals used to set value of faces cards 

        //    value == 'J' || value == 'Q' || value == 'K' ? (weight = '10') : value == 'A' ? (weight = '11') :
    //   couldn't get it to work going back to if statment
            if (value === "J" || value=== "Q" || value === "K")  {
                weight = 10;}
            else
            if (value === "A")  {weight = 11}  ;
            let card = { Value: value, Suit: suit, Weight: weight  };
            // console.log(card)
            deck.push(card);
          
           

            


            
            
        });
        
        
    });


}
createDeck();
console.log(deck)




