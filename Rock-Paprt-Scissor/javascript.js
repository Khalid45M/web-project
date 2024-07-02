let choices = ["rock", "paper", "scissor"]
let displayComputerdisplayPlayer = document.getElementById("displayPlayer")
let displayComputer = document.getElementById("displayComputer")
let displayPdisplayResultlayer = document.getElementById("displayResult")

function playGame(playerChoice){
    let computerChoice = choices[Math.floor(Math.random() * 3)]

    console.log(computerChoice)

    let result = ''

    if(playerChoice == computerChoice){
        result = "DROW"
    }else{
        switch(playerChoice){
            case "rock":
                result = computerChoice == "scissor"? "You Win": "You Lose";
                break
            case "paper":
                result = computerChoice == "rock"? "You Win": "You Lose";
                break
            case "scissor":
                result = computerChoice == "paper"? "You Win": "You Lose";
                break
                
        }

    }

    displayPlayer.innerHTML = `Player: ${playerChoice}`
    displayComputer.innerHTML = `Computer: ${computerChoice}`
    displayResult.innerHTML = result

}