
// code inspiration from that software dude content 6417 
const suits = ["Spade", "Clubs", "Hearts", "Diamonds"]
const values = ["2","3","4","5","6","7","8","9","J","Q","K","A"];
let deck = new Array();






// function  to create deck

function createDeck () {
//clears previous array data 
    deck = new Array();
    //for each loops to populate deck array logic refactored from https://www.thatsoftwaredude.com/content/6417/how-to-code-blackjack-using-javascript
    values.forEach(value => {
        suits.forEach((suit) => {
            // sets weight var to be able to assign nurmeric value to all cards
            let weight = parseInt(values[value]);
            // ternary operators conditionals used to set value of faces cards 

        //    values[value] == 'J' || values[value] == 'Q' || values[value] == 'K' ? (weight = '10') : values[value] == 'A' ? (weight = '11') ;
    //   couldn't get it to work going back to if statment
            if (value[values] === 'J' || values[value] === 'Q' || values[value] === 'K') {
                weight = 10
            } else if (values[value] === 'A') {weight = 11} else {weight = values[value]};
            let card = { Value: values[value], Suit: suits[suit], Weight: weight  };

            deck.push(card);
            console.log(card)
           

            


            
            
        });
        
        
    });


}
createDeck();
// console.log(deck)




