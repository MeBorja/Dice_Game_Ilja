console.log("test " + randomNumber());

function randomNumber() {
    let randomNumber = Math.random();
    randomNumber = randomNumber * 6 + 1;
    randomNumber = Math.floor(randomNumber);
    return randomNumber
}
let tall1 = randomNumber();
let tall2 = randomNumber();
//console.log (tall1, tall2);

let img2 = document.querySelector(".img2");
let img1 = document.querySelector(".img1");
let status = document.querySelector("#Status")

img1.addEventListener("click", (event) =>{
    rollDice();
})
img2.addEventListener("click", (event) =>{
    rollDice();
})
function rollDice() {
    const dice1 = randomNumber();
    img1.src = `./images/dice${dice1}.png`;
    console.log(dice1);
    const dice2 = randomNumber();
    img2.src = `./images/dice${dice2}.png`;
    console.log(dice2);
    determineWinner(dice1, dice2);
}
function determineWinner(dice1, dice2) {
    if (dice1 == dice2){
        console.log("draw");
        status.innerText = "Draw";
    }   else if (dice1 > dice2){
        console.log("Player 1 WON!!!")
        status.innerText = "Player 1 WON!!!";
    } else{
        console.log("Player 2 WON!!!")
        status.innerText = "Player 2 WON!!!"
    }
}
