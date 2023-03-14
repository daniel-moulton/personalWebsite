const playerTurn = document.getElementById('playerTurn');
const gameState = document.getElementById('winner');
const restart = document.getElementById('restart');

let gameRunning = true;
let currentPlayer = "X";
let startingPlayer = currentPlayer;
let xScore = 0;
let yScore = 0;
let userWon = false;

const PLAYER_X = "X";
const PLAYER_O = "O";
const PLAYER_X_COLOUR = "red";
const PLAYER_O_COLOUR = "green";

// The different winning conditions, for all horizontal, vertical and diagonal lines
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

// The initial grid state, with empty strings signifying empty cells
let gridState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;

// Called when a cell is clicked
function replyToClick(cellID) {

    // cellID is in form cell1 - cell9, so need to get the number then -1 to get index
    let cellIndex = cellID.replace(/^\D+/g, "") - 1;

    // If cell is already filled, or game is over, or it's the computer's turn, do nothing
    if (gridState[cellIndex] !== "" || !gameRunning || currentPlayer===PLAYER_O) {
        return;
    }
    gridState[cellIndex] = PLAYER_X;
    
    // Get the cell element and update it with player's symbol and colour
    setCell(cellID, PLAYER_X, PLAYER_X_COLOUR);
    

    checkGameStatus();
    switchPlayer();

    if (currentPlayer === "O") {
        // Call computerMove() after a short delay to make it seem like the computer is thinking
        setTimeout(computerMove, 750);
    }
}

// Called when it's the computer's turn
function computerMove() {
    if (gameRunning===false){
        return;
    }
    
    let possibleMoves=[];
    // Get indexes of al empty cells
    for (var i = 0; i < gridState.length; i++) {
        if (gridState[i] === "") {
            possibleMoves.push(i);
        }
    }
    
    if (possibleMoves.length === 0) {
        return;
    }
    
    // Pick a random empty cell
    let randomIndex = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
    gridState[randomIndex] = PLAYER_O;
    
    // Get the cell element and update it with computer's symbol and colour
    setCell(`cell${randomIndex + 1}`, PLAYER_O, PLAYER_O_COLOUR);

    checkGameStatus();
    switchPlayer();
}

function setCell(cellID, playerSymbol, color) {
    let cell = document.querySelector(`#${cellID}`);
    cell.innerHTML = playerSymbol;
    cell.style.color = color;
  }
  

// Switches the current player
function switchPlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    setPlayerTurn(currentPlayer);
}

// Switches the starting player
function switchStartingPlayer(){
    startingPlayer = startingPlayer === "X" ? "O" : "X";
    currentPlayer = startingPlayer;
    setPlayerTurn(currentPlayer);
}

// Updates the player turn text
function setPlayerTurn(player) {
    playerTurn.innerHTML = "Turn: " + player;
}

// Called when the restart button is clicked
function restartGame() {
    gameRunning = true;
    switchStartingPlayer();

    // Reset the grid state and clear the cells
    gridState = ["", "", "", "", "", "", "", "", ""];
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.innerHTML = "";
        cell.style.backgroundColor = "white";
    });

    // Hide the game state and restart button
    gameState.style.display = "none";
    restart.style.display = "none";

     // If starting player is computer, call computerMove()
    if (startingPlayer === "O") {
        setTimeout(computerMove, 750);
    }
}

// Checks if any game over conditions have been met
function checkGameStatus() {
    let roundWon = false;

    // Loop through all 8 winning conditions
    for (let i = 0; i < 8; i++) {
        const winCondition = winningConditions[i];

        // Get the symbol in each cell of the winning condition
        let a = gridState[winCondition[0]];
        let b = gridState[winCondition[1]];
        let c = gridState[winCondition[2]];

        // Continue if any cell is empty
        if (a === '' || b === '' || c === '') {
            continue;
        }

        // If all cells have the same symbol, game is won
        if (a === b && b === c) {
            roundWon = true;

            // Gets the cells that make up the winning condition, and change their background colour
            let cells = winningConditions[i].map(index => document.querySelector(`#cell${index + 1}`));
            cells.forEach(cell => {
                cell.style.backgroundColor = "yellow";
            });
            break
        }
    }

    if (roundWon) {
        gameState.innerHTML = winningMessage();
        
        // Increment the score of whoever won
        if (currentPlayer === "X") {
            xScore++;
            userWon = true;
        } else {
            yScore++;
        }

        // update the score text
        document.getElementById('score').innerHTML = "Score: " + xScore + " - " + yScore;

        // Show the game state and restart button
        gameState.style.display = "block";
        restart.style.display = "block";
        gameRunning = false;
        return;
    }

    let roundDraw = !gridState.includes("");
    if (roundDraw) {
        gameState.innerHTML = drawMessage();
        gameState.style.display = "block";
        restart.style.display = "block";
        gameRunning = false;
        return;
    }
}