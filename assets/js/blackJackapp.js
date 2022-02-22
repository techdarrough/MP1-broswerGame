const suits = ["&spadesuit;", "&heartsuit;", "&diamondsuit;", "&clubsuit;"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let deck = new Array();
let players = new Array();
let currentPlayer = 0
// function  to create deck
function createDeck () {
    deck = new Array();    //clears  any previous array data 
    values.forEach(value => {suits.forEach((suit) => {      //for each loops to populate deck array
    let weight = null;  // sets weight var to int to be able to assign nurmeric value to all cards
    weight = (value === 'J' || value == 'Q' || value === 'K') ? weight = 10 :  (value === 'A') ? weight = 11:  parseInt(value) // ternary operators conditionals used to set value of faces cards 
            // if (value === "J" || value=== "Q" || value === "K")  {weight = 10;} else if (value === "A")  {weight = 11}  ;  //   couldn't get the ternary work going back to if statment
            let card = { Value: value, Suit: suit, Weight: weight  };
            deck.push(card); // pop card object into deck array
        });
        
        
    });
}


function createPlayers(num) {
    players = new Array();
    for (let i = 0; i <= num; i++) {
        let hand = new Array(); // creates hand as empty array
        let player = {
            name: (i === 0)?'Dealer':'Player', 
            ID: i, 
            Score: 0, 
            Hand: hand}; //creates player object later capatilized propery named to help aviod confusion
        players.push(player);
    }
}


function createPlayerUI() {
  document.querySelector(".players").innerHTML = " ";
  players.forEach((value) => {
    let playerDiv = document.createElement("div");
    let playerDivId = document.createElement("div");
    let handDiv = document.createElement("div");
    let pointsDiv = document.createElement("div");
    // setting html attributes checkout the use of both ternery oprators and temperate litterals
    pointsDiv.className = "points";
    pointsDiv.id = `Points_${value.ID}`;
    playerDiv.id = value.ID === 0 ? `Player_${value.ID}` : `Player_${value.ID}`;
    playerDiv.className =
      value.ID === 0 ? `Dealer ${value.ID}` : `Player ${value.ID})`;
    pointsDiv.innerHTML = `${value.name} ${
      value.ID === 0 ? "Shows" : "Score"
    } ${value.Score}`;
    // did he just --- yes, yes I did put a temperate litteral into a ternary operator!
    handDiv.id = `Hand_${value.ID}`;
    // render elements to page
    playerDiv.appendChild(playerDivId);
    playerDiv.appendChild(handDiv);
    playerDiv.appendChild(pointsDiv);
    document.getElementById("players").appendChild(playerDiv);
  }); // rerender fucntions  here later with help fucntion
}


//create function to shuffle deck  using sort
let shuffleDeck = () => {deck.sort(() =>{return .05 - Math.random()}) } //shuffles entire the deck once using sort
//  changing the range of math.random by subtracting .05 to randomly return postive and negative values (-.05 to .04999~)
// anonymous  function will then sort implied a before b for postive values 
// b come before a for negative values 
//  only changing the positions half the time didnt shuffle enough so I need to repeat the funciton a bunch to have more randomized order
// this is because sort wants to sort into an order so it not he best randomizer
// function that take two parms one being a callback fucntion in which I stick the shuffle sort function 
const times =  numberOfTimes => callback => {
    if (numberOfTimes > 0) {
      callback()
      times (numberOfTimes - 1) (callback)
    }
  }

// times(1000) (()=>{shuffleDeck()}) // repeats deck shuffle 1000 times maybe change static value to user input so they can choose between min and max values problaly assign ten times weight to user input values
//start game onclick
function startGame() {
    document.querySelector('#gameStart').value = 'Re-Deal'; //change button value
    document.querySelector('#status').style.display="none";
    document.querySelector('.players').style.display="flex";
    
    currentPlayer = 0;
    createDeck();
        times(1000) (()=>{shuffleDeck()});
    createPlayers(1);
    // console.log(deck);
    createPlayerUI();
    dealHands();
    check();
    document.querySelector(`#Player_${currentPlayer}`).classList.add('active'); 
  
}



function dealHands () {   // Abandon array.from forEach and hard set length to 2
    for(let i = 0; i < 2; i++)
    {
        for (let x = 0; x < players.length; x++)  // for each player 
        {
            let card = deck.pop(); // pop object out of deck array
            players[x].Hand.push(card); // place object in player Hand property
            renderCard(card, x); // Function take 2 parms card and idx of array for player number 
            updatePoints(); //must update points 
        }
    }

    updateDeck(); // must update deck count display on page
}


function renderCard(card, player){
    
    let hand = document.querySelector(`#Hand_${player}`);  //grab correct player using temperate litteral
    hand.appendChild(getCardUI(card));       // envoke getCardUi function and append e

}



function getCardUI(card)
{
    let el = document.createElement('div');
    el.className = 'card';
    el.innerHTML = ` ${card.Value} ${card.Suit}`; // overlayed stlye using css    
    return el;
}



function getPoints(player) {  // get points and add them to player score object property
    let points = 0;
            for(let i = 0; i < players[player].Hand.length; i++)
            {
                points += players[player].Hand[i].Weight;
            }
            players[player].Score = points;
            return points;

    
}

function updatePoints()
        {
            for (let i = 0 ; i < players.length; i++)
            {
                getPoints(i);
                document.querySelector('#Points_' + i).innerHTML = 
               players[i].ID === 0 ?  ` Shows ${players[i].Score}` : `Score ${players[i].Score}`;
            }
        }


function hitMe() {
            let card = deck.pop();
            players[currentPlayer].Hand.push(card);
            renderCard(card, currentPlayer);
            updatePoints();
            updateDeck();
            check();

}

function stand() {
    if (currentPlayer != players.length -1) {
        document.querySelector(`#Player_${currentPlayer}`).classList.remove('active');
        currentPlayer += 1;
        document.querySelector(`#Player_${currentPlayer}`).classList.add('active');
        
    }

    else {
        check();
        end();
    }

}

function end() {
  let winner = null;
  let score = 0;

  players.forEach((player) => {
    if (player.Score > score && player.Score < 22) {
      winner = player;
    }
    score = player.Score;
  });


    document.querySelector("#status").innerHTML =" Winner " + winner.name;
    document.querySelector("#status").style.display = "block";
    
   
}

function check() {
   if (players[currentPlayer].Score > 21) {

       document.querySelector('#status').innerHTML = players[currentPlayer].name + " Busts";
       document.querySelector('#status').style.display = "block";
       
       end();
   }
    
}
function updateDeck(){
    document.querySelector('#deckcount').innerHTML = `${deck.length} cards left in the Deck`
}










