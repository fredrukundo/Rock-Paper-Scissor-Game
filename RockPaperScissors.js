const myArr = ["Rock","Paper","Scissor"];
let computer = Math.floor(Math.random()*3);
let player = Math.floor(Math.random()*3);
let message = "Player " + myArr[player] + " computer " + myArr[computer] + " ";

if(player === computer){
    message+= "it's a tie";
}
else if(player>computer){
    if(computer == 0 && player == 2){
        message += "computer wins";
    }
    else{
        message += "player wins";
    }
}
else{
    if(computer == 2 && player == 0){
        message += "player wins";
    }
    else{
        message += "computer wins";
    }
}

console.log(message);