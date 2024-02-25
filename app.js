const UserchoiceDisplay = document.getElementById("Userchoice");
const ComputerChoiceDisplay = document.getElementById("Computerchoice");
const ResultDisplay = document.getElementById("Result");
const SelectedChoices = document.getElementsByClassName("ChoosedBtn");
let userChoice;
let computerChoice;

document.getElementById("Rock").addEventListener('click',onClick);
document.getElementById("Paper").addEventListener('click',onClick);
document.getElementById("Scissors").addEventListener('click',onClick);


function onClick(e){
    userChoice = e.target.id;
    UserchoiceDisplay.innerHTML = userChoice;
    getComputerChoice();
    getResult();
};


function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3 + 1);
    if(randomNum === 1){
        computerChoice = 'Rock';
    }
    if(randomNum === 2){
        computerChoice = 'Paper';
    }
    if(randomNum === 3){
        computerChoice = 'Scissors';
    }
    ComputerChoiceDisplay.innerHTML = computerChoice;
};

function getResult(){
    switch(userChoice + computerChoice){
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            ResultDisplay.innerHTML = "You win!!!";
            break;
        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            ResultDisplay.innerHTML = "You Lose!!!";
            break;
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            ResultDisplay.innerHTML = "This is a Draw!!!";
            break;
    }
};
