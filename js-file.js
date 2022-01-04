

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
    if (playerInput==0) {
        if (computerInput==0) {
            console.log("tie");
        } else if (computerInput==1) {
            console.log("lose");
        } else if (computerInput==2) {
            console.log("win");
        }
    } else if (playerInput==1) {
        if (computerInput==0) {
            console.log("win");
        } else if (computerInput==1) {
            console.log("tie");
        } else if (computerInput==2) {
            console.log("lose");
        }
    } else if (playerInput==2) {
        if (computerInput==0) {
            console.log("lose");
        } else if (computerInput==1) {
            console.log("win");
        } else if (computerInput==2) {
            console.log("tie");
        }
    }
}