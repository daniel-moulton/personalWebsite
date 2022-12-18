const playerTurn = document.getElementById('playerTurn');
console.log(playerTurn);
const gameState = document.getElementById('winner');
console.log(gameState);
let gameRunning = true;
let currentPlayer = "X";
let startingPlayer = currentPlayer;
let xScore = 0;
let yScore = 0;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let gridState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;


function replyToClick(cellID) {;
    let cellIndex = cellID.replace(/^\D+/g, "") - 1;
    if (gridState[cellIndex] !== "" || !gameRunning) {
        return;
    }
    gridState[cellIndex] = currentPlayer;
    let cell = document.querySelector('#' + cellID)
    cell.innerHTML = currentPlayer;
    cell.style.color = currentPlayer === "X" ? "red" : "green";
    checkGameStatus();
    switchPlayer();
}

function switchPlayer() {
    if (currentPlayer === "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
    setPlayerTurn(currentPlayer);
}

function switchStartingPlayer(){
    if (startingPlayer === "X") {
        startingPlayer = "O";
    } else {
        startingPlayer = "X";
    }
    currentPlayer = startingPlayer;
    setPlayerTurn(currentPlayer);
}

function setPlayerTurn(player) {
    playerTurn.innerHTML = "Turn: " + player;
}

function restartGame() {
    gameRunning = true;
    switchStartingPlayer();
    gridState = ["", "", "", "", "", "", "", "", ""];
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.innerHTML = "";
        cell.style.backgroundColor = "white";
    });
    gameState.style.display = "none";
}

function checkGameStatus() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gridState[winCondition[0]];
        let b = gridState[winCondition[1]];
        let c = gridState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            let cells = winningConditions[i].map(index => document.querySelector(`#cell${index + 1}`));
            cells.forEach(cell => {
                cell.style.backgroundColor = "yellow";
            });
            break
        }
    }

    if (roundWon) {
        gameState.innerHTML = winningMessage();
        if (currentPlayer === "X") {
            xScore++;
        } else {
            yScore++;
        }
        document.getElementById('score').innerHTML = "Score: " + xScore + " - " + yScore;
        gameState.style.display = "block";
        gameRunning = false;
        return;
    }

    let roundDraw = !gridState.includes("");
    if (roundDraw) {
        gameState.innerHTML = drawMessage();
        gameState.style.display = "block";
        gameRunning = false;
        return;
    }
}