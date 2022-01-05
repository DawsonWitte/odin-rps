let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  rpsFunction(0)
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    rpsFunction(1)
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    rpsFunction(2)
});

function rpsFunction(playerInput) {
    let computerInput=Math.floor(Math.random() * 3);
    if (computerInput==0) {
        document.getElementById("computer").innerHTML = "Rock";
    } else if (computerInput==1) {
        document.getElementById("computer").innerHTML = "Paper";
    } else if (computerInput==2) {
        document.getElementById("computer").innerHTML = "Scissors";
    }
    if (playerInput==0) {
        document.getElementById("player").innerHTML = "Rock";
        if (computerInput==0) {
            document.getElementById("announcement-text").innerHTML = "Tie!";
            scoreKeeping("tie")
        } else if (computerInput==1) {
            document.getElementById("announcement-text").innerHTML = "Loss!";
            scoreKeeping("loss")
        } else if (computerInput==2) {
            document.getElementById("announcement-text").innerHTML = "Win!";
            scoreKeeping("win")
        }
    } else if (playerInput==1) {
        document.getElementById("player").innerHTML = "Paper";
        if (computerInput==0) {
            document.getElementById("announcement-text").innerHTML = "Win!";
            scoreKeeping("win")
        } else if (computerInput==1) {
            document.getElementById("announcement-text").innerHTML = "Tie!";
            scoreKeeping("tie")
        } else if (computerInput==2) {
            document.getElementById("announcement-text").innerHTML = "Loss!";
            scoreKeeping("loss")
        }
    } else if (playerInput==2) {
        document.getElementById("player").innerHTML = "Scissors";
        if (computerInput==0) {
            document.getElementById("announcement-text").innerHTML = "Loss!";
            scoreKeeping("loss")
        } else if (computerInput==1) {
            document.getElementById("announcement-text").innerHTML = "Win!";
            scoreKeeping("win")
        } else if (computerInput==2) {
            document.getElementById("announcement-text").innerHTML = "Tie!";
            scoreKeeping("tie")
        }
    }
}

function scoreKeeping(result) {
    if (playerScore >= 3) {
        playerScore = 0;
        computerScore = 0;
        circleOne.style.backgroundColor = "White"
        circleTwo.style.backgroundColor = "White"
        circleThree.style.backgroundColor = "White"
        circleFour.style.backgroundColor = "White"
        circleFive.style.backgroundColor = "White"
    }
    else if (computerScore >= 3) {
        playerScore = 0;
        computerScore = 0;
        circleOne.style.backgroundColor = "White"
        circleTwo.style.backgroundColor = "White"
        circleThree.style.backgroundColor = "White"
        circleFour.style.backgroundColor = "White"
        circleFive.style.backgroundColor = "White"
    }


    if (result=="win") {
        if (playerScore==0) {
            circleOne.style.backgroundColor = "#ff66ff"
        } else if (playerScore==1) {
            circleTwo.style.backgroundColor = "#ff66ff"
        } else if (playerScore==2) {
            circleThree.style.backgroundColor = "#ff66ff"
        }
        playerScore ++;
    }
    else if (result=="loss") {
        if (computerScore==0) {
            circleFive.style.backgroundColor = "#00cc00"
        } else if (computerScore==1) {
            circleFour.style.backgroundColor = "#00cc00"
        } else if (computerScore==2) {
            circleThree.style.backgroundColor = "#00cc00"
        }
        computerScore ++;
    }
    else {
        return;
    }

    if (playerScore==3) {
        document.getElementById("announcement-text").innerHTML = "Victory!";
    } else if (computerScore==3) {
        document.getElementById("announcement-text").innerHTML = "Defeat!";
    }
}