// DOM - DOCUMENT OBJECT MODEL
//  

const game = {
	score: 10,
	players: ['Jim', 'Liz']
}
const ulEl = document.querySelector("ul")
game.players.forEach(function(player){
    const liEl= document.createElement("li");
    liEl.innerText = player
    ulEl.appendChild(liEl)
    liEl.setAttribute("class", "player")
})

function printScore(score){
	return `The score is ${score}`
}


const scoreEl = document.querySelector('#score')
console.log(scoreEl)

// css Selectors (Google this any work inside querySelector)
// tagName example, 'h1', 'p', 'div', 'h3', etc
// className example '.fruits', '.tacos', etc
// id example, '#score', '#player-1', '#player-2', etc

scoreEl.innerText = 9


const updatedEl = document.querySelector("#updated")

updatedEl.innerText = "something"



// Use the forEach method on the players array 
// print out 
// The player is Jim
// The player is Liz
game.players.forEach(function(player){
	console.log(`The player is ${player}`)
})


// Print out "Liz"
console.log(game.players[1])

// define a function called printScore that takes argument which
// represents the score, 
// and returns a message "The score is 10"
//Call you function

// defining our function

printScore(25)

// // function expression
// const printEndGame = function(){

// }
