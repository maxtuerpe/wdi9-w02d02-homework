const cards = [
    {
      name: "Bulbasaur",
      damage: 60
    }, {
      name: "Caterpie",
      damage: 40
    }, {
      name: "Charmander",
      damage: 60
    }, {
      name: "Clefairy",
      damage: 50
    }, {
      name: "Jigglypuff",
      damage: 60
    }, {
      name: "Mankey",
      damage: 30
    }, {
      name: "Meowth",
      damage: 60
    }, {
      name: "Nidoran - female",
      damage: 60
    }, {
      name: "Nidoran - male",
      damage: 50
    }, {
      name: "Oddish",
      damage: 40
    }, {
      name: "Pidgey",
      damage: 50
    }, {
      name: "Pikachu",
      damage: 50
    }, {
      name: "Poliwag",
      damage: 50
    }, {
      name: "Psyduck",
      damage: 60
    }, {
      name: "Rattata",
      damage: 30
    }, {
      name: "Squirtle",
      damage: 60
    }, {
      name: "Vulpix",
      damage: 50
    }, {
      name: "Weedle", 
      damage: 40
    }
]
const cardsInPlay = []

const drawCards = (arr) => {
    let cardsIndex = Math.floor(Math.random() *(cards.length));
    arr.push(cards[cardsIndex]);
    cardsInPlay.push(cards[cardsIndex]);
    cards.splice(cardsIndex, 1);
    return arr;
}

class Player  {
    constructor(name){
    this.name = name;
    this.hand = [];
    this.points = 0;
    this.roundsWon = 0;
    }
    playCard(index){
        let attack = this.hand[index].damage;
        this.hand.splice(index, 1);
        return attack;
    };
}
const eggbert = new Player('Eggbert')
const computer = new Player('Computer')


let fighter1;
let fighter2;
const gameInitiate = (handSize, player1, player2) => {
    fighter1 = player1;
    fighter2 = player2;
    for (let i = 0; i < handSize; i++) {
        drawCards(player1.hand);   
        drawCards(player2.hand);   
    }
    return 'Ready';
}
const battle = () => {
    while(fighter1.hand.length > 0 && fighter2.hand.length > 0){
        let attack1 = fighter1.playCard(0);
        let attack2 = fighter2.playCard(0);
        if (attack1 > attack2){
            fighter1.points++;
        }
        if (attack2 > attack1){
            fighter2.points++;
        }
        console.log(`Score: ${fighter1['name']}: ${fighter1.points} - ${fighter2['name']}: ${fighter2.points} `);
    }
    let winner;
    if (fighter1.points > fighter2.points){
        fighter1.roundsWon++;
        winner = fighter1['name'];
    }
    if (fighter2.points > fighter1.points){
        fighter2.roundsWon++;
        winner = fighter2['name'];
    }
    console.log(`rounds won:  ${fighter1['name']}: ${fighter1.roundsWon} - ${fighter2['name']}: ${fighter2.roundsWon}`);
    cards.concat(cardsInPlay);
    return console.log(winner + ' WON!');
}


gameInitiate(9, eggbert, computer);
battle();









