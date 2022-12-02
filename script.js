let computerSelection,
    userSelection,
    result,
    winningScore=0,
    drawScore=0;
function game(){
    console.log("Welcome to our game, You have 5 rounds"+ "\n"+ "========================================================");
    for (let index = 1; index < 6; index++) {
        computerSelection= computerPlay();
        userSelection = prompt(" Round  "+ index +": Choose Rock, Paper, or Scissors?");
        result =singleRound(userSelection,computerSelection);
        if(result == -1){
            index --;
            console.log("Try again! You didnt lost your round ;) Choose one of these Rock, Paper, or Scissors"+ "\n"+ "=====================================================================================");
        }
        else{ 
            if(result[1] == 1){
                winningScore += 1;
                console.log("WOW! You Earned One Point From Round " +index);
            }
            if(result[1]== 2){
                drawScore += 1;
            }
            if(index == 5){
                console.log(result[0]+"\n"+"Your Final Score is : " + winningScore + "/5" + "\n"+ "========================================================");
                if((drawScore == 1 && winningScore == 2) || (drawScore == 5) || (drawScore == 3 && winningScore == 1)){
                    console.log("Game is Completed!"+ "\n"+ "It's a tie!");
                }
                else if(winningScore >= 3){
                    console.log("Game is Completed!"+ "\n" +"Congratulations! You Won The Game! "); 
                }
                else{
                    console.log("Game is Completed!"+ "\n"+ "Unfortunately! You Lost The Game! "); 
                }
            }
            else{
                console.log(result[0] + "\n"+ "Your Score is : " + winningScore + "/5" + "\n"+ "========================================================");  
            }
        } 
    }
}
function computerPlay () { 
    let words = ["rock", "paper", "scissors"];
    return words[Math.floor(Math.random() * words.length)];
}
function singleRound(userSelection,computerSelection) {
    let user = userSelection.toLowerCase();
    let computer = computerSelection;
    console.log("user:" + user + " and computer:" + computer);
    if(user === "rock"){
        if(computer === "rock"){
            return ["Draw :p",2];
        }
        else if(computer === "paper"){
            return ["You Lost This Round! Paper Beats Rock :(",0]; 
        }
        else if(computer === "scissors"){
            return ["You Won This Round! Rock Beats Scissors :)",1];
        }
    }
    if(user === "paper"){
        if(computer === "rock"){
            return ["You Won This Round! Paper Beats Rock :)",1];
        }
        else if(computer === "paper"){
            return ["Draw :p",2]; 
        }
        else if(computer === "scissors"){
            return ["You Lost This Round! Scissors Beats Paper :(",0];
        }
    }
    if(user === "scissors"){
        if(computer === "rock"){
            return ["You Lost This Round! Rock Beats Scissors :(",0];
        }
        else if(computer === "paper"){
            return ["You Won This Round! Scissors Beats Paper :)",1]; 
        }
        else if(computer === "scissors"){
            return ["Draw :p",2];
        }
    }
    else{
        return -1;
    }
}
console.log(game());